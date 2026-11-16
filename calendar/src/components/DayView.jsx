import DayTimeSlots from "./DayTimeSlots";
import Events from "./Events";
import events from "../data/events.json";

const DayView = () => {
  return (
    <div className="calendar">
      <div className="line"></div>
      <DayTimeSlots />
      <Events events={events} />
    </div>
  );
};

export default DayView;