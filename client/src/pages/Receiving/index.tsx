import TrucksInTransit from "../../assets/trucks_in_transit.png";
import ProductsInTransit from "../../assets/product.png";
import ReceivingReports from "./components/ReceivingReports";
import Filter from "./components/ReceivingReports/Filter";
/////RENDERS A REACT FUNCTIONAL COMPONENT
//Recieving component renders everything related to recieving
const Receiving: React.FC = () => {
  return (
    <div id="receiving">
      <div
        className="grid grid-rows-1 lg:grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr] mt-[4rem] md:mt-[7rem]"
        id="receiving__details">
        <div className="flex flex-col items-center md:grid lg:grid-rows-1 md:grid-rows-3 lg:grid-cols-3 md:grid-cols-1 md:ml-[0]  gap-x-[5rem] sm:justify-center">
          <div className="w-[80%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
            <img src={TrucksInTransit} className="w-[7rem] h-[7 rem]" />
            <div className="flex flex-col ml-[2rem]">
              <p>Trucks in transit</p>
              <p className="flex items-center text-[2rem] mx-auto">
                {" "}
                <span className="text-[3.5rem] mr-[.5rem]">7</span>
              </p>
            </div>
          </div>
          <div className="w-[80%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
            <img src={ProductsInTransit} className="w-[7rem] h-[7rem]" />
            <div className="flex flex-col ml-[2rem]">
              <p>Products in transit</p>
              <p className="flex items-center text-[2rem] mx-auto">
                {" "}
                <span className="text-[3.5rem] mr-[.5rem]">1232</span>
              </p>
            </div>
          </div>
          <div className="w-[80%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
            <img src={TrucksInTransit} className="w-[8rem] h-[8rem]" />
            <div className="flex flex-col ml-[2rem]">
              <p>Trucks in transit</p>
              <p className="flex items-center text-[2rem] mx-auto">
                {" "}
                <span className="text-[3.5rem] mr-[.5rem]">7</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto flex justify-end mt-[4rem]">
        <Filter />
      </div>

      <ReceivingReports />
    </div>
  );
};

export default Receiving;
