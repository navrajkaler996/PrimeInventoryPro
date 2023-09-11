const InventorySummary: React.FC = () => {
  return (
    <div
      id="dashboard__inventory-summary"
      className="flex flex-col justify-around mt-[30px] mb-[-30px] ml-[50px]">
      <div className="flex justify-between items-center w-[270px] h-[60px] pl-[15px] pr-[15px] bg-white rounded-custom shadow-custom">
        <p className="text-center">
          <span className="tracking-[1.5px]">
            <strong>Quantity </strong>
          </span>
          <br /> <span className="text-[.8em]">in inventory</span>
        </p>
        <p className="text-[1.2em] font-bold tracking-[1.5px]">540</p>
      </div>
      <div className="flex justify-between items-center w-[270px] h-[60px] pl-[15px] pr-[15px] bg-white rounded-custom shadow-custom">
        <p className="text-center">
          <span className="tracking-[1.5px]">
            <strong>Quantity </strong>
          </span>
          <br />
          <span className="text-[.8em]">to be recieved</span>
        </p>
        <p className="text-[1.2em] font-bold tracking-[1.5px]">120</p>
      </div>
    </div>
  );
};

export default InventorySummary;
