import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { LoginFormType } from "../Inventory/utils/types";
import useLogin from "../../hooks/useLogin";
import { useLocation, useNavigate } from "react-router-dom";
import FlashMessage from "../../components/FlashMessage";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../features/userSlice";
import Logo from "../../assets/logo.png";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { state } = location;

  const [form, setForm] = useState<LoginFormType>({
    email: "",
    password: "",
    errors: {
      email: false,
      password: false,
    },
  });

  const {
    clickHandler,
    loading: loginIsLoading,
    requestStatus,
    error,
    userData,
  } = useLogin();

  //Handler called when input is changed
  const changeHandler = (e: any) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      localStorage.removeItem("accessToken");
    }
  }, []);

  useEffect(() => {
    if (
      requestStatus.type === "success" &&
      localStorage.getItem("accessToken")
    ) {
      navigate("/dashboard");
    }
  }, [requestStatus]);

  useEffect(() => {
    if (userData) {
      dispatch(loggedInUser(userData));
    }
  }, [userData]);

  return (
    <div
      id="login"
      className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[60%] bg-white py-[2rem] shadow-custom rounded-custom">
        <form className="w-[100%] h-[100%] flex flex-col justify-center items-center">
          {/* {state?.message && (
            <FlashMessage message={state.message} type="failed" />
          )} */}
          <img src={Logo} width="250px" className="mx-auto" />
          {/* <p className="mt-[1rem] normal-case">
            Login using your email and password
          </p> */}
          <div className="py-[3rem]">
            <div id="login__email" className="mb-[3rem]">
              <Input
                label="email"
                type="email"
                value={form.email}
                changeHandler={changeHandler}
                disabled={false}
                showLabel={true}
                styles={{}}
              />
            </div>
            <div id="login__password" className="mb-[3rem]">
              <Input
                label="password"
                type="password"
                value={form.password}
                changeHandler={changeHandler}
                disabled={false}
                showLabel={true}
                styles={{}}
              />
            </div>
            <div id="login__submit" className=" text-center">
              <Button
                value="login"
                styles={{}}
                disabled={!(form.email.length > 0 && form.password.length > 0)}
                loading={loginIsLoading}
                clickHandler={(e: KeyboardEvent) => {
                  e.preventDefault();

                  clickHandler(
                    { email: form.email, password: form.password },
                    {
                      method: "POST",
                      type: "LOGIN_AUTH",
                    }
                  );
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
