import { SKELETON_STYLES } from "../../../../../utils/constants";

interface DepartmentDropdownProps {
  departmentData:
    | {
        createdAt: string;
        department_code: string;
        department_id: number;
        department_name: string;
        direct_supervisor: string;
        stock_alert: boolean;
        total_products: number;
        total_products_quantity: number;
        total_products_in_transit: number;
        total_sub_departments: number;
        updatedAt: string;
      }
    | undefined;
  subDepartmentsData: {
    sub_department_name: string;
    sub_department_code: string;
    department_code: string;
    department_name: string;
    total_products: number;
    total_products_quantity: number;
    total_products_in_transit: number;
    stock_alert: boolean;
    sub_department_manager: string;
  }[];
  subDepartmentIsLoading: boolean;
  subDepartmentChangeHandler: Function;
}

const DepartmentDropdown: React.FC<DepartmentDropdownProps> = ({
  departmentData,
  subDepartmentsData,
  subDepartmentIsLoading,
  subDepartmentChangeHandler,
}) => {
  return (
    <div className="lg:mr-[5rem] md:mr-[5rem] mt-[3rem] md:mt-[0]">
      <p className="w-[min-content] text-[1.2em] mb-[.5rem] tracking-[2.5px]">
        {departmentData?.department_name}
      </p>
      <select
        className="w-[30rem] md:w-[20rem] h-[3rem] bg-white  lg:mr-[8rem] shadow-custom pl-[5px] capitalize"
        style={subDepartmentIsLoading ? SKELETON_STYLES : {}}
        onChange={(e) => subDepartmentChangeHandler(e.currentTarget.value)}>
        {!subDepartmentIsLoading &&
          subDepartmentsData &&
          subDepartmentsData?.length > 0 &&
          subDepartmentsData.map((subDepartment: any, i: number) => (
            <>
              {i === 0 && (
                <option value={subDepartment.department_code}>
                  {subDepartment.department_name}
                </option>
              )}
              <option
                key={subDepartment.sub_department_code}
                value={subDepartment.sub_department_code}>
                {subDepartment.sub_department_name}
              </option>
            </>
          ))}
      </select>
    </div>
  );
};

export default DepartmentDropdown;
