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

import { chartOptions } from "../utils/chartUtils";
import { useState } from "react";
import { CHART_HEADINGS, months } from "../../../utils/constants";
import * as React from "react";
import useSales from "../../../hooks/useSales";
import { useSelector } from "react-redux";
import {
  generateProfit,
  generateSalesAndExpenses,
} from "../../../components/utils/helper";
import { StoreSalesType } from "../../../components/utils/types";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Chart: React.FC = () => {
  const { store_code } = useSelector((state: any) => state.loggedInUser);

  const [displayValue, setDisplayValue] = useState<string>(
    CHART_HEADINGS.SALES_AND_EXPENSES
  );

  const [dataSet, setDataSet] = useState<StoreSalesType | undefined>(undefined);

  const {
    data: yearlySalesData,
    loading: yearlySalesLoading,
    error: yearlySalesError,
  } = useSales(store_code, undefined, {
    type: "GET_YEARLY_SALES",
    method: "GET",
  });

  React.useEffect(() => {
    if (yearlySalesData?.length > 0) {
      if (displayValue === CHART_HEADINGS.SALES_AND_EXPENSES) {
        const data = generateSalesAndExpenses(yearlySalesData);
        setDataSet(data);
      } else if (displayValue === CHART_HEADINGS.PROFIT) {
        const data = generateProfit(yearlySalesData);
        setDataSet(data);
      }
    }
  }, [yearlySalesData, displayValue]);

  return (
    <div id="dashboard__charts" className="flex justify-center ">
      <div className="max-w-[80rem] w-[90%] h-auto bg-white lg:ml-[6rem] rounded-custom shadow-custom">
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
          {dataSet !== undefined && (
            <Bar
              style={{ padding: "0 2rem", height: "32rem", maxHeight: "100%" }}
              data={dataSet}
              options={chartOptions}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Chart);
