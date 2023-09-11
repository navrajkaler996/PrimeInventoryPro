import { stockAlert } from "../../../data/stockAlert";
import { stockAlertKeys } from "../../../utils/constants";

const StockAlerts: React.FC = () => {
  //104704253249

  return (
    <div id="dashboard__stockalerts">
      <div className="w-[800px] h-[315px] bg-white mt-[70px] ml-[60px] rounded-custom shadow-custom overflow-auto">
        <h1 className="ml-[20px] pt-[10px] text-[20px]">Stock alert</h1>
        <hr className="m-[15px] text-gray" />
        <div>
          <table className="table-fixed w-[100%] border-seperate border-spacing-y-3">
            <thead className="sticky top-0 bg-white">
              <tr>
                {stockAlertKeys?.map((key) => (
                  <th>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center capitalize">
              {stockAlert?.map((alert) => {
                return (
                  <tr className="mt-[40px]">
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
