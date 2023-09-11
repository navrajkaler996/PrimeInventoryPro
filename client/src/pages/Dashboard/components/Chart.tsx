import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  Tooltip,
  Legend,
} from "chart.js";

import Switch from "../../../assets/switch.png";

import {
  chartProfitData,
  chartSalesAndExpensesData,
  chartOptions,
} from "../utils/chartUtils";
import { useState } from "react";
import { CHART_HEADINGS } from "../../../utils/constants";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Chart: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>(
    CHART_HEADINGS.SALES_AND_EXPENSES
  );

  return (
    <div id="dashboard-chart">
      <div className="w-[800px] h-auto bg-white mt-[70px] ml-[60px] rounded-custom shadow-custom">
        <div className="flex justify-between items-center ">
          <h1 className="ml-[20px] pt-[10px] text-[20px]">{displayValue}</h1>
          <img
            src={Switch}
            className="w-[20px] mr-[15px] cursor-pointer transition-all ease-in-out duration-100 hover:scale-[1.5]"
            onClick={() =>
              setDisplayValue((prev) =>
                prev === CHART_HEADINGS.SALES_AND_EXPENSES
                  ? CHART_HEADINGS.PROFIT
                  : CHART_HEADINGS.SALES_AND_EXPENSES
              )
            }
          />
        </div>
        <hr className="m-[15px] text-gray" />
        <div>
          <Bar
            style={{ padding: "0px 20px" }}
            data={
              displayValue === CHART_HEADINGS.SALES_AND_EXPENSES
                ? chartSalesAndExpensesData
                : chartProfitData
            }
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
