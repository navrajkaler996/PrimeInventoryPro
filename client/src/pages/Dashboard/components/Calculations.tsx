import Sales from "../../../assets/sales.png";
import Expenses from "../../../assets/expenses.png";
import Profit from "../../../assets/profit.png";
import InventorySummary from "./InventorySummary";
import useSales from "../../../hooks/useSales";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CalculationsSkeleton from "./CalculationsSkeleton";

interface calculationsInterface {
  type: string;
  value: Number;
  trend: Number;
  imagePath: string;
}

const Calculations: React.FC = () => {
  const { store_code } = useSelector((state: any) => state.loggedInUser);

  const [calculations, setCalculations] = useState<
    calculationsInterface[] | []
  >([]);

  const {
    data: monthlySalesData,
    loading: monthlySalesLoading,
    error: monthlySalesError,
  } = useSales(store_code, undefined, {
    type: "GET_MONTHLY_SALES",
    method: "GET",
  });

  //Function to return the image for each calculations div.
  const getImage = (type: string) => {
    return type === "Sales" ? Sales : type === "Expenses" ? Expenses : Profit;
  };

  const calculateSales = (data: any) => {
    let difference = (
      ((data[1].total_sales - data[0].total_sales) / data[0].total_sales) *
      100
    ).toFixed(2);

    return {
      type: "Sales",
      value: data[1].total_sales,
      trend: Number(difference),
      imagePath: "../assets/sales.png",
    };
  };

  const calculateExpenses = (data: any) => {
    let difference = (
      ((data[1].total_expenses - data[0].total_expenses) /
        data[0].total_expenses) *
      100
    ).toFixed(2);

    return {
      type: "Expenses",
      value: data[1].total_expenses,
      trend: Number(difference),
      imagePath: "../assets/expenses.png",
    };
  };

  const calculateProfit = (data: any) => {
    let currentMonthProfit = data[1].total_sales - data[1].total_expenses;
    let lastMonthProfit = data[0].total_sales - data[0].total_expenses;

    let difference = (
      ((currentMonthProfit - lastMonthProfit) / lastMonthProfit) *
      100
    ).toFixed(2);

    return {
      type: "Profit",
      value: currentMonthProfit,
      trend: Number(difference),
      imagePath: "../assets/profit.png",
    };
  };

  useEffect(() => {
    if (monthlySalesData?.length > 0) {
      const calculatedSales = calculateSales(monthlySalesData);
      const calculatedExpenses = calculateExpenses(monthlySalesData);
      const calculatedProfit = calculateProfit(monthlySalesData);

      let temp: calculationsInterface[] = [];
      temp.push(calculatedSales);
      temp.push(calculatedExpenses);
      temp.push(calculatedProfit);

      setCalculations(temp);
    }
  }, [monthlySalesData]);

  return (
    <div
      className="grid grid-rows-1 lg:grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr] mt-[8rem] "
      id="dashboard__calculations">
      <div className="flex flex-col items-center md:grid lg:grid-rows-1 md:grid-rows-3 lg:grid-cols-3 md:grid-cols-1  gap-x-[5rem] sm:justify-center lg:ml-[0] ml-[9rem]">
        {/* Three boxes displaying sales, expenses, and profit */}
        {calculations?.length > 0 ? (
          calculations?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[70%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom border-b-4 border-b-primary">
                <img src={getImage(item.type)} className="w-[8rem] h-[8rem]" />
                <div className="flex flex-col ml-[2rem]">
                  <p>{item.type}</p>
                  <p className="flex items-center text-[2rem]">
                    {" "}
                    <span className="text-[3.5rem] mr-[.5rem]">$</span>
                    {item.value.toString()}
                  </p>
                </div>

                {item.trend.valueOf() > 0 ? (
                  <span className="absolute top-[.5rem] right-[1rem]  text-success-2">
                    {" "}
                    +{item.trend.toString()}{" "}
                  </span>
                ) : (
                  <span className="absolute top-[.5rem] right-[1rem] text-error">
                    {" "}
                    {item.trend.toString()}
                  </span>
                )}
              </div>
            );
          })
        ) : (
          <CalculationsSkeleton />
        )}
      </div>

      <InventorySummary />
    </div>
  );
};

export default Calculations;
