//Options that are passed as props to the Bar component
export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
    },
  },
};

//Data for Sales and Expenses
export const chartSalesAndExpensesData = {
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

//Data for profit
export const chartProfitData = {
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
      label: "Profit",
      data: [
        14000, 14000, 15000, 16000, 18000, 18000, 18000, 18000, 17000, 16000,
        11000, 9000,
      ],
      backgroundColor: "#55FF00",
      borderColor: "black",
      pointBorderColor: "#55FF00",
      fill: true,
    },
  ],
};
