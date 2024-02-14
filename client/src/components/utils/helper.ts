import SuccessIcon from "../../assets/toast/success.png";
import FailedIcon from "../../assets/toast/failed.png";
import moment from "moment";
import { COLOR_CODE, months } from "../../utils/constants";
//Index signature
interface ItemType {
  [key: string]: any;
}

//Function to return the values for the table
//Using moment.js for createdAt
export const getValue = (item: ItemType, value: string) => {
  for (const key in item) {
    if (key == value) {
      if (key == "createdAt" || key == "received_at")
        return moment(item[key]).fromNow();

      return item[key];
    }
  }
  return "";
};

export const getIcon = (type: string) => {
  if (type === "success") return SuccessIcon;
  if (type === "failed") return FailedIcon;
};

export const getBackgroundColor = (type: string) => {
  if (type === "success") return { backgroundColor: COLOR_CODE.SUCCESS };
  if (type === "failed") return { backgroundColor: COLOR_CODE.FAILED };
};

export const getInitials = (value: string) => {
  let splitValue = value.split(" ");

  return (
    splitValue[0].charAt(0)?.toUpperCase() +
    splitValue[1].charAt(0).toUpperCase()
  );
};

export const generateSalesAndExpenses = (data: any) => {
  const salesData = data?.map((d) => d.total_sales);
  const expensesData = data?.map((d) => d.total_expenses);

  const date = new Date();

  let month = date.getMonth();

  let labels: string[] = [];
  let i = 0;
  while (labels?.length < 12) {
    labels.push(months[month]);

    month++;

    if (month > 11) month = 0;
  }

  const chartSalesAndExpensesData = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        data: salesData,
        backgroundColor: "#55FF00",
        borderColor: "black",
        pointBorderColor: "#55FF00",
        fill: true,
      },
      {
        label: "Expenses",
        data: expensesData,
        backgroundColor: "#FF0000",
        borderColor: "black",
        pointBorderColor: "#FF0000",
        fill: true,
      },
    ],
  };

  return chartSalesAndExpensesData;
};

export const generateProfit = (data: any) => {
  const profitData = data?.map((d) => d.total_sales - d.total_expenses);

  const date = new Date();

  let month = date.getMonth();

  let labels: string[] = [];
  let i = 0;
  while (labels?.length < 12) {
    labels.push(months[month]);

    month++;

    if (month > 11) month = 0;
  }

  const chartProfitData = {
    labels: labels,
    datasets: [
      {
        label: "Profit",
        data: profitData,
        backgroundColor: "#55FF00",
        borderColor: "black",
        pointBorderColor: "#55FF00",
        fill: true,
      },
    ],
  };

  return chartProfitData;
};
