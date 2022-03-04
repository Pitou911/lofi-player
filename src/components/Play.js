import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
function Play({ setPlayMode, setVol, setMute }) {
  let [playmode, setPlaymode] = useState(false);

  const [playing, setPlaying] = useState(`play active`);
  const [pausing, setPausing] = useState(`pause`);
  const [volumn, setVolumn] = useState("100");
  // const [sound, setSound] = useState(true);
  const [soundOn, setSoundOn] = useState(`sound-on active`);
  const [soundOff, setSoundOff] = useState(`sound-off`);
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
  const volChangeHandler = (event) => {
    if (event.target.value === 0) {
      setSoundOn("sound-on");
      setSoundOff(`sound-off active`);
      setVolumn(0);
      setVol(0);
    } else {
      setVolumn(event.target.value);
      setVol(event.target.value);
    }
  };
  const muteHandler = () => {
    if (soundOn === `sound-on active`) {
      setSoundOn("sound-on");
      setSoundOff(`sound-off active`);
      setMute(true);
    } else {
      setSoundOn(`sound-on active`);
      setSoundOff(`sound-off`);
      setMute(false);
    }
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
      <div id="mute" onClick={muteHandler}>
        <div className={soundOn}>
          <FontAwesomeIcon className="unmute" icon={faVolumeHigh} />
        </div>
        <div className={soundOff}>
          <FontAwesomeIcon className="mute" icon={faVolumeMute} />
        </div>
      </div>
      <div id="vol">
        <input
          class="rangeStyle"
          type="range"
          value={volumn}
          onChange={volChangeHandler}
        ></input>
      </div>
    </div>
  );
}

export default Play;
