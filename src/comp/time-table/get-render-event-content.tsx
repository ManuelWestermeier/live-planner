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
          <button
            onClick={() => {
              setEvents([
                ...events,
                { backgroundColor: "yellow", date: "30.7.2024", allDay: true },
              ]);
            }}
          >
            BTN
          </button>
        </>
      );
    };
  }
  