import Table from "./Table";

const TotalProducts: React.FC = () => {
  return (
    <div
      id="inventory__total-products"
      className="w-[95%] bg-white md:mt-[7rem] ml-[auto] mr-[auto] shadow-custom rounded-custom">
      <Table />
    </div>
  );
};

export default TotalProducts;
