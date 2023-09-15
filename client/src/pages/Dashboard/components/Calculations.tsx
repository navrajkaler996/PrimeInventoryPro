import { calculations } from "../../../data/calculations";
import Increase from "../../../assets/increase.png";
import Decrease from "../../../assets/decrease.png";

import Sales from "../../../assets/sales.png";
import Expenses from "../../../assets/expenses.png";
import Profit from "../../../assets/profit.png";
import InventorySummary from "./InventorySummary";

const Calculations: React.FC = () => {
  //Function to return the image for each calculations div.
  const getImage = (type: string) => {
    return type === "Sales" ? Sales : type === "Expenses" ? Expenses : Profit;
  };

  return (
    <div
      className="grid grid-rows-1 md:grid-cols-[2fr,1fr] mt-[7rem]"
      id="dashboard__calculations">
      <div className="grid lg:grid-rows-1 md:grid-rows-3 lg:grid-cols-3 md:grid-cols-1 gap-x-[5rem] sm:justify-center">
        {calculations?.map((item) => {
          return (
            <div className="max-w-full flex justify-center items-center relative lg:w-[28rem] md:w-[30rem] sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[auto] md:mr-[auto] rounded-custom shadow-custom">
              <img src={getImage(item.type)} className="w-[8rem] h-[8rem]" />
              <div className="flex flex-col ml-[2rem]">
                <p>{item.type}</p>
                <p className="flex items-center text-[2rem]">
                  {" "}
                  <span className="text-[3.5rem] mr-[.5rem]">$</span>
                  {item.value}
                </p>
              </div>
              <img
                src={item.trend === "Increase" ? Increase : Decrease}
                className="absolute top-[.5rem] right-[1rem] w-[3.5rem]"
              />
            </div>
          );
        })}
      </div>

      <InventorySummary />
    </div>
  );
};

export default Calculations;