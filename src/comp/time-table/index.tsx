import useTimeTableState from "../../hooks/use-time-table-state";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getRrenderEventContent } from "./get-render-event-content";

export default function TimeTable() {
  const [events, setEvents] = useTimeTableState();

  return (
    <div>
      <h1>Demo App</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventContent={getRrenderEventContent(events, setEvents)}
      />
    </div>
  );
}