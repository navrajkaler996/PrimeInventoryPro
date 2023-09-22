import { ProductDataType } from "./types";

export const createTopSellingData = (topSellingData: ProductDataType[]) => {
  const data = topSellingData?.map((product: any) => product?.total_sales);

  const labels = topSellingData?.map((product: any) => product?.product_name);

  return {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#800080",
          "#00FFFF",
          "#FFA500",
          "#FFC0CB",
          "#A52A2A",
          "#808080",
        ],
      },
    ],
  };
};
