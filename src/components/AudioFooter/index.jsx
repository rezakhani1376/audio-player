import { getTimeCodeFromNum } from "../utils/utils";
import classes from "./style.module.css";

const AudioFooter = ({ currentTime, endTime }) => {
  return (
    <div className={classes["information-container"]}>
      <div>{getTimeCodeFromNum(currentTime)}</div>
      <div>{getTimeCodeFromNum(endTime)}</div>
    </div>
  );
};

export default AudioFooter;
