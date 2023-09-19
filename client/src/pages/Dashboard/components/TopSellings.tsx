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

  const options = {
    legend: {
      display: false, // Set this to false to hide the labels
    },
  };

  return (
    <div id="dashboard__top-sellings" className="ml-[4rem]">
      <div className="max-w-[35rem] bg-white rounded-custom shadow-custom">
        <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">
          Top selling in fresh
        </h1>
        <hr className="m-[1.5rem] text-gray" />
        <div>
          <Pie data={data} options={options} style={{ padding: "3rem" }} />
        </div>
      </div>
    </div>
  );
};

export default TopSellings;
