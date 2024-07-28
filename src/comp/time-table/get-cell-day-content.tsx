import { EventInput, DayCellContentArg } from "@fullcalendar/core/index.js";
import { Dispatch } from "react";
// a custom render function
export function getCellDayContent(
  events: EventInput[],
  setEvents: Dispatch<EventInput[]>
) {
  return (day: DayCellContentArg) => {
    return (
      <div
        className={day.isPast ? "past-day" : day.isFuture ? "future-day" : "current-day"}
      >
        {day.dayNumberText}
      </div>
    );
  };
}
