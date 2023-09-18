import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TopSellings: React.FC = () => {
  const data = {
    labels: ["One", "Two", "Three"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["aqua", "bloodorange", "purple"],
      },
    ],
  };

  const options = {};

  return (
    <div id="dashboard__top-sellings" className="ml-[4rem]">
      <div className="max-w-[35rem] bg-white rounded-custom shadow-custom">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default TopSellings;
