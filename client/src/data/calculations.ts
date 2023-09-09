interface calculationsInterface {
  type: string,
  value: string,
  trend: string,
  imagePath: string
}

export const calculations:calculationsInterface[] = [
  {
    type: "Sales",
    value: "10543.00",
    trend: "Increase",
    imagePath: "../assets/sales.png"
  },
  {
    type: "Expenses",
    value: "4322.00",
    trend: "Decrease",
    imagePath: "../assets/expenses.png"
  },
  {
    type: "Profit",
    value: "6221.00",
    trend: "Increase",
    imagePath: "../assets/profit.png"
  },
];
