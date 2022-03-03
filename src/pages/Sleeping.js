import React from "react";
import ReactPlayer from "react-player";
function Sleeping() {
  const myStyle = {
    backgroundImage: `url(https://64.media.tumblr.com/821bf6fb956e00922bd11a5f6dab47b8/tumblr_pboqhrprnt1xqkqqwo2_r1_1280.gifv)`,
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
      <div className="sleepingPage" style={myStyle}></div>
      <ReactPlayer
        url="https://youtu.be/zFhfksjf_mY"
        playing={true}
        width="0"
        height="0"
        volume={0.5}
      />
    </>
  );
}

export default Sleeping;
