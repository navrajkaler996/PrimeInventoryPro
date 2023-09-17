import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import DepartmentDescription from "./components/Department";
import StockAlerts from "./components/StockAlert";
import { useGetByDepartmentCodeQuery } from "../../services/department";
import { useGetSubDepartmentsByDepartmentCodeQuery } from "../../services/subdepartment";
import { useGetStockAlertProductByDepartmentCodeQuery } from "../../services/product";

const Dashboard: React.FC = () => {
  const {
    data: departmentData,
    error: departmentError,
    isLoading: departmentIsLoading,
  } = useGetByDepartmentCodeQuery("DEP001");

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

  return (
    <div id="dashboard-container" className="max-w-full">
      <DepartmentDescription
        departmentData={departmentData}
        departmentError={departmentError}
        departmentIsLoading={departmentIsLoading}
        subDepartmentsData={subDepartmentsData}
        subDepartmentsError={subDepartmentsError}
        subDepartmentsIsLoading={subDepartmentIsLoading}
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
