import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  Tooltip,
  Legend,
} from "chart.js";
import { chartData, chartOptions } from "../utils/chartUtils";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Chart: React.FC = () => {
  return (
    <div id="dashboard-chart">
      <div className="w-[800px] h-auto bg-white mt-[70px] ml-[60px] rounded-custom shadow-custom">
        <h1 className="ml-[20px] pt-[10px] text-[20px]">Sales and Expenses</h1>
        <hr className="m-[15px] text-gray" />
        <div>
          <Bar
            style={{ padding: "0px 20px" }}
            data={chartData}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
