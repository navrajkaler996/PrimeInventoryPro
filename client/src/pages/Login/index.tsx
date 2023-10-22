import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { LoginFormType } from "../Inventory/utils/types";
import useLogin from "../../hooks/useLogin";
import { useLocation, useNavigate } from "react-router-dom";
import FlashMessage from "../../components/FlashMessage";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;

  const [form, setForm] = useState<LoginFormType>({
    email: "",
    password: "",
    errors: {
      email: false,
      password: false,
    },
  });

  const { clickHandler, loading, requestStatus, error } = useLogin();

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
    if (requestStatus.type === "success") {
      navigate("/dashboard");
    }
  }, [requestStatus]);

  return (
    <div
      id="login"
      className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[60%] bg-white py-[5rem] shadow-custom rounded-custom">
        <form className="w-[100%] h-[100%] flex flex-col justify-center items-center">
          <h1 className="uppercase text-[4rem]">Login</h1>
          {state?.message && (
            <FlashMessage message={state.message} type="failed" />
          )}
          <div id="login__email" className="mt-[3rem]">
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
          <div id="login__password" className="mt-[3rem]">
            <Input
              label="password"
              type="password"
              value={form.password}
              changeHandler={changeHandler}
              disabled={false}
              showLabel={true}
              styles={{}}
            />

            <div id="login__submit" className="mt-[3rem] text-center">
              <Button
                value="login"
                styles={{ padding: ".5rem 2rem" }}
                disabled={!(form.email.length > 0 && form.password.length > 0)}
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
