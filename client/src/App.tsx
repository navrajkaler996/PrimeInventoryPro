import { useEffect } from "react";
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
import Toast from "./components/Toast";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { pathname } = location;

  //When the user is logged in and page is reloaded, the data is redux is lost.
  //So, data is being fetched from local storage and is being dispatched to the
  //store again.
  useEffect(() => {
    const storedUserData = localStorage.getItem("loggedInUser");
    if (storedUserData) {
      dispatch(loggedInUser(JSON.parse(storedUserData)));
    }
  }, []);

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
