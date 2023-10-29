//Importing components
import Modal from "../../../../../components/Modal";

//Importing hooks
import useInventoryRequest from "../../../../../hooks/useInventoryRequest";
import { InventoryRequestType } from "../../../utils/types";

const InventoryRequest: React.FC<InventoryRequestType> = ({
  requestId,
  clickHandler,
}) => {
  const {
    data: inventoryRequestData,
    loading: inventoryRequestIsLoading,
    error: _inventoryRequestError,
  } = useInventoryRequest(requestId, undefined, 0, {
    method: "GET",
    type: "GET_BY_REQUEST_ID_INVENTORY_REQUEST",
  });

  return (
    <Modal
      data={inventoryRequestData ? inventoryRequestData[0] : []}
      clickHandler={clickHandler}
      isLoading={inventoryRequestIsLoading}
    />
  );
};
export default InventoryRequest;
