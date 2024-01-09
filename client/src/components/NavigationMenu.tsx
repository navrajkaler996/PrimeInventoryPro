import Dashboard from "../assets/dashboard.png";
import Inventory from "../assets/inventory.png";
import Receiving from "../assets/receiving.png";
import Admin from "../assets/admin.png";

import { Link } from "react-router-dom";

//NavigationMenu, react functional component, that accepts 'navigate' function which switchs the view on the home.
const NavigationMenu: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col ">
      <Link to="/app/admin">
        <div
          id="admin"
          className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[1rem] cursor-pointer hover:bg-primary shadow-custom">
          <img src={Admin} className="w-[4rem] h-[4rem]" />
          <p className="mt-[1rem]">Admin</p>
        </div>
      </Link>
      <Link to="/app/dashboard">
        <div
          id="dashboard"
          className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[1rem] cursor-pointer hover:bg-primary shadow-custom">
          <img src={Dashboard} className="w-[4rem] h-[4rem]" />
          <p className="mt-[1rem]">Dashboard</p>
        </div>
      </Link>
      <Link to="/app/inventory">
        <div
          id="inventory"
          className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[1rem] cursor-pointer hover:bg-primary  shadow-custom">
          <img src={Inventory} className="w-[4rem] h-[4rem]" />
          <p className="mt-[1rem]">Inventory</p>
        </div>
      </Link>
      <Link to="/app/receiving">
        <div
          id="receiving"
          className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[1rem] cursor-pointer hover:bg-primary  shadow-custom">
          <img src={Receiving} className="w-[4rem] h-[4rem]" />
          <p className="mt-[1rem]">Receiving</p>
        </div>
      </Link>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
    </div>
  );
};

export default NavigationMenu;
