import Calculations from "./Calculations";
import Chart from "./Chart";
import StockAlerts from "./StockAlert";

const Dashboard:React.FC = () => {

    return <div id="dashboard-container" > 
        <Calculations />
        <StockAlerts />
        <Chart />
    </div> 

    
}

export default Dashboard;