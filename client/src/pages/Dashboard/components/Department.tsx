import Meats from "../../../assets/departments/meats.png";
import Fresh from "../../../assets/departments/fresh.png";
import { SKELETON_STYLES } from "../../../utils/constants";
import { DepartmentType } from "../utils/types";

const Department: React.FC<DepartmentType> = ({
  departmentData,
  departmentError,
  departmentIsLoading,
  subDepartmentsData,
  subDepartmentsError,
  subDepartmentsIsLoading,
}) => {
  const getDepartmentImage = (departmentName: String | undefined) => {
    switch (departmentName) {
      case "fresh":
        return Fresh;
      case "meats":
        return Meats;
    }
  };

  console.log(subDepartmentsData);

  return (
    <div id="dashboard__department" className="flex justify-between  mt-[3rem]">
      <div
        className="relative flex bg-white items-center w-[35rem] h-[8rem] ml-[8rem] shadow-custom"
        style={departmentIsLoading ? SKELETON_STYLES : {}}>
        <img
          src={getDepartmentImage(departmentData?.department_name)}
          className="h-[5rem] ml-[3rem]"
        />
        <div className="ml-[3rem] text-center">
          <p className="text-[1.2em] tracking-[5px]">
            {departmentData?.department_name}
          </p>
          <hr className="mt-[.5rem mb-[.5rem]" />
          <p>{departmentData?.department_code}</p>
        </div>
        <p className="text-[.8em] absolute bottom-[5px] right-[10px]">
          {departmentData?.direct_supervisor}
        </p>
      </div>
      <div>
        <p className="w-[min-content] text-[1.2em] mb-[.5rem] tracking-[2.5px]">
          {departmentData?.department_name}
        </p>
        <select
          className="w-[30rem] h-[3rem] bg-white  mr-[8rem] shadow-custom"
          style={subDepartmentsIsLoading ? SKELETON_STYLES : {}}>
          <option>---choose---</option>
          {!subDepartmentsIsLoading &&
            subDepartmentsData &&
            subDepartmentsData?.length > 0 &&
            subDepartmentsData.map((subDepartment) => (
              <option key={subDepartment.sub_department_code}>
                {subDepartment.sub_department_name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Department;
