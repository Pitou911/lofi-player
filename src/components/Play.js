import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
function Play({ setPlayMode }) {
  let [playmode, setPlaymode] = useState(false);
  // let [text, setText] = useState("Pause");
  // const changeHandler = () => {
  //   if (play) {
  //     setText("Pause");
  //   } else {
  //     setText("Play");
  //   }
  //   setPlayMode(play);
  //   setPlay(!play);
  // };

  //var pause = document.querySelector(".pause");

  const [playing, setPlaying] = useState(`play active`);
  const [pausing, setPausing] = useState(`pause`);

  const playHandler = () => {
    if (playing === `play active`) {
      setPlaying("play");
      setPausing(`pause active`);
      console.log("hehe");
    } else {
      setPlaying(`play active`);
      setPausing("pause");
    }
    setPlayMode(playmode);
    setPlaymode(!playmode);
  };

  return (
    <div className="container">
      <div id="app" onClick={playHandler}>
        <div className={pausing}>
          <FontAwesomeIcon className="playBtn" icon={faPlay} />
        </div>
        <div className={playing}>
          <FontAwesomeIcon className="pauseBtn" icon={faPause} />
        </div>
      </div>
    </div>
  );
}

export default Play;
