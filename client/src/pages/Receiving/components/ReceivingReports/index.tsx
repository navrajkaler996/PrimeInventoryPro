import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import Table from "../../../../components/Table";
import {
  RECEIVING_REPORTS_KEYS,
  RECEIVING_REPORT_COUNT,
} from "../../../../utils/constants";
import useReceiving from "../../../../hooks/useReceiving";

const ReceivingReports = () => {
  const [cursor, setCursor] = useState<number | undefined>(undefined);

  //Ref for IntersectionObserver
  const observer: RefObject<IntersectionObserver | null> = useRef(null);

  //Ref to track the last product in the list.
  const lastProductId = useRef<number | undefined>();

  const {
    data: receivingReportsData,
    loading: receivingReportsLoading,
    error: receivingReportsError,
    hasMore,
  } = useReceiving("store3117", undefined, 10, {
    type: "GET_RECEIVING_REPORTS",
    method: "GET",
  });

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

  console.log("a", receivingReportsData);

  return (
    <div
      id="receiving__reports"
      className="w-[95%] bg-white md:mt-[4rem] ml-[auto] mr-[auto] shadow-custom rounded-custom">
      <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Receiving reports</h1>
      <hr className="m-[1.5rem] text-gray" />
      <div className="h-[35rem] overflow-auto">
        <Table
          data={receivingReportsData}
          dataIsLoading={receivingReportsLoading}
          options={{
            keys: RECEIVING_REPORTS_KEYS,
            lastProduct: lastProduct,
          }}
        />
      </div>
    </div>
  );
};

export default ReceivingReports;
