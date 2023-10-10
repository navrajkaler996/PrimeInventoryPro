//Importing components
import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import DepartmentDescription from "./components/DepartmentDescription";
import StockAlerts from "./components/StockAlert";

//Importing utilities
import TopSellings from "./components/TopSellings";

const Dashboard: React.FC = () => {
  return (
    <div id="dashboard-container" className="lg:max-w-full md:w-full w-full">
      <DepartmentDescription />
      <Calculations />
      <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-[1fr] mt-[7rem]">
        <StockAlerts />

        <TopSellings />
      </div>
      <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-[1fr] mt-[7rem]">
        <Chart />
        <div>Component</div>
      </div>
    </div>
  );
};

export default Dashboard;
