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
    <div id="dashboard__charts">
      <div className="max-w-[80rem] h-auto bg-white mt-[7rem] ml-[6rem] rounded-custom shadow-custom">
        <div className="flex justify-between items-center ">
          <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">{displayValue}</h1>
          <img
            src={Switch}
            className="w-[2rem] mr-[1.5rem] cursor-pointer transition-all ease-in-out duration-100 hover:scale-[1.5]"
            onClick={() =>
              setDisplayValue((prev) =>
                prev === CHART_HEADINGS.SALES_AND_EXPENSES
                  ? CHART_HEADINGS.PROFIT
                  : CHART_HEADINGS.SALES_AND_EXPENSES
              )
            }
          />
        </div>
        <hr className="m-[1.5rem] text-gray" />
        <div className="flex justify-center">
          <Bar
            style={{ padding: "0 2rem" }}
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
