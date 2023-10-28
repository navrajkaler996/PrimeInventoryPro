import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Importing components
import TotalProducts from "./components/TotalProducts";
import Department from "../Dashboard/components/DepartmentDescription";
import SearchBar from "./components/SearchBar";
import Button from "../../components/Button";
import AddToInventory from "./components/AddToInventory";
import Product from "./components/Product";

//Importing hooks
import useFetchProducts from "../../hooks/useFetchProduct";

//Importing types
import { DepartmentState } from "../../features/featureUtils/featureTypes";

//Importing constants
import { INVENTORY_VIEWS, TOTAL_PRODUCT_COUNT } from "../../utils/constants";
import { debounce } from "../../utils/helpers";

/////RENDERS A REACT FUNCTIONAL COMPONENT
//Inventory component renders everything related to inventory
const Inventory: React.FC = () => {
  //Fetching active department
  const currentDepartment: DepartmentState["activeDepartment"] = useSelector(
    (state: any) => state?.activeDepartment
  );

  //In this component, I have uplifted the state, which is being used in multiple child components.
  const [cursor, setCursor] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>("");
  const [productCode, setProductCode] = useState<string>("");
  //State to track if search is being performed or not
  const [doKeyword, setDoKeyword] = useState(false);

  //State to change the view of the app
  const [currentView, setCurrentView] = useState<string>(
    INVENTORY_VIEWS.PRODUCT_TABLE
  );

  //useEffect to set cursor to undefined when department is changed fromt dropwdown
  useEffect(() => {
    setCursor(undefined);
  }, [currentDepartment?.department_code]);

  //useFetchProduct custom hook is being used here to provide data to the following components:
  //SearchBar
  //TotalProducts
  const {
    products: productData,
    loading: productIsLoading,
    error: productError,
    hasMore,
  } = useFetchProducts(
    currentDepartment?.department_code,
    keyword.length > 0 ? undefined : cursor,
    TOTAL_PRODUCT_COUNT,
    keyword,
    {
      api: doKeyword && keyword.length > 0 ? "search" : "",
    }
  );

  //changeHandler function is used in the SearchBar component.
  //It is used to give a value to state keyword, which in turn, is used in the useFetchProduct hook
  //to fetch products according to the value.
  //This function is using debounce to avoid calling search api on every key stroke
  const searchBarChangeHandler = (value: string) => {
    if (doKeyword) setDoKeyword(false);
    setKeyword(value);
    const debounced = debounce(setDoKeyword, 600);

    debounced();
  };

  const addToInventoryChangeHandler = () => {
    setCurrentView(INVENTORY_VIEWS.ADD_TO_INVENTORY);
  };

  //Function that invokes when a row is clicked in the table
  const productClickHandler = (productCode: string) => {
    setProductCode(productCode);
    setCurrentView(INVENTORY_VIEWS.PRODUCT);
  };

  return (
    <div id="inventory__container" className="lg:max-w-full md:w-full w-full ">
      {/*
        Component that displays department description and dropdown
        */}
      <Department />
      <div className="flex justify-end items-center relative w-[95%] ml-[auto] mr-[auto] md:mt-[4rem] md:mb-[4rem]">
        {/*
          Button to open add to inventory product form
          */}
        <Button
          value="new"
          clickHandler={addToInventoryChangeHandler}
          disabled={false}
          styles={{}}
        />
        {/*
          Component that contains the search bar
          */}
        <SearchBar keyword={keyword} changeHandler={searchBarChangeHandler} />
      </div>

      {/*
      Component that contains the table which displays all the products
        */}
      {currentView === INVENTORY_VIEWS.PRODUCT_TABLE && (
        <TotalProducts
          productData={productData}
          productIsLoading={productIsLoading}
          productError={productError}
          hasMore={hasMore}
          cursor={cursor}
          setCursor={setCursor}
          productClickHandler={productClickHandler}
        />
      )}
      {/*
      Component that contains add to inventory product form
        */}
      {currentView === INVENTORY_VIEWS.ADD_TO_INVENTORY && <AddToInventory />}
      {/*
      Component that contains product view
        */}
      {currentView === INVENTORY_VIEWS.PRODUCT && (
        <Product productCode={productCode} />
      )}
    </div>
  );
};

export default Inventory;
