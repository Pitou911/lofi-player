import React from "react";
import ReactPlayer from "react-player";

function LofiGirl() {
  const myStyle = {
    backgroundImage: `url(https://wallpaperaccess.com/full/723262.gif)`,
    height: `100vh`,
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    filter: `brightness(0.5)`,
    top: "0",
    zIndex: "-3",
  };

  return (
    <>
      <div className="lofiPage" style={myStyle}></div>
      <ReactPlayer
        url="https://youtu.be/l98w9OSKVNA"
        playing={true}
        width="0"
        height="0"
        volume={0.5}
      />
    </>
  );
}

export default LofiGirl;
