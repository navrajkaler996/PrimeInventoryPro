import { useSelector } from "react-redux";

const InventorySummary: React.FC = () => {
  const currentDepartment = useSelector((state: any) => state.activeDepartment);
  return (
    <div
      id="dashboard__inventory-summary"
      className="flex flex-col lg:justify-around md:justify-start sm:items-center mt-[-4rem] mb-[-4rem] lg:ml-[12rem] md:ml-[0rem]">
      <div className="flex justify-between items-center max-w-full lg:w-[27rem] md:w-[25rem] sm:w-[35rem] h-[6rem] pl-[1.5rem] pr-[1.5rem] md:mt-[0] sm:mt-[5rem] bg-white rounded-custom shadow-custom">
        <p className="text-center">
          <span className="tracking-[1.5px]">
            <strong>Quantity </strong>
          </span>
          <br /> <span className="text-[.8em]">in inventory</span>
        </p>
        <p className="text-[1.2em] font-bold tracking-[1.5px]">
          {currentDepartment.total_products_quantity}
        </p>
      </div>
      <div className="flex justify-between items-center max-w-full lg:w-[27rem] md:w-[25rem] sm:w-[35rem] h-[6rem] pl-[1.5rem] pr-[1.5rem] lg:mt-0 md:mt-[6.5rem] sm:mt-[5rem] bg-white rounded-custom shadow-custom">
        <p className="text-center">
          <span className="tracking-[1.5px]">
            <strong>Quantity </strong>
          </span>
          <br />
          <span className="text-[.8em]">to be recieved</span>
        </p>
        <p className="text-[1.2em] font-bold tracking-[1.5px]">
          {currentDepartment.total_products_in_transit}
        </p>
      </div>
    </div>
  );
};

export default InventorySummary;
