import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale, //x axis
    LinearScale, //y axis
    Tooltip,
    Legend
} from "chart.js";


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
        min: 0,
        max: 50000
      },
    },
  };

  const data = {
    labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Sales',
        data: [
            12000,
            15000,
            18000,
            22000,
            28000,
            35000,
            42000,
            45000,
            39000,
            32000,
            26000,
            14000
        ],
        backgroundColor: "#55FF00",
        borderColor: "black",
        pointBorderColor: "#55FF00",
        fill: true
    },
    {
        label: 'Expenses',
        data: [
            11000,
            14000,
            16000,
            20000,
            24000,
            31000,
            38000,
            41000,
            36000,
            30000,
            24000,
            12000
        ],
        backgroundColor: "#FF0000",
        borderColor: "black",
        pointBorderColor: "#FF0000",
        fill: true
    },
]
}


export const Chart:React.FC = () => {

    return <div id="dashboard-chart">
        <div className="w-[800px] h-auto bg-white mt-[70px] ml-[60px] rounded-custom shadow-custom">
            <h1 className="ml-[20px] pt-[10px] text-[20px]">Sales and Expenses</h1>
            <hr className="m-[15px] text-gray" />
            <div>
                <Bar 
                 style={{"padding": "0px 20px"}}
                 data={data} 
                 options={options} />
            </div>
        </div>
    </div>

}

export default Chart;