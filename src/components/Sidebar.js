import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import mouse from "./../music/mouse.mp3";
import { SidebarData } from "./SidebarData";
function SideBar() {
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/8");

  const clickHandler = () => {
    audio.play();
  };
  return (
    <>
      <div className="navbar">
        <h1 className="title">Lofi Player</h1>
      </div>
      <nav className="Sidebar">
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li key={val.id} className="row">
                <Link to={val.link} onClick={clickHandler}>
                  <span className="item">
                    <span id="dot">. </span>
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
