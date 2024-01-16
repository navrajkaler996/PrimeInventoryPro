import Logo from "../assets/logo.png";
import Button from "./Button";

const HeaderHome: React.FC = () => {
  return (
    <div
      id="header-home"
      className="flex justify-between items-center w-full h-80 bg-white sticky top-[0] z-[10] shadow-custom">
      <img src={Logo} alt="logo" width="130px" className="ml-[2rem]" />
      <div>
        <Button
          value="sign in"
          styles={{
            background: "none",
          }}
        />
        <Button value="sign up" />
      </div>
    </div>
  );
};

export default HeaderHome;
