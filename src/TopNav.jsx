import "./TopNav.css";
import { useContext, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";

// async function logOutHere(dispatch) {
//   localStorage.removeItem("user");
//   dispatch({ type: "LOGIN_SUCCESS", payload: null });
//   location.replace("/");
// }

export default function TopNav() {
  // const { user, dispatch } = useContext(AuthContext);

  const [isListClicked, setIsListClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handleOpenListNav() {
    setIsListClicked(!isListClicked);
  }

  function handleCloseListNav() {
    setIsListClicked(false);
  }

  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1]; //will determine the current path

  function handleSearch(event) {
    setSearchQuery(event.target.value);
    console.log(event)
  }

  return (
    <>
      <div className="topnav">
        <NavLink
          to="/AddPage"
          onClick={handleCloseListNav}
          activeclassname="active"
        >
          Add
        </NavLink>
        <NavLink
          to="/Home"
          onClick={handleCloseListNav}
          activeclassname="active"
        >
          Home
        </NavLink>
        <a onClick={handleOpenListNav}>List</a>
      </div>
      {isListClicked && (
        <>
          <div className="list-links-container">
            <NavLink to="/Contracts" activeclassname="active">
              Contracts
            </NavLink>
            <NavLink to="/DueDates" activeclassname="active">
              Due Dates
            </NavLink>
            <NavLink to="/Unpaid" activeclassname="active">
              Unpaid
            </NavLink>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search"
            />
            {/* Render filtered content based on the current URL */
            //nothing will happen if u'r in home url
            }
             {currentPath === "Contracts" && (
              console.log(currentPath)
              // Render Contracts content based on the searchQuery
            )}
            {currentPath === "DueDates" && (
              console.log(currentPath)
              // Render DueDates content based on the searchQuery
            )}
            {currentPath === "Unpaid" && (
              console.log(currentPath)
              // Render Unpaid content based on the searchQuery
            )}

          </div>
          <div id="overlay" onClick={handleOpenListNav}></div>
        </>
      )}
    </>
  );
}
