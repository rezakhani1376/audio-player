import classes from "./App.module.css";
import Header from "./components/Header";
import Play from "./components/PlayButton";
import Pause from "./components/PauseButton";
import { useEffect, useRef, useState } from "react";
import Bars from "./components/Bars";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const audio = useRef(
    new Audio(
      "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
    )
  );
  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  if (isPlay) {
    audio.current.play();
  } else {
    audio.current.pause();
  }

  useEffect(() => {
    const setNewCurrentTime = () => setCurrentTime(audio.current.currentTime);
    audio.current.addEventListener("timeupdate", setNewCurrentTime);

    return () =>
      audio.current.removeEventListener("timeupdate", setNewCurrentTime);
  }, []);

  useEffect(() => {
    if (audio.current.currentTime) {
      audio.current.currentTime = currentTime;
    }
  }, [currentTime]);

  const onClickHandler = () => {
    setIsPlay((prevState) => !prevState);
  };

  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.wrapper}>
        {isPlay ? (
          <Pause isPlay={isPlay} onClick={onClickHandler} />
        ) : (
          <Play isPlay={isPlay} onClick={onClickHandler} />
        )}
      </div>
      <Bars
        duration={audio.current.duration}
        setCurrentTime={setCurrentTime}
        currentTime={currentTime}
      />
      <AudioPlayer
        currentTime={currentTime}
        duration={audio.current.duration}
      />
    </div>
  );
}

export default App;
