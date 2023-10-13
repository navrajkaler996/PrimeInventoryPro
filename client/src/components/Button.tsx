import { ButtonType } from "./utils/types";
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

  return <>{value}</>;
};

const BUTTON_TAILWIND = {
  NOT_DISABLED:
    "group w-[8rem] h-[3rem] bg-primary mr-[2rem] shadow-custom uppercase tracking-[1px]",
  DISABLED: "bg-gray shadow-custom uppercase tracking-[1px] cursor-not-allowed",
};

//////THIS FUNCTION CREATES A BUTTON.
const Button: React.FC<ButtonType> = ({
  value,
  clickHandler,
  disabled = false,
  styles,
}) => {
  return (
    <button
      id="btn"
      onClick={(e) => clickHandler(e)}
      style={styles}
      disabled={disabled}
      className={
        !disabled ? BUTTON_TAILWIND.NOT_DISABLED : BUTTON_TAILWIND.DISABLED
      }>
      {assembleValue(value, disabled)}
    </button>
  );
};

export default Button;
