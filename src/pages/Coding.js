import React from "react";
import ReactPlayer from "react-player";
function Coding({ playMode, vol, mute }) {
  const myStyle = {
    backgroundImage: `url(https://wallpaperaccess.com/full/849790.gif)`,
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
      <div className="codingPage" style={myStyle}></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=_ITiwPMUzho&t=698s"
        playing={playMode}
        width="0"
        height="0"
        volume={vol / 100}
        muted={mute}
      />
    </>
  );
}

export default Coding;
