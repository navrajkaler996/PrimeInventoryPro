//Importing images
import Meats from "../../../assets/departments/meats.png";
import Fresh from "../../../assets/departments/fresh.png";
import Dairy from "../../../assets/departments/dairy.png";
import Produce from "../../../assets/departments/produce.png";
import Bakery from "../../../assets/departments/bakery.png";

//Importing utilities
import { SKELETON_STYLES } from "../../../utils/constants";
import { SubDepartmentType } from "../utils/types";
import { useGetByDepartmentCodeQuery } from "../../../services/department";
import { useGetSubDepartmentsByDepartmentCodeQuery } from "../../../services/subdepartment";
import { createCurrentDepartment } from "../utils/dashboardUtils";
import { activeDepartment } from "../../../features/departmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Department: React.FC = ({}) => {
  const dispatch = useDispatch();

  //Extracting the current active department from the store
  const currentDepartment = useSelector(
    (state: any) => state?.activeDepartment
  );

  //Executing hook to fetch a single department using department_code
  const {
    data: departmentData,
    error: departmentError,
    isLoading: departmentIsLoading,
  } = useGetByDepartmentCodeQuery("DEP001");

  //Executing hook to fetch a single subdepartment using department_code
  const {
    data: subDepartmentsData,
    error: subDepartmentsError,
    isLoading: subDepartmentIsLoading,
  } = useGetSubDepartmentsByDepartmentCodeQuery("DEP001");

  useEffect(() => {
    //When department data is fetched from the API, the data is dispatched to the store.
    if (departmentData) {
      //Before dispatching the data, it is transformed into proper form so that there are no conflicts
      /////when a subdepartment is selected from the dropdown.
      /////createCurrentDepartment function is used.
      const currentDepartment = createCurrentDepartment(departmentData);
      dispatch(activeDepartment(currentDepartment));
    }
  }, [departmentData]);

  //This change handler is passed to the Department component.
  /////It will be invoke when a subdepartment is selected from the dropdown.
  const subDepartmentChangeHandler = (subDepartmentCode: String) => {
    let currentDepartment = subDepartmentsData.find(
      (subDepartment: SubDepartmentType) =>
        subDepartment.sub_department_code === subDepartmentCode
    );

    //If selected department is a parent department.
    if (!currentDepartment) {
      currentDepartment = departmentData;
    }
    //Again, the createCurrentDepartment function is used to transform the data into proper form,
    /////in order to avoid conflicts.
    currentDepartment = createCurrentDepartment(currentDepartment);
    dispatch(activeDepartment(currentDepartment));
  };

  //This function returns the image according to the active depertment/subdepartment.
  const getDepartmentImage = (departmentName: String | undefined) => {
    switch (departmentName) {
      case "fresh":
        return Fresh;
      case "meats":
        return Meats;
      case "produce":
        return Produce;
      case "bakery":
        return Bakery;
      case "dairy/frozen":
        return Dairy;
    }
  };

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
            {currentDepartment?.department_name}
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
          className="w-[30rem] h-[3rem] bg-white  mr-[8rem] shadow-custom pl-[5px] capitalize"
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
    </div>
  );
};

export default Department;
