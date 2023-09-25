import { useSelector } from "react-redux";

//Importing Pie charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

//Importing hooks
import { useGetTopSellingProdcutsByDepartmentCodeQuery } from "../../../services/product";

//Importing utilities
import { createTopSellingData } from "../utils/topSellingUtils";
import { SKELETON_STYLES } from "../../../utils/constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const TopSellings: React.FC = () => {
  const currentDepartment = useSelector((state: any) => state.activeDepartment);

  const {
    data: topSellingData,
    error: topSellingError,
    isLoading: topSellingIsLoading,
  } = useGetTopSellingProdcutsByDepartmentCodeQuery({
    departmentCode: currentDepartment?.department_code,
    count: 10,
  });

  const options = {};

  return (
    <div
      id="dashboard__top-sellings"
      className="flex justify-center mt-[4rem] lg:mt-[0] lg:ml-[4rem]">
      <div
        className="max-w-[35rem] h-[38rem] bg-white rounded-custom shadow-custom"
        style={topSellingIsLoading ? SKELETON_STYLES : {}}>
        <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">
          Top selling in {currentDepartment?.department_name}
        </h1>
        <hr className="m-[1.5rem] text-gray" />
        <div>
          {!topSellingIsLoading && topSellingData?.length > 0 && (
            <Pie
              data={createTopSellingData(topSellingData)}
              options={options}
              style={{ padding: ".5rem 0 1rem 1rem" }}
            />
          )}

          {!topSellingIsLoading && topSellingData?.length === 0 && (
            <h2>Nothing to show!</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSellings;
