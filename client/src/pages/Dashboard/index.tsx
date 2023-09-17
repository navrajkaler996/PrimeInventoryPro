import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Importing components
import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import DepartmentDescription from "./components/Department";
import StockAlerts from "./components/StockAlert";

//Importing API hooks
import { useGetByDepartmentCodeQuery } from "../../services/department";
import { useGetSubDepartmentsByDepartmentCodeQuery } from "../../services/subdepartment";
import { useGetStockAlertProductByDepartmentCodeQuery } from "../../services/product";

//Importing action creators
import { activeDepartment } from "../../features/departmentSlice";

//Importing utilities
import { createCurrentDepartment } from "./utils/dashboardUtils";
import { SubDepartmentType } from "./utils/types";

const Dashboard: React.FC = () => {
  const {
    data: departmentData,
    error: departmentError,
    isLoading: departmentIsLoading,
  } = useGetByDepartmentCodeQuery("DEP001");

  //DATA CONTAINING THE DETAILS OF ALL SUBDEPARTMENTS UNDER A SINGLE DEPARTMENT
  const {
    data: subDepartmentsData,
    error: subDepartmentsError,
    isLoading: subDepartmentIsLoading,
  } = useGetSubDepartmentsByDepartmentCodeQuery("DEP001");

  const {
    data: productData,
    error: productError,
    isLoading: productIsLoading,
  } = useGetStockAlertProductByDepartmentCodeQuery("DEP001");

  const dispatch = useDispatch();

  //Extracting the current active department from the store
  const currentDepartment = useSelector(
    (state: any) => state?.activeDepartment
  );

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
    //Again, the createCurrentDepartment function is used to transform the data into proper form,
    /////in order to avoid conflicts.
    currentDepartment = createCurrentDepartment(currentDepartment);
    dispatch(activeDepartment(currentDepartment));
  };
  return (
    <div id="dashboard-container" className="max-w-full">
      <DepartmentDescription
        departmentData={currentDepartment}
        departmentError={departmentError}
        departmentIsLoading={departmentIsLoading}
        subDepartmentsData={subDepartmentsData}
        subDepartmentsError={subDepartmentsError}
        subDepartmentsIsLoading={subDepartmentIsLoading}
        subDepartmentChangeHandler={subDepartmentChangeHandler}
      />
      <Calculations />
      <StockAlerts
        productData={productData}
        productError={productError}
        productIsLoading={productIsLoading}
      />
      <Chart />
    </div>
  );
};

export default Dashboard;
