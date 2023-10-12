interface ButtonType {
  value: string;
  clickHandler: Function;
  disabled: boolean;
  styles: Object;
}

const Button: React.FC<ButtonType> = ({
  value,
  clickHandler,
  disabled = false,
  styles,
}) => {
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

  return (
    <button
      id="btn"
      onClick={(e) => clickHandler(e)}
      style={styles}
      disabled={disabled}
      className={
        !disabled
          ? "group w-[8rem] h-[3rem] bg-primary mr-[2rem] shadow-custom uppercase tracking-[1px]"
          : "bg-gray shadow-custom uppercase tracking-[1px] cursor-not-allowed"
      }>
      {assembleValue(value, disabled)}
    </button>
  );
};

export default Button;
