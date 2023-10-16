import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { LoginFormType } from "../Inventory/utils/types";

const Login: React.FC = () => {
  const [form, setForm] = useState<LoginFormType>({
    email: "",
    password: "",
    errors: {
      email: false,
      password: false,
    },
  });

  //Handler called when input is changed
  const changeHandler = (e: any) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div
      id="login"
      className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[60%] h-[60vh] bg-white shadow-custom rounded-custom">
        <form className="w-[100%] h-[100%] flex flex-col justify-center items-center">
          <h1 className="uppercase text-[4rem]">Login</h1>
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
              <Button value="login" styles={{ margin: "0 auto" }} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
