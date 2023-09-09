import Dashboard from "../assets/dashboard.png";
import Inventory from "../assets/inventory.png";

//Prop interface for NavigationMenuProps
type NavigationMenuProps = {
    navigate: Function;
}

//NavigationMenu, react functional component, that accepts 'navigate' function which switchs the view on the home.
const NavigationMenu:React.FC<NavigationMenuProps> = ({navigate}) => {

    return <div className="flex flex-col">
        <div 
          id="dashboard" 
          className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[6px] cursor-pointer hover:bg-primary"
          onClick={(e) => navigate(e?.currentTarget?.id)}
          >
            
            <img src={Dashboard} className="w-[40px] h-40[px]" />
            <p className="mt-[10px]">Dashboard</p>
        </div>
        <div
          id="inventory" 
          className="flex flex-col justify-center items-center w-120 h-120 bg-white mt-[6px] cursor-pointer hover:bg-primary"
          onClick={(e) => navigate(e?.currentTarget?.id)}
          >
            <img src={Inventory} className="w-[40px] h-40[px]" />
            <p className="mt-[10px]">Inventory</p>
        </div>
        <div className="w-120 h-120 bg-white mt-[6px]">

        </div>
        <div className="w-120 h-120 bg-white mt-[6px]">

        </div>
        <div className="w-120 h-120 bg-white mt-[6px]">

        </div>
        <div className="w-120 h-120 bg-white mt-[6px]">

        </div>
        <div className="w-120 h-120 bg-white mt-[6px]">

        </div>
    </div>
}

export default NavigationMenu;