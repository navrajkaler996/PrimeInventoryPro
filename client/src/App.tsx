import { Route, Routes } from "react-router-dom";

import "./index.css";

//Importing components
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";

//Importing pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <div className="max-w-full">
      <Header />
      <div id="content" className="flex flex-row w-[100%]">
        <NavigationMenu />
        {/* {switchView()} */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
