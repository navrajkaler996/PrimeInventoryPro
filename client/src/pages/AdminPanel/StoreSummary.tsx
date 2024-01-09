import Departments from "../../assets/admin_panel/departments.png";
import Subdepartments from "../../assets/admin_panel/sub_departments.png";
import Users from "../../assets/admin_panel/users.png";

const StoreSummary = () => {
  return (
    <div
      id="store-summary"
      className="grid grid-rows-1 lg:grid-cols-[2fr,1fr] md:grid-cols-[2fr,1fr] mt-[4rem] md:mt-[7rem]">
      <div className="flex flex-col items-center md:grid lg:grid-rows-1 md:grid-rows-3 lg:grid-cols-3 md:grid-cols-1 md:ml-[0]  gap-x-[5rem] sm:justify-center">
        <div
          // key={index}
          className="w-[70%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
          <img src={Departments} className="w-[8rem] h-[8rem]" />
          <div className="flex flex-col ml-[2rem]">
            <p>Departments</p>
            <p className="flex items-center text-[2rem]">
              {" "}
              <span className="text-[3.5rem] mx-auto">4</span>
            </p>
          </div>
        </div>
        <div
          // key={index}
          className="w-[70%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
          <img src={Subdepartments} className="w-[8rem] h-[8rem]" />
          <div className="flex flex-col ml-[2rem]">
            <p>Subdepartments</p>
            <p className="flex items-center text-[2rem]">
              {" "}
              <span className="text-[3.5rem]  mx-auto">4</span>
              {/* {item.value} */}
            </p>
          </div>
        </div>
        <div
          // key={index}
          className="w-[70%] md:max-w-full flex lg:justify-center md:justify-around items-center relative lg:w-[28rem] md:w-[35rem]  sm:w-[28rem] h-[13rem] bg-white lg:ml-[4rem] md:ml-[0] mb-[3rem] last:mb-[0] md:mb-[3rem] md:last:mb-[0] lg:mb-[0]  rounded-custom shadow-custom">
          <img src={Users} className="w-[8rem] h-[8rem]" />
          <div className="flex flex-col ml-[2rem]">
            <p>Employees</p>
            <p className="flex items-center text-[2rem]">
              {" "}
              <span className="text-[3.5rem]  mx-auto">4</span>
              {/* {item.value} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSummary;
