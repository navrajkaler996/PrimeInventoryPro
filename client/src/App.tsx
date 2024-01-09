import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

//Importing CSS
import "./index.css";

//Importing components
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import PrivateRoutes from "./components/PrivateRoute";

//Importing pages
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";

//Importing slices
import { loggedInUser } from "./features/userSlice";
import Receiving from "./pages/Receiving";
import Home from "./pages/Home";
import HeaderHome from "./components/HeaderHome";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [isAdmin, setIsAdmin] = useState(false);

  const { pathname } = location;

  //When the user is logged in and page is reloaded, the data is redux is lost.
  //So, data is being fetched from local storage and is being dispatched to the
  //store again.
  useEffect(() => {
    const storedUserData = localStorage.getItem("loggedInUser");
    if (storedUserData) {
      const parsedStoredUserData = JSON.parse(storedUserData);

      dispatch(loggedInUser(parsedStoredUserData));
    }
  }, []);

  return (
    <div className="max-w-full">
      {pathname?.startsWith("/home") && (
        <>
          <HeaderHome />
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </>
      )}

      {pathname !== "/app/login" && !pathname?.startsWith("/home") && (
        <>
          <Header />
          <div id="content" className="flex flex-row w-[100%]">
            <NavigationMenu />
            <Routes>
              <Route element={<PrivateRoutes />}>
                {/* <Route element={<Dashboard />} path="/app" /> */}
                <Route element={<Dashboard />} path="/app/dashboard" />
                <Route element={<Inventory />} path="/app/inventory/*" />
                <Route element={<Receiving />} path="/app/receiving" />
                <Route element={<AdminPanel />} path="/app/admin" />
              </Route>
            </Routes>
          </div>
        </>
      )}

      {pathname === "/app/login" && (
        <Routes>
          <Route path="/app/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
