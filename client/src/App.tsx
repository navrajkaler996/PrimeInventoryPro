import { Route, Routes, useLocation } from "react-router-dom";

import "./index.css";

//Importing components
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";

//Importing pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";
import PrivateRoutes from "./components/PrivateRoute";

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
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard />} path="/dashboard" />
                <Route element={<Inventory />} path="/inventory" />
              </Route>
            </Routes>
          </div>
        </>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
