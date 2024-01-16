import Table from "../../components/Table";
import Switch from "../../assets/switch.png";
import { useEffect, useState } from "react";
import {
  ADMIN_PANEL_DEPARTMENTS_KEYS,
  ADMIN_PANEL_EMPLOYEES_KEYS,
  ADMIN_PANEL_HEADINGS,
  ADMIN_PANEL_SUBDEPARTMENTS_KEYS,
} from "../../utils/constants";
import useDepartment from "../../hooks/useDepartment";
import { useListSubDepartmentsForAdminQuery } from "../../services/subdepartment";
import useEmployees from "../../hooks/useEmployee";

const StoreData: React.FC = ({
  departmentData,
  departmentIsLoading,
  subDepartmentsData,
  subDepartmentIsLoading,
  employeeData,
  employeeIsLoading,
}) => {
  const [displayValue, setDisplayValue] = useState<string>(
    ADMIN_PANEL_HEADINGS.TOTAL_DEPARTMENTS
  );

  const [displayData, setDisplayData] = useState();

  const changeDisplayValue = () => {
    if (displayValue === ADMIN_PANEL_HEADINGS.TOTAL_DEPARTMENTS) {
      setDisplayValue(ADMIN_PANEL_HEADINGS.TOTAL_SUBDEPARTMENTS);
    } else if (displayValue === ADMIN_PANEL_HEADINGS.TOTAL_SUBDEPARTMENTS) {
      setDisplayValue(ADMIN_PANEL_HEADINGS.TOTAL_EMPLOYEES);
    } else if (displayValue === ADMIN_PANEL_HEADINGS.TOTAL_EMPLOYEES) {
      setDisplayValue(ADMIN_PANEL_HEADINGS.TOTAL_DEPARTMENTS);
    }
  };

  useEffect(() => {
    if (displayValue === ADMIN_PANEL_HEADINGS.TOTAL_DEPARTMENTS)
      setDisplayData(departmentData);

    if (displayValue === ADMIN_PANEL_HEADINGS.TOTAL_SUBDEPARTMENTS)
      setDisplayData(subDepartmentsData);

    if (displayValue === ADMIN_PANEL_HEADINGS.TOTAL_EMPLOYEES)
      setDisplayData(employeeData);
  }, [
    displayValue,
    departmentIsLoading,
    subDepartmentIsLoading,
    employeeIsLoading,
  ]);

  return (
    <div id="store-data">
      <div className="max-w-[80rem] w-[90%] h-[38rem] lg:ml-[6rem] bg-white  rounded-custom shadow-custom overflow-auto">
        <>
          {" "}
          <div className="flex justify-between items-center ">
            <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">{displayValue}</h1>
            <img
              src={Switch}
              className="w-[2rem] mr-[1.5rem] cursor-pointer transition-all ease-in-out duration-100 hover:scale-[1.5]"
              onClick={changeDisplayValue}
            />
          </div>
          <hr className="m-[1.5rem] text-gray" />
          <div>
            <Table
              data={displayData}
              options={{
                keys:
                  displayValue === ADMIN_PANEL_HEADINGS.TOTAL_DEPARTMENTS
                    ? ADMIN_PANEL_DEPARTMENTS_KEYS
                    : displayValue === ADMIN_PANEL_HEADINGS.TOTAL_SUBDEPARTMENTS
                    ? ADMIN_PANEL_SUBDEPARTMENTS_KEYS
                    : ADMIN_PANEL_EMPLOYEES_KEYS,
                lastProduct: () => {},
              }}
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default StoreData;
