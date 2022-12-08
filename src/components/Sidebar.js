import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { SidebarData } from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
function SideBar() {
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/8");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const clickHandler = () => {
    audio.play();
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className={sidebar ? "menu-bar" : "menu-bar show"}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h1 className="title">Lofi Player</h1>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {SidebarData.map((val, key) => {
            return (
              <li key={val.id} className="nav-item">
                <Link to={val.link} onClick={clickHandler}>
                  <span className="item">
                    {/* <span id="dot">. </span> */}
                    {val.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
