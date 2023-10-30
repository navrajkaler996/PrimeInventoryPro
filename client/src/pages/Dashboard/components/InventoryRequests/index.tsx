import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

//Importing components
import Table from "../../../../components/Table";

//Importing hooks
import useInventoryRequest from "../../../../hooks/useInventoryRequest";

//Importing utilities
import {
  INVENORY_REQUESTS_COUNT,
  INVENORY_REQUESTS_KEYS,
  SKELETON_STYLES,
} from "../../../../utils/constants";
import { UserState } from "../../../../features/featureUtils/featureTypes";
import InventoryRequest from "./components/InventoryRequest";
import FlashMessage from "../../../../components/FlashMessage";
import useProduct from "../../../../hooks/useProduct";

/////RENDERS A REACT FUNCTIONAL COMPONENT
//InventoryRequests components renders a component which contains a table
//The table has all the inventory requests to approve
const InventoryRequests: React.FC = () => {
  //State to track if the page is in initial render
  //It is helping for loading the component when API is being called
  const [isInitialRendering, setIsInitialRendering] = useState(true);
  const [expandInventoryRequest, setExpandInventoryRequest] = useState(false);
  const [cursor, setCursor] = useState<number | undefined>(undefined);
  const [requestId, setRequestId] = useState<number | undefined>();

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
    clickHandler: inventoryRequestClickHandler,
    requestStatus,
  } = useInventoryRequest(employeeId, cursor, INVENORY_REQUESTS_COUNT, {
    method: "GET",
    type: "GET_INVENTORY_REQUEST",
  });

  const {
    clickHandler: productClickHandler,
    loading: _productLoading,
    requestStatus: productRequestStatus,
    error: _productError,
  } = useProduct();

  //useEffect to track the id of the last item in the list for infinite scroll
  useEffect(() => {
    if (
      inventoryRequestData &&
      inventoryRequestData?.length > INVENORY_REQUESTS_COUNT - 1
    ) {
      lastProductId.current =
        inventoryRequestData[inventoryRequestData?.length - 1]["request_id"];
    } else {
      lastProductId.current = -1;
    }
  }, [inventoryRequestData]);

  //useEffect to track the initial rendering
  useEffect(() => {
    if (inventoryRequestData && isInitialRendering)
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

  const clickHandler = (id: number, value: boolean) => {
    if (id) setRequestId(id);
    if (value !== undefined) {
      const body = {
        decision: value,
      };

      let product_code = inventoryRequestData[0].product_code;
      if (product_code && requestId) {
        inventoryRequestClickHandler(body, requestId, {
          method: "PATCH",
          type: "UPDATE_INVENTORY_REQUEST",
        });

        if (value === false) {
          productClickHandler(undefined, product_code, {
            type: "DELETE_PRODUCT",
            method: "DELETE",
          });
        } else if (value === true) {
          productClickHandler(undefined, product_code, {
            type: "UPDATE_PENDING_APPROVAL_PRODUCT",
            method: "PATCH",
          });
        }
      }
    }
    setExpandInventoryRequest((prevState) => !prevState);
  };

  return (
    <div id="dashboard__inventory-requests" className="flex justify-center ">
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
              {requestStatus.status && (
                <FlashMessage
                  message={requestStatus.message}
                  type={requestStatus.type}
                  timer={true}
                />
              )}
              {inventoryRequestData && inventoryRequestData?.length > 0 && (
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
              )}
              {!inventoryRequestIsLoading &&
                inventoryRequestData.length === 0 && <p>nothing to show</p>}
            </div>
          </>
        </div>
      )}

      {expandInventoryRequest && (
        <InventoryRequest requestId={requestId} clickHandler={clickHandler} />
      )}
    </div>
  );
};

export default InventoryRequests;
