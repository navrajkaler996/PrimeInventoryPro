//Importing components
import { useSelector } from "react-redux";
import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import DepartmentDescription from "./components/Department";
import StockAlerts from "./components/StockAlert";

//Importing action creators

//Importing utilities
import TopSellings from "./components/TopSellings";
import StockAlertSkeleton from "./components/StockAlertSkeleton";
import { DepartmentState } from "../../features/departmentSlice";

const Dashboard: React.FC = () => {
  //Extracting the current active department from the store
  const currentDepartment: DepartmentState["activeDepartment"] = useSelector(
    (state: any) => state?.activeDepartment
  );

  return (
    <div id="dashboard-container" className="max-w-full">
      <DepartmentDescription />
      <Calculations />
      <div className="grid grid-cols-[2fr,1fr] mt-[7rem]">
        <StockAlerts currentDepartment={currentDepartment} />

        <TopSellings />
      </div>
      <Chart />
    </div>
  );
};

export default Dashboard;
