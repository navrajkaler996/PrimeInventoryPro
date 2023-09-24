import { SKELETON_STYLES } from "../../../utils/constants";

const StockAlertSkeleton: React.FC = () => {
  return (
    <div id="dashboard__stockalerts">
      <div
        className=" max-w-[80rem] h-[31.5rem] bg-white  ml-[6rem] rounded-custom shadow-custom overflow-auto"
        style={SKELETON_STYLES}></div>
    </div>
  );
};

export default StockAlertSkeleton;
