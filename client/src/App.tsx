import { useState } from "react";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";

function App() {
  //State to store the value of current view.
  const [currentView, setCurrentView] = useState<string>("inventory");

  //Function to track which view is clicked from the navigation menu.
  const navigate = (view: string) => {
    setCurrentView(view);
  };

  //Function to switch the view from navigation menu.
  const switchView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "inventory":
        return <Inventory />;
      default:
        break;
    }
  };

  return (
    <div className="max-w-full">
      <Header />
      <div id="content" className="flex flex-row w-[100%]">
        <NavigationMenu navigate={navigate} active={currentView} />
        {switchView()}
      </div>
    </div>
  );
}

export default App;
