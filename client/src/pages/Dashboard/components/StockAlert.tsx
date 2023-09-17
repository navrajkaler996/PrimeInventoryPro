import { stockAlert } from "../../../data/stockAlert";
import { stockAlertKeys } from "../../../utils/constants";

const StockAlerts: React.FC = () => {
  //104704253249

  return (
    <div id="dashboard__stockalerts">
      <div className=" max-w-[80rem] h-[31.5rem] bg-white mt-[7rem] ml-[6rem] rounded-custom shadow-custom overflow-auto">
        <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Stock alert</h1>
        <hr className="m-[1.5rem] text-gray" />
        <div>
          <table className="table-fixed w-[100%] border-seperate border-spacing-y-3">
            <thead className="sticky top-0 bg-white">
              <tr>
                {stockAlertKeys?.map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center capitalize">
              {stockAlert?.map((alert, index) => {
                return (
                  <tr className="mt-[4rem]" key={index}>
                    <td className="pt-3">{alert.itemName}</td>
                    <td className="pt-3">{alert.code}</td>
                    <td className="pt-3">{alert.department}</td>
                    <td className="pt-3">{alert.onHands}</td>
                    <td className="pt-3">{alert.cap}</td>
                    <td className="pt-3">{alert.required}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StockAlerts;
