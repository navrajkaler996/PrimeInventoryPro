import { SKELETON_STYLES } from "../../../utils/constants";

const CalculationsSkeleton = () => {
  return (
    <>
      <div className="w-[70%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
        <div style={SKELETON_STYLES} className="w-[8rem] h-[8rem]">
          {" "}
        </div>
      </div>
      <div className="w-[70%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
        <div style={SKELETON_STYLES} className="w-[8rem] h-[8rem]">
          {" "}
        </div>
      </div>
      <div className="w-[70%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
        <div style={SKELETON_STYLES} className="w-[8rem] h-[8rem]">
          {" "}
        </div>
      </div>
    </>
  );
};

export default CalculationsSkeleton;
