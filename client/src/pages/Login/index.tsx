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

  const [showMessage, setShowMessage] = useState(false);

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
      navigate("/app/dashboard");
    }
  }, [requestStatus]);

  useEffect(() => {
    if (userData) {
      dispatch(loggedInUser(userData));
    }
  }, [userData]);

  console.log(requestStatus);

  return (
    <div
      id="login"
      className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[60%] bg-white py-[2rem] shadow-custom rounded-custom relative">
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

            <div id="login__submit" className="relative text-center">
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
              <div
                className="absolute top-[6px] right-0 my-auto w-[2.5rem] h-[2.5rem] border rounded-[50%]  border-gray hover:cursor-pointer transition-all duration-300"
                onClick={() => setShowMessage(!showMessage)}>
                ?
              </div>

              {showMessage && (
                <div className="w-[25rem] mx-auto py-[2rem] text-[0.9em] normal-case">
                  <p className="my-[1rem] tracking-[.5px]">
                    <b>Login using following credentials </b>
                  </p>
                  <p className="text-left my-[1rem]">
                    <b>Email:</b> john.doe@primemart.com <br />
                    <b>Password:</b> password
                  </p>
                </div>
              )}
            </div>
          </div>
          {requestStatus?.type === "failed" && (
            <div className="w-[100%] mx-auto py-[2rem] text-[0.9em] normal-case">
              <FlashMessage message={requestStatus.message} type="failed" />{" "}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
