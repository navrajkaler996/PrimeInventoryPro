import { ChangeEventHandler } from "react";

interface SelectType {
  label: string;
  options: string[];
  changeHandler: ChangeEventHandler;
}

const Select: React.FC<SelectType> = ({ label, options, changeHandler }) => {
  return (
    <>
      <label>{label}</label>
      <br />
      <select
        id={label?.split(" ")?.join("_")}
        name={label?.split(" ")?.join("_")}
        onChange={changeHandler}
        className="border-[1.5px] border-gray w-[30rem] h-[3.5rem] mt-[1rem] text-center text-[.8em] decoration-gray uppercase">
        <option value="" disabled selected>
          ------Choose a department------
        </option>
        {options?.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
