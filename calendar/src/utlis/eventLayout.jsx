
export const timeIntoMinutes = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};

const isOverlap = (event1, event2) => {
  return timeIntoMinutes(event2.start) < timeIntoMinutes(event1.end);
};

export const calculateEventLayout = (events) => {
  const sortedEvents = [...events].sort((a, b) => {
    const start1 = timeIntoMinutes(a.start);
    const start2 = timeIntoMinutes(b.start);
    const diff = start1 - start2;
    if (diff !== 0) return diff;
    const end1 = timeIntoMinutes(a.end);
    const end2 = timeIntoMinutes(b.end);
    return end2 - end1;
  });

  console.log(sortedEvents);

  const layout = [];
  //   [{s:9,e:10,c:0,t:2},{s:"9:15",e:"9:45",c:1,t:2}
  //   {s:10,e:11,c:0,t:3}, {s:"10:30",e:"11:30",c:1,t:3},
  //   {s:"10:45",e:"11:15",c:2,t:3},
  //   ]

  //   overlaps->[{s:10,e:11,c:0,t:2},{s:"10:30",e:"11:30",c:1,t:2}]
  //   c->

  for (const event of sortedEvents) {
    const overlaps = layout.filter((layoutEvent) =>
      isOverlap(layoutEvent, event)
    );
    const current = { ...event };
    current.column = overlaps.length;
    const totalColumn = overlaps.length + 1;
    current.totalColumn = totalColumn;
    overlaps.forEach((layoutEvent) => (layoutEvent.totalColumn = totalColumn));
    layout.push(current);
  }

  return layout;
};
