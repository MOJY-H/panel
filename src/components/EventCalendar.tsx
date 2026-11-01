"use client";

import { Calendar, Willow } from "@svar-ui/react-calendar";
import "@svar-ui/react-calendar/all.css";

// ... events definition ...

const events = [
  {
    id: 1,
    text: "Team Standup",
    start: new Date(2026, 5, 15, 9, 0),
    end: new Date(2026, 5, 15, 9, 30),
  },
  {
    id: 2,
    text: "Design Review",
    start: new Date(2026, 5, 15, 11, 0),
    end: new Date(2026, 5, 15, 12, 30),
  },
  // ... more events
];

export default function EventCalendar() {
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <Willow>
        <Calendar events={events} view="week" date={new Date(2026, 5, 17)} />
      </Willow>
    </div>
  );
}