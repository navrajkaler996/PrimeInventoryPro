import Scalability from "../../assets/home/scalability.png";
import UserInterface from "../../assets/home/user-interface.png";
import Statistics from "../../assets/home/statistics.png";
import RightArrow from "../../assets/home/right-arrow.png";
import Button from "../../components/Button";

const Home = () => {
  return (
    <div id="home">
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(237,237,237,1) 0%, rgba(131,131,224,1) 100%, rgba(255,255,255,1) 100%)",
        }}
        className="h-auto mx-auto text-center bg-primary py-[1rem]">
        <h1 className="normal-case text-[2em] tracking-[1px] pt-[2.5rem] font-[600] ">
          Inventory management software <br />
          for small and growing businesses
        </h1>
        <p className="w-[80%] mx-auto my-[3rem]">
          Prime Inventory Pro is a versatile inventory management software
          suitable for small and growing businesses. Its scalable architecture
          enables a smooth transition from basic to advanced features, ensuring
          its value across various stages of business growth. With a
          user-friendly interface and visually appealing data presentation,
          Prime Inventory Pro simplifies inventory management tasks and supports
          informed decision-making.
        </p>
        <h2 className="normal-case text-[2em] tracking-[1px] pt-[2.5rem] font-[600]">
          How does it work?
        </h2>
        <div className="flex items-center justify-around px-[1rem] my-[5rem] ">
          <div className="w-[7rem] text-center">Sign up and choose a plan</div>
          <img src={RightArrow} style={{ width: "70px", height: "70px" }} />
          <div className="w-[7rem] text-center">
            Create departments and subdepartments
          </div>
          <img src={RightArrow} style={{ width: "70px", height: "70px" }} />
          <div className="w-[7rem] text-center">
            Give roles to your employees
          </div>
          <img src={RightArrow} style={{ width: "70px", height: "70px" }} />
          <div className="w-[7rem] text-center">
            Add data such as products and reports
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="normal-case text-[1.5em] tracking-[1px] py-[5rem]">
          Why choose Prime Inventory Pro?
        </h2>
        <div className="w-[100%] flex justify-evenly py-[2rem]">
          <div className="w-[250px] h-[300px] flex flex-col items-start">
            <p className="text-[1em] mt-[1rem] mb-[2rem]">
              Easy to use <br /> user-interface
            </p>
            <img
              src={UserInterface}
              style={{ width: "60px", height: "60px" }}
              className="mb-[2rem]"
            />
            <p className="text-left mb-[2rem]">
              Prime Inventory Pro boasts a user-friendly interface, ensuring
              ease of use for all. The streamlined design simplifies navigation,
              making inventory management tasks effortless and efficient.
            </p>
          </div>
          <div className="w-[250px] h-[300px] flex flex-col items-start">
            <p className="text-[1em] mt-[1rem] mb-[2rem]">
              Scalability for <br /> Growing Businesses
            </p>
            <img
              src={Scalability}
              style={{ width: "60px", height: "60px" }}
              className="mb-[2rem]"
            />
            <p className="text-left mb-[2rem]">
              Prime Inventory Pro accommodates small and growing businesses
              through its scalable architecture, facilitating a seamless
              transition from fundamental inventory features to advanced
              capabilities.
            </p>
          </div>
          <div className="w-[250px] h-[300px] flex flex-col items-start">
            <p className="text-[1em] mt-[1rem] mb-[2rem]">
              Attractive Data <br /> Visualization
            </p>
            <img
              src={Statistics}
              style={{ width: "60px", height: "60px" }}
              className="mb-[2rem]"
            />
            <p className="text-left mb-[2rem]">
              Prime Inventory Pro excels in visually presenting complex data
              through interactive charts and reports, enhancing user experience
              and facilitating quick, informed decision-making for businesses.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-[2rem]">
        <h2 className="normal-case text-[1.5em] tracking-[1px] py-[5rem]">
          Choose a plan
        </h2>
        <div className="flex justify-around">
          <div className="w-[200px] h-[300px] flex flex-col justify-center items-center  shadow-custom-1">
            <p className="text-[1.5em] mb-[.5em]">FREE</p>
            <p className="mb-[.5rem]">
              $ <span className="text-[2em]">0</span>
            </p>
            <p className=" mb-[2rem]">Pay CAD 0 per year for basic usage</p>
            <Button value="Get Started" styles={{ "margin-right": 0 }} />
          </div>
          <div className="w-[200px] h-[300px] flex flex-col justify-center items-center  shadow-custom-1">
            <p className="text-[1.5em] mb-[.5em]">FREE</p>
            <p className="mb-[.5rem]">
              $ <span className="text-[2em]">0</span>
            </p>
            <p className=" mb-[2rem]">Pay CAD 0 per year for basic usage</p>
            <Button value="Get Started" styles={{ "margin-right": 0 }} />
          </div>
          <div className="w-[200px] h-[300px] flex flex-col justify-center items-center  shadow-custom-1">
            <p className="text-[1.5em] mb-[.5em]">FREE</p>
            <p className="mb-[.5rem]">
              $ <span className="text-[2em]">0</span>
            </p>
            <p className=" mb-[2rem]">Pay CAD 0 per year for basic usage</p>
            <Button value="Get Started" styles={{ "margin-right": 0 }} />
          </div>
          <div className="w-[200px] h-[300px] flex flex-col justify-center items-center  shadow-custom-1">
            <p className="text-[1.5em]   mb-[.5em]">FREE</p>
            <p className="mb-[.5rem]">
              $ <span className="text-[2em]">0</span>
            </p>
            <p className=" mb-[2rem]">Pay CAD 0 per year for basic usage</p>
            <Button value="Get Started" styles={{ "margin-right": 0 }} />
          </div>
        </div>
      </div>
      <div
        className="w-[100%] h-[30rem]"
        style={{
          background:
            "linear-gradient(0deg, rgba(131,131,224,1) 0%, rgba(237,237,237,1) 100%, rgba(255,255,255,1) 100%)",
        }}></div>
    </div>
  );
};

export default Home;
