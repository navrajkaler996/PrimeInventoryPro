import Dashboard from "../assets/dashboard.png";
import Inventory from "../assets/inventory.png";
import Receiving from "../assets/receiving.png";
import Admin from "../assets/admin.png";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const menus = [
  {
    to: "/app/admin",
    id: "admin",
    image: Admin,
    value: "Admin",
    active: ["isAdmin"],
  },
  {
    to: "/app/dashboard",
    id: "dashboard",
    image: Dashboard,
    value: "Dashboard",
  },
  {
    to: "/app/inventory",
    id: "inventory",
    image: Inventory,
    value: "Inventory",
  },
  {
    to: "/app/receiving",
    id: "receiving",
    image: Receiving,
    value: "Receiving",
  },
];

//NavigationMenu, react functional component, that accepts 'navigate' function which switchs the view on the home.
const NavigationMenu: React.FC = () => {
  const { loggedInUser } = useSelector((state: any) => state);
  const { isAdmin } = loggedInUser;

  return (
    <div className="hidden md:flex flex-col ">
      {menus?.map((value) => {
        console.log(value.active?.includes("isAdmin"));
        if (value.active?.includes("isAdmin")) {
          if (isAdmin) {
            return (
              <Link to={value.to}>
                <div
                  id={value.id}
                  className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[1rem] cursor-pointer hover:bg-primary  shadow-custom">
                  <img src={value.image} className="w-[4rem] h-[4rem]" />
                  <p className="mt-[1rem]">{value.value}</p>
                </div>
              </Link>
            );
          } else return null;
        } else if (!isAdmin) {
          return (
            <Link to={value.to}>
              <div
                id={value.id}
                className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[1rem] cursor-pointer hover:bg-primary  shadow-custom">
                <img src={value.image} className="w-[4rem] h-[4rem]" />
                <p className="mt-[1rem]">{value.value}</p>
              </div>
            </Link>
          );
        }
      })}

      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
      <div className="w-120 h-120 bg-white mt-[1rem] shadow-custom"></div>
    </div>
  );
};

export default NavigationMenu;
