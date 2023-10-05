import TotalProducts from "./components/TotalProducts";
import Department from "../Dashboard/components/DepartmentDescription";
import SearchBar from "./components/SearchBar";

const Inventory: React.FC = () => {
  return (
    <div id="inventory__container" className="lg:max-w-full md:w-full w-full">
      <Department />
      <div className="flex justify-end relative w-[95%] ml-[auto] mr-[auto] md:mt-[4rem] md:mb-[4rem]">
        <SearchBar />
      </div>
      <TotalProducts />
    </div>
  );
};

export default Inventory;
