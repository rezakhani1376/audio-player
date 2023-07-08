import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";
import classes from "./style.module.css";

const clamp = (num, min = 10, max = 45) => Math.min(Math.max(num, min), max);
const WIDTH = 500;
const Bars = ({ duration, setCurrentTime, currentTime }) => {
  const bars = useRef();

  useEffect(() => {
    bars.current = Array.from(
      document.getElementById("visualizer-container").children
    ).slice(1);

    const updateBarHeights = () => {
      bars.current.forEach((bar, i) => {
        const noise2D = createNoise2D();
        let multiplier = 7;

        if (i < 5 || i > bars.current.length - 5) {
          multiplier = 2.5;
        }

        const currentHeight = Number(bar.style.height.replace("px", ""));
        const scaleFactor =
          noise2D(currentHeight, currentHeight) * multiplier * 1.25;
        const newHeight = Number(clamp(scaleFactor * currentHeight));

        bar.style.height = `${newHeight}px`;
      });
    };
    updateBarHeights();
  }, []);

  useEffect(() => {
      const itemsLength = Math.floor((currentTime * 100) / duration);
      bars.current
        .slice(0, itemsLength)
        .map((item) => (item.style.backgroundColor = "rgba(30, 109, 221, 1)"));

      bars.current
        .slice(itemsLength, -1)
        .map((item) => (item.style.backgroundColor = "gray"));
  }, [currentTime]);

  const onClick = (e) => {
    const timeToSeek = (e.nativeEvent.offsetX / WIDTH) * duration;
    setCurrentTime(timeToSeek);
  };

  return (
    <div className={classes["visualizer-container"]} id="visualizer-container">
      <div id="progress" className={classes.progress} onClick={onClick}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
    </div>
  );
};

export default Bars;
