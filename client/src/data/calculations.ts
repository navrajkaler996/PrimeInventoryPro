interface calculationsInterface {
  type: string,
  value: number,
  trend: string,
  imagePath: string
}

export const calculations:calculationsInterface[] = [
  {
    type: "Sales",
    value: 10543.0,
    trend: "Increase",
    imagePath: "../assets/sales.png"
  },
  {
    type: "Expenses",
    value: 4322.0,
    trend: "Decrease",
    imagePath: "../assets/expenses.png"
  },
  {
    type: "Profit",
    value: 6221.0,
    trend: "Increase",
    imagePath: "../assets/profit.png"
  },
];
