import Dashboard from "../assets/dashboard.png";
import Inventory from "../assets/inventory.png";

//Prop interface for NavigationMenuProps
type NavigationMenuProps = {
  navigate: Function;
  active: string;
};

//NavigationMenu, react functional component, that accepts 'navigate' function which switchs the view on the home.
const NavigationMenu: React.FC<NavigationMenuProps> = ({
  navigate,
  active,
}) => {
  return (
    <div className="flex flex-col">
      <div
        id="dashboard"
        className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[.6rem] cursor-pointer hover:bg-primary"
        onClick={(e) => navigate(e?.currentTarget?.id)}>
        <img src={Dashboard} className="w-[4rem] h-[4rem]" />
        <p className="mt-[1rem]">Dashboard</p>
      </div>
      <div
        id="inventory"
        className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[.6rem] cursor-pointer hover:bg-primary"
        onClick={(e) => navigate(e?.currentTarget?.id)}>
        <img src={Inventory} className="w-[4rem] h-[4rem]" />
        <p className="mt-[1rem]">Inventory</p>
      </div>
      <div className="w-120 h-120 bg-white mt-[.6rem]"></div>
      <div className="w-120 h-120 bg-white mt-[.6rem]"></div>
      <div className="w-120 h-120 bg-white mt-[.6rem]"></div>
      <div className="w-120 h-120 bg-white mt-[.6rem]"></div>
      <div className="w-120 h-120 bg-white mt-[.6rem]"></div>
    </div>
  );
};

export default NavigationMenu;
