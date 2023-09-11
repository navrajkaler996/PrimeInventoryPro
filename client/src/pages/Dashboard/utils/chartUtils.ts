export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
      min: 0,
      max: 50000,
    },
  },
};

export const chartData = {
  labels: [
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
  ],
  datasets: [
    {
      label: "Sales",
      data: [
        12000, 15000, 18000, 22000, 28000, 35000, 42000, 45000, 39000, 32000,
        26000, 14000,
      ],
      backgroundColor: "#55FF00",
      borderColor: "black",
      pointBorderColor: "#55FF00",
      fill: true,
    },
    {
      label: "Expenses",
      data: [
        11000, 14000, 16000, 20000, 24000, 31000, 38000, 41000, 36000, 30000,
        24000, 12000,
      ],
      backgroundColor: "#FF0000",
      borderColor: "black",
      pointBorderColor: "#FF0000",
      fill: true,
    },
  ],
};
