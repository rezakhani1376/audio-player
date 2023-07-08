import AudioFooter from "../AudioFooter";

const AudioPlayer = ({ duration, currentTime }) => {
  return (
    <div id="audio-player">
      <AudioFooter endTime={duration} currentTime={currentTime} />
    </div>
  );
};

export default AudioPlayer;
