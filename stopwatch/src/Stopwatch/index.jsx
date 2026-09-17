import "./style.css";
function Stopwatch() {
  return (
    <div className="stopwatch">
      <spam className="time">00:00:00:00</spam>
      <div>
        <button className="error">Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
export default Stopwatch;
