import React from "react";
import ReactPlayer from "react-player";
function CoffeeBeat({ playMode, vol, mute }) {
  const myStyle = {
    backgroundImage: `url(https://i.imgur.com/TVdmm2k.gif)`,
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
      <div className="coffeePage" style={myStyle}></div>
      <ReactPlayer
        url="https://youtu.be/qj9NFFvJ7o4"
        playing={playMode}
        width="0"
        height="0"
        volume={vol / 100}
        muted={mute}
      />
    </>
  );
}

export default CoffeeBeat;
