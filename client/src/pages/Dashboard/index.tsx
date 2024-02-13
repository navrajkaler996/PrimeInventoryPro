//Importing components
import { useSelector } from "react-redux";
import Calculations from "./components/Calculations";
import Chart from "./components/Chart";
import DepartmentDescription from "./components/DepartmentDescription";
import StockAlerts from "./components/StockAlert";

//Importing utilities
import TopSellings from "./components/TopSellings";
import { UserState } from "../../features/featureUtils/featureTypes";
import InventoryRequests from "./components/InventoryRequests";
import TransitReport from "./components/TransitReport";

/////RENDERS A REACT FUNCTIONAL COMPONENT
//Dashboard is built according to the designation of the logged in employee
const Dashboard: React.FC = () => {
  const userData: UserState = useSelector((state: any) => state?.loggedInUser);
  const { employee_department_code: employeeDepartmentCode } = userData;

  return (
    <div id="dashboard-container" className="lg:max-w-full md:w-full w-full">
      <DepartmentDescription />
      <Calculations />
      <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-[1fr] mt-[7rem]">
        {employeeDepartmentCode &&
          !employeeDepartmentCode?.startsWith("STORE") && (
            <>
              <Chart />
              <TopSellings />
            </>
          )}
        {/* 
          InventoryRequests component is only rendered for the employee whose employee_department_code
          starts with STORE
        */}
        {employeeDepartmentCode &&
          employeeDepartmentCode?.startsWith("STORE") && (
            <>
              <InventoryRequests />
            </>
          )}
      </div>
      <div className="grid lg:grid-cols-[2fr,1fr] grid-cols-[1fr] my-[7rem]">
        <StockAlerts />
        <TransitReport />
      </div>
    </div>
  );
};

export default Dashboard;
