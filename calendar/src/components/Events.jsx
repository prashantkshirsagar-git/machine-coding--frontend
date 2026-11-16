import React from "react";
import { calculateEventLayout } from "../utlis/eventLayout.jsx";




export default function Events({ events }) {
  const layout = calculateEventLayout(events);
  console.log(layout);
  return (
    <>
      {layout.map((event) => {
        const startHour = event.start.split(":")[0];
        const startMinute = event.start.split(":")[1];
        const endHour = event.end.split(":")[0];
        const endMinute = event.end.split(":")[1];
        const top = startHour * 5 + (startMinute / 60) * 5;
        const height =
          (endHour - startHour) * 5 + ((endMinute - startMinute) / 60) * 5;
        return (
          <div
            className="event"
            style={{
              top: `${top}rem`,
              height: `${height}rem`,
              width: `calc((100% - 6rem) / ${event.totalColumn})`,
              left: `calc(5rem + (100% - 6rem) / ${event.totalColumn} * ${event.column} )`,
            }}
          >
            <div className="event-title">{event.title}</div>
            <div className="event-time">
              {event.start.slice(0, 5)} - {event.end.slice(0, 5)}
            </div>
          </div>
        );
      })}
    </>
  );
}
