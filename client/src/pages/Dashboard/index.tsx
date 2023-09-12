import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import DepartmentDescription from "./components/Department";
import StockAlerts from "./components/StockAlert";

const Dashboard: React.FC = () => {
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
