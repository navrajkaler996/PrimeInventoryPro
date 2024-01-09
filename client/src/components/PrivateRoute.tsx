import { Navigate, Outlet } from "react-router-dom";

import jwt_decode from "jwt-decode";
const checkIfTokenValid = (token: string) => {
  const decodedToken = jwt_decode(token);

  if (!decodedToken) return false;

  const expirationTime = decodedToken?.exp;
  const currentTime = Math.floor(Date.now() / 1000);

  if (currentTime > expirationTime) return false;

  return true;
};

const PrivateRoutes = () => {
  const token = localStorage.getItem("accessToken");
  let isLoggedIn;
  if (token) isLoggedIn = checkIfTokenValid(token);
  else isLoggedIn = false;

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to="/app/login"
      state={{
        message: "Token expired! Please login",
      }}
    />
  );
};

export default PrivateRoutes;
