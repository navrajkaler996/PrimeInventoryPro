import { useState } from "react";
import BellIcon from "../assets/bell.png";
import Logo from "../assets/logo.png";
import SearchBar from "../pages/Inventory/components/SearchBar";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { employee_name, employee_email, employee_designation } = useSelector(
    (state: any) => state.loggedInUser
  );

  const logoutClickHandler = () => {
    dispatch(loggedInUser({}));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };
  return (
    <div
      id="header"
      className="flex justify-between items-center w-full h-80 bg-white sticky top-[0] z-[10] shadow-custom">
      <img src={Logo} alt="logo" width="130px" className="ml-[2rem]" />
      <div className="flex items-center">
        <SearchBar
          keyword=""
          changeHandler={() => {}}
          styles={{
            marginRight: "2rem",
            // border: "1px solid #000",
            height: "3.5rem",
            width: "35rem",
          }}
        />
        <img
          src={BellIcon}
          width="25px"
          alt="notification-bell"
          className="mr-[2rem]"
        />

        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="relative">
          <div className="relative flex justify-center items-center bg-primary w-[3.5rem] h-[3.5rem] rounded-[50%] mr-[2rem] text-[.9em] hover:cursor-pointer shadow-custom">
            AK
          </div>
          {showDropdown && (
            <Dropdown styles={{ marginTop: "1rem" }}>
              <h1 className="text-[1.5em] uppercase mx-[2rem] tracking-[.5px]">
                {employee_name}
              </h1>

              <p className="text-[.8em] mx-[2rem] mt-[.5rem] tracking-[.5px]">
                {employee_designation}
              </p>
              <ul className="list-none capitalize text-[.9em] tracking-[.5px]">
                <hr className="m-[1rem]" />
                <li className="mx-[2rem] pl-[.5rem] mt-[1rem]">Account</li>
                <li className="mx-[2rem] pl-[.5rem] mt-[1rem]">Sales</li>
                <li className="mx-[2rem] pl-[.5rem] mt-[1rem]">Inventory</li>
                <li className="mx-[2rem] pl-[.5rem] mt-[1rem]">
                  Recieving reports
                </li>
                <hr className="m-[1rem]" />
                <li
                  className="mx-[2rem] pl-[.5rem] hover:cursor-pointer hover:bg-primary-1"
                  onClick={logoutClickHandler}>
                  Log out
                </li>
              </ul>
            </Dropdown>
          )}
        </div>

        {/* <Button
          value="log out"
          disabled={false}
          loading={false}
          styles={{ width: "8rem", height: "3rem", fontSize: ".8em" }}
        /> */}
      </div>
    </div>
  );
};

export default Header;
