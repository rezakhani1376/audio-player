import classes from "./App.module.css";
import Header from "./components/Header";
import Play from "./components/PlayButton";
import Pause from "./components/PauseButton";
import { useState } from "react";
import Bars from "./components/Bars";

function App() {
  const [isPlay, setIsPlay] = useState(false);
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
      <Bars />
      
    </div>
  );
}

export default App;
