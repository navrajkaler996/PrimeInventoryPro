import { useSelector } from "react-redux";
import useReceiving from "../../../hooks/useReceiving";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import {
  IN_TRANSIT_KEYS,
  RECEIVING_REPORTS_KEYS,
  RECEIVING_REPORT_COUNT,
} from "../../../utils/constants";
import Table from "../../../components/Table";

const TransitReport = () => {
  const [filter, setFilter] = useState({
    filter: {
      received: false,
    },
  });

  const [cursor, setCursor] = useState<number | undefined>(undefined);

  const { store_code } = useSelector((state: any) => state.loggedInUser);

  //Ref for IntersectionObserver
  const observer: RefObject<IntersectionObserver | null> = useRef(null);

  //Ref to track the last product in the list.
  const lastProductId = useRef<number | undefined>();

  const {
    data: receivingReportsData,
    loading: receivingReportsLoading,
    error: _receivingReportsError,
    hasMore,
  } = useReceiving(store_code, filter, cursor, 10, {
    type: "GET_RECEIVING_REPORTS",
    method: "GET",
  });

  useEffect(() => {
    setCursor(undefined);
  }, [filter]);

  useEffect(() => {
    if (
      receivingReportsData &&
      receivingReportsData?.length > RECEIVING_REPORT_COUNT - 1
    ) {
      lastProductId.current =
        receivingReportsData[receivingReportsData?.length - 1]["report_id"];
    } else lastProductId.current = -1;
  }, [receivingReportsData]);

  const lastProduct = useCallback(
    (node: HTMLElement | null) => {
      if (receivingReportsLoading) return;
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
    [receivingReportsLoading, hasMore]
  );

  return (
    <div
      id="dashboard__transit-report"
      className="flex justify-center mt-[4rem] lg:mt-[0] lg:ml-[4rem]">
      <div className="max-w-[35rem] w-[30rem] h-[38rem] bg-white rounded-custom shadow-custom overflow-auto">
        <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Trucks in transit</h1>
        <hr className="m-[1.5rem] text-gray" />
        <div className="h-[38rem] text-[0.9em]">
          <Table
            data={receivingReportsData}
            dataIsLoading={receivingReportsLoading}
            options={{
              keys: IN_TRANSIT_KEYS,
              lastProduct: lastProduct,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TransitReport;
