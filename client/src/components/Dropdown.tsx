import { ReactNode } from "react";

interface DropdownType {
  styles: Object;
  children: ReactNode;
}
const Dropdown: React.FC<DropdownType> = ({ styles = {}, children }) => {
  return (
    <div
      id="dropdown"
      className="flex flex-col w-[25rem] py-[1.2rem] bg-white absolute top-[110%] right-[2rem] z-[100] shadow-custom"
      style={styles}>
      {children}
    </div>
  );
};

export default Dropdown;
