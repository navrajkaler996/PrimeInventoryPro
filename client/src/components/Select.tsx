import { ChangeEventHandler } from "react";

interface SelectType {
  id: string;
  label: string;
  options: string[];
  changeHandler: ChangeEventHandler;
  styles: any;
}

const Select: React.FC<SelectType> = ({
  id,
  label,
  options,
  changeHandler,
  styles,
}) => {
  return (
    <>
      {label !== null && (
        <>
          {" "}
          <label>{label}</label>
          <br />
        </>
      )}
      <select
        id={label ? label?.split(" ")?.join("_") : id}
        name={label ? label?.split(" ")?.join("_") : id}
        onChange={changeHandler}
        className="border-[1.5px] border-gray w-[30rem] h-[3.5rem] mt-[1rem] text-center text-[.8em] decoration-gray uppercase"
        style={styles}>
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
