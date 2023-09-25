//Importing components
import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import DepartmentDescription from "./components/Department";
import StockAlerts from "./components/StockAlert";

//Importing action creators

//Importing utilities
import TopSellings from "./components/TopSellings";

const Dashboard: React.FC = () => {
  return (
    <div id="dashboard-container" className="lg:max-w-full md:w-full w-full">
      <DepartmentDescription />
      <Calculations />
      {/* <div className="grid grid-cols-[2fr,1fr] mt-[7rem]">
        <StockAlerts />

        <TopSellings />
      </div>
      <Chart /> */}
    </div>
  );
};

export default Dashboard;
