import { ChangeEventHandler } from "react";

interface InputType {
  label: string;
  changeHandler: ChangeEventHandler;
  value: string | number;
  type: string;
  disabled: boolean;
}

const Input: React.FC<InputType> = ({
  label,
  changeHandler,
  value,
  type = "text",
  disabled,
}) => {
  return (
    <>
      <label>{label}</label>
      <br />
      <input
        type={type}
        id={label?.split(" ")?.join("_")}
        name={label?.split(" ")?.join("_")}
        value={value}
        onChange={changeHandler}
        className="border-[1.5px] border-gray w-[30rem] h-[3.5rem] mt-[1rem] pl-[1rem]"
        placeholder={`Enter ${label} `}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
