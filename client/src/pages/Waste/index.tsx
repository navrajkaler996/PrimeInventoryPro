import Markdown from "../../assets/markdown.png";
import Throws from "../../assets/throws.png";
import Donations from "../../assets/donations.png";

import { useState } from "react";

// Waste component renders everything related to waste management
const Waste: React.FC = () => {
  const [filter, setFilter] = useState({});

  const changeHandler = (filterValue: string) => {
    if (filterValue === "markdown") setFilter({ type: "markdown" });
    if (filterValue === "throws") setFilter({ type: "throws" });
    if (filterValue === "donation") setFilter({ type: "donation" });
  };

  return (
    <div id="waste">
      <div
        className="grid grid-rows-1 lg:grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr] mt-[4rem] md:mt-[7rem]"
        id="waste__details">
        <div className="flex flex-col items-center md:grid lg:grid-rows-1 md:grid-rows-3 lg:grid-cols-3 md:grid-cols-1 md:ml-[0] gap-x-[5rem] sm:justify-center">
          <div className="w-[80%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem] sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0] rounded-custom shadow-custom">
            <img src={Markdown} className="w-[7rem] h-[7rem]" />
            <div className="flex flex-col ml-[2rem]">
              <p>Markdown Items</p>
              <p className="flex items-center text-[2rem] mx-auto">
                <span className="text-[3.5rem] mr-[.5rem]">245</span>
              </p>
            </div>
          </div>
          <div className="w-[80%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem] sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0] rounded-custom shadow-custom">
            <img src={Throws} className="w-[7rem] h-[7rem]" />
            <div className="flex flex-col ml-[2rem]">
              <p>Thrown Items</p>
              <p className="flex items-center text-[2rem] mx-auto">
                <span className="text-[3.5rem] mr-[.5rem]">89</span>
              </p>
            </div>
          </div>
          <div className="w-[80%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem] sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0] rounded-custom shadow-custom">
            <img src={Donations} className="w-[7rem] h-[7rem]" />
            <div className="flex flex-col ml-[2rem]">
              <p>Donated Items</p>
              <p className="flex items-center text-[2rem] mx-auto">
                <span className="text-[3.5rem] mr-[.5rem]">156</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto flex justify-end mt-[4rem]">
        {/* <Filter filter={filter} changeHandler={changeHandler} /> */}
      </div>

      {/* <WasteReports filter={filter} /> */}
    </div>
  );
};

export default Waste;
