import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import {
  SalesLineChartType,
  SalesType,
} from "../../../../components/utils/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const createData = (salesData: any, lastMonth: number) => {
  let labels = [];

  let i: number = lastMonth;
  while (labels.length < 12) {
    labels.push(months[i]);
    i--;
    if (i < 0) i = 11;
  }

  const data = salesData.map((data: SalesType) => data.sales_amount);
  return {
    labels: labels.reverse(),
    datasets: [
      {
        label: "Chicken drumsticks",
        data: data,
        borderColor: "rgb(131, 131, 238)",
        backgroundColor: "rgb(220, 220, 250) rgba(220, 220, 250, 1)",
        pointBorderColor: "#000",
      fill: true,
      },
    ],
  };
};

const SalesLineChart: React.FC<SalesLineChartType> = ({ salesData }) => {
  const [data, setData] = useState(undefined);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "SALES THIS YEAR",
      },
    },
  };

  useEffect(() => {
    if (salesData?.length > 0) {
      let lastMonth: number = Number(
        salesData[salesData.length - 1].sales_date?.split("-")[1]
      );
      const lineChartData: any = createData(salesData, lastMonth - 1);
      setData(lineChartData);
    }
  }, [salesData]);

  return (
    <div id="line-chart" className="w-[100%] mx-auto my-[3rem]">
      {data && <Line data={data} options={options} />}
    </div>
  );
};

export default SalesLineChart;
