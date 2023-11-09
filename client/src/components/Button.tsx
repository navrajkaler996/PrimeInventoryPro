//Importing components
import Spinner from "./Spinner";

//Importing utilities
import { ButtonType } from "./utils/types";
import Checkmark from "../assets/checkmark.png";
import Cross from "../assets/cross.png";

/////HELPERS
//This function returns a formatted text value for the button accoridng to the value provided
const assembleValue = (value: string, disabled: boolean) => {
  if (value == "new")
    return (
      <>
        {"+"}&nbsp;{value}{" "}
      </>
    );

  if (value == "add to inventory")
    return (
      <div className="flex justify-center ">
        <span
          className={
            !disabled
              ? "group-hover:tracking-[.5rem] transition-tracking ease-in-out duration-300"
              : ""
          }>
          {value}
        </span>
      </div>
    );

  if (value == "approve")
    return (
      <div className="flex justify-center ">
        <img src={Checkmark} className="w-[2rem]" />
        &nbsp;
        <span className="group-hover:tracking-[.5rem] transition-tracking ease-in-out duration-300">
          {value}
        </span>
      </div>
    );

  if (value == "reject")
    return (
      <div className="flex justify-center items-center">
        <img src={Cross} className="h-[1.5rem]" />
        &nbsp;
        <span className="group-hover:tracking-[.5rem] transition-tracking ease-in-out duration-300">
          {value}
        </span>
      </div>
    );

  return <>{value}</>;
};

const BUTTON_TAILWIND = {
  NOT_DISABLED:
    "group w-[8rem] h-[3rem] bg-primary mr-[2rem] uppercase tracking-[1px]",
  DISABLED: "bg-gray uppercase tracking-[1px] cursor-not-allowed",
};

//////THIS FUNCTION CREATES A BUTTON.
const Button: React.FC<ButtonType> = ({
  value,
  clickHandler,
  disabled = false,
  loading = false,
  styles,
}) => {
  return (
    <button
      id="btn"
      onClick={(e) => clickHandler(e)}
      style={styles}
      disabled={disabled || loading}
      className={
        !disabled ? BUTTON_TAILWIND.NOT_DISABLED : BUTTON_TAILWIND.DISABLED
      }>
      {loading ? <Spinner /> : assembleValue(value, disabled)}
    </button>
  );
};

export default Button;
