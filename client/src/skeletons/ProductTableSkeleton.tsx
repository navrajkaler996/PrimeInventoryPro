import { SKELETON_STYLES } from "../utils/constants";

const ProductTableSkeleton: React.FC = () => {
  return (
    <div
      id="inventory__total-products-skeleton"
      className="w-[95%] h-[35rem] bg-white shadow-custom rounded-custom md:mt-[7rem] ml-[auto] mr-[auto]"
      style={SKELETON_STYLES}></div>
  );
};

export default ProductTableSkeleton;
