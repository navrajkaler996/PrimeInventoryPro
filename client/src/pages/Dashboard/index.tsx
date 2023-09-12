import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import StockAlerts from "./components/StockAlert";

const Dashboard: React.FC = () => {
  return (
    <div id="dashboard-container" className="max-w-full">
      <Calculations />
      <StockAlerts />
      <Chart />
    </div>
  );
};

export default Dashboard;
