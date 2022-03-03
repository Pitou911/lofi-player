import React from "react";
import ReactPlayer from "react-player";
function Gaming({ playMode }) {
  const myStyle = {
    backgroundImage: `url(https://steamuserimages-a.akamaihd.net/ugc/1762567534089351845/B75DF44ACD6F7ED4C57BD2875CCBD39B0A6AC46E/?imw=512&imh=287&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true)`,
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
      <div className="gamingPage" style={myStyle}></div>
      <ReactPlayer
        url="https://youtu.be/FFfdyV8gnWk"
        playing={playMode}
        width="0"
        height="0"
        volume={0.5}
      />
    </>
  );
}

export default Gaming;
