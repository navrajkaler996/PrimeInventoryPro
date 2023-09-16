import { useDispatch } from "react-redux";
import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import DepartmentDescription from "./components/Department";
import StockAlerts from "./components/StockAlert";
import { useEffect } from "react";
import { departmentById } from "../../features/departmentSlice";
import { useGetByDepartmentCodeQuery } from "../../services/department";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  // const { data, error, isLoading } = useGetByDepartmentCodeQuery("DEP001");

  useEffect(() => {
    dispatch(departmentById());
  }, []);

  return (
    <div id="dashboard-container" className="max-w-full">
      <DepartmentDescription />
      <Calculations />
      <StockAlerts />
      <Chart />
    </div>
  );
};

export default Dashboard;
