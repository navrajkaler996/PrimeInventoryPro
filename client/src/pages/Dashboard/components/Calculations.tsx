import {calculations} from "../../../data/calculations"
import Increase from "../../../assets/increase.png";
import Decrease from "../../../assets/decrease.png";

import Sales from "../../../assets/sales.png";
import Expenses from "../../../assets/expenses.png";
import Profit from "../../../assets/profit.png";

const Calculations:React.FC = () => {

    //Function to return the image for each calculations div.
    const getImage = (type: string) => {
        return type === "Sales" ? Sales : type === "Expenses" ? Expenses : Profit;
    }

    return <div className="flex" id="dashboard-calculations">
            {calculations?.map((item) => {
               return <div className="flex justify-center items-center relative w-[300px] h-[130px] bg-white ml-[60px] mt-[65px] rounded-custom shadow-custom">
                        <img src={getImage(item.type)} className="w-[80px] h-[80px]" />
                        <div className="flex flex-col ml-[20px]">
                            <p>{item.type}</p>
                            <p className="flex items-center text-[20px]"> <span className="text-[35px] mr-[5px]">$</span>{item.value}</p>
                        </div>
                        <img src={item.trend === 'Increase' ? Increase : Decrease} className="absolute top-[5px] right-[10px] w-[35px]"/>
                    </div>
               
             })}
              </div>
            
}

export default Calculations;