import { Route, Routes, useLocation } from "react-router-dom";

import "./index.css";

//Importing components
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";

//Importing pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";

function App() {
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className="max-w-full">
      {pathname !== "/login" && (
        <>
          <Header />
          <div id="content" className="flex flex-row w-[100%]">
            <NavigationMenu />
          </div>
        </>
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
