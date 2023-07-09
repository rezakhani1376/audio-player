import { getTimeCodeFromNum } from "../utils/utils";
import classes from "./style.module.css";

const AudioFooter = ({ currentTime, endTime }) => {
  return (
    <div className={classes["information-container"]}>
      <div>{currentTime ? getTimeCodeFromNum(currentTime): '0:00'}</div>
      <div>{endTime ? getTimeCodeFromNum(endTime): '0:00'}</div>
    </div>
  );
};

export default AudioFooter;
