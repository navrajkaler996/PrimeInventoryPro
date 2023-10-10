import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Importing components
import TotalProducts from "./components/TotalProducts";
import Department from "../Dashboard/components/DepartmentDescription";
import SearchBar from "./components/SearchBar";
import Button from "../../components/Button";

//Importing slices
import { DepartmentState } from "../../features/departmentSlice";

//Importing hooks
import useProducts from "../../hooks/useProducts";

//Importing constants
import { TOTAL_PRODUCT_COUNT } from "../../utils/constants";
import AddToInventory from "./components/AddToInventory";

//INVENTORY COMPONENT DISPLAYS EVERYTHING RELATED TO THE PRODUCTS IN THE INVENTORY
const Inventory: React.FC = () => {
  //Fetching active department
  const currentDepartment: DepartmentState["activeDepartment"] = useSelector(
    (state: any) => state?.activeDepartment
  );

  //In this component, I have uplifted the state, which is being used in multiple child components.
  const [cursor, setCursor] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>("");
  //State to show AddToInventory form.
  const [showAddToInventory, setShowAddToInventory] = useState<boolean>(true);

  useEffect(() => {
    setCursor(undefined);
  }, [currentDepartment?.department_code]);

  //useProduct custom hook is being used here to provide data to the following components:
  //SearchBar
  //TotalProducts
  const {
    products: productData,
    loading: productIsLoading,
    error: productError,
    hasMore,
  } = useProducts(
    currentDepartment?.department_code,
    keyword.length > 0 ? undefined : cursor,
    TOTAL_PRODUCT_COUNT,
    keyword,
    {
      api: keyword.length > 0 ? "search" : "",
    }
  );

  //changeHandler function is used in the SearchBar component.
  //It is used to give a value to state keyword, which in turn, is used in the useProduct hook
  //to fetch products according to the value.
  const searchBarChangeHandler = (value: string) => {
    setKeyword(value);
  };

  const addToInventoryChangeHandler = () => {
    setShowAddToInventory((prevValue) => !prevValue);
  };

  return (
    <div id="inventory__container" className="lg:max-w-full md:w-full w-full">
      <Department />
      <div className="flex justify-end items-center relative w-[95%] ml-[auto] mr-[auto] md:mt-[4rem] md:mb-[4rem]">
        {/* <AddToInventory clickHandler={addToInventoryChangeHandler} /> */}
        <Button value="new" clickHandler={addToInventoryChangeHandler} />
        <SearchBar keyword={keyword} changeHandler={searchBarChangeHandler} />
      </div>
      {!showAddToInventory && (
        <TotalProducts
          productData={productData}
          productIsLoading={productIsLoading}
          productError={productError}
          hasMore={hasMore}
          cursor={cursor}
          setCursor={setCursor}
        />
      )}

      {showAddToInventory && <AddToInventory />}
    </div>
  );
};

export default Inventory;
