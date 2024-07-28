import { EventContentArg, EventInput } from "@fullcalendar/core/index.js";
import { Dispatch } from "react";
// a custom render function
export function getRrenderEventContent(
  events: EventInput[],
  setEvents: Dispatch<EventInput[]>
) {
  return (eventInfo: EventContentArg) => {
    return (
      <>
        event
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <button>BTN</button>
      </>
    );
  };
}