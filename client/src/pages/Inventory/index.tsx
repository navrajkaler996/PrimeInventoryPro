import TotalProducts from "./components/TotalProducts";
import Department from "../Dashboard/components/DepartmentDescription";

const Inventory: React.FC = () => {
  return (
    <div id="inventory__container" className="lg:max-w-full md:w-full w-full">
      <Department />
      <TotalProducts />
    </div>
  );
};

export default Inventory;
