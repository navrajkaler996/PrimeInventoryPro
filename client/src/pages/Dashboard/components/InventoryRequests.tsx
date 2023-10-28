import { RefObject, useCallback, useEffect, useRef, useState } from "react";

//Importing components
import Table from "../../../components/Table";

//Importing hooks
import useInventoryRequest from "../../../hooks/useInventoryRequest";

//Importing utilities
import {
  INVENORY_REQUESTS_COUNT,
  INVENORY_REQUESTS_KEYS,
  SKELETON_STYLES,
} from "../../../utils/constants";
import { UserState } from "../../../features/featureUtils/featureTypes";
import { useSelector } from "react-redux";

/////RENDERS A REACT FUNCTIONAL COMPONENT
//InventoryRequests components renders a component which contains a table
//The table has all the inventory requests to approve
const InventoryRequests: React.FC = () => {
  //State to track if the page is in initial render
  //It is helping for loading the component when API is being called
  const [isInitialRendering, setIsInitialRendering] = useState(true);
  const [cursor, setCursor] = useState<number | undefined>(undefined);

  //Tracking the product_id of the last rendered product for cursor.
  const lastProductId = useRef<number | undefined>();
  const observer: RefObject<IntersectionObserver | null> = useRef(null);

  const userData: UserState = useSelector((state: any) => state?.loggedInUser);
  const { employee_id: employeeId } = userData;

  //Calling useInventoryRequest custom hook to fetch the inventory requests
  const {
    data: inventoryRequestData,
    loading: inventoryRequestIsLoading,
    error: _inventoryRequestError,
    hasMore,
  } = useInventoryRequest(employeeId, cursor, INVENORY_REQUESTS_COUNT, {
    method: "GET",
    type: "GET_INVENTORY_REQUEST",
  });

  //useEffect to track the id of the last item in the list for infinite scroll
  useEffect(() => {
    if (inventoryRequestData?.length > INVENORY_REQUESTS_COUNT - 1) {
      lastProductId.current =
        inventoryRequestData[inventoryRequestData?.length - 1]["request_id"];
    } else {
      lastProductId.current = -1;
    }
  }, [inventoryRequestData]);

  //useEffect to track the initial rendering
  useEffect(() => {
    if (inventoryRequestData?.length > 0 && isInitialRendering)
      setIsInitialRendering(false);
  }, [inventoryRequestData, cursor]);

  //Using IntersectionObserver for infinite scroll
  const lastProduct = useCallback(
    (node: HTMLElement | null) => {
      if (inventoryRequestIsLoading) return;
      let currentObserver = observer.current as IntersectionObserver | null;
      if (currentObserver) currentObserver?.disconnect();

      currentObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (lastProductId && lastProductId.current != -1) {
            setCursor(lastProductId.current);
          }
        }
      });

      if (node) currentObserver.observe(node);
    },
    [inventoryRequestIsLoading, hasMore]
  );

  const clickHandler = () => {};

  return (
    <div id="dashboard__inventory-request" className="flex justify-center ">
      {isInitialRendering && (
        <div
          style={SKELETON_STYLES}
          className="max-w-[80rem] w-[90%] h-[38rem] lg:ml-[6rem] bg-white  rounded-custom shadow-custom overflow-auto">
          {" "}
        </div>
      )}
      {!isInitialRendering && (
        <div className="max-w-[80rem] w-[90%] h-[38rem] lg:ml-[6rem] bg-white  rounded-custom shadow-custom overflow-auto">
          <>
            {" "}
            <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">
              Inventory requests
            </h1>
            <hr className="m-[1.5rem] text-gray" />
            <div>
              {/* Using reusable component: ProductTable to display the data */}

              <Table
                data={inventoryRequestData}
                dataIsLoading={inventoryRequestIsLoading}
                dataError={false}
                options={{
                  lastProduct: lastProduct,
                  keys: INVENORY_REQUESTS_KEYS,
                }}
                clickHandler={clickHandler}
              />
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default InventoryRequests;
