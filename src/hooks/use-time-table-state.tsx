import { Dispatch } from "react";
import useLocalStorage from "use-local-storage";

// const [day, month, year] = new Date()
//   .toLocaleDateString("de")
//   .split(".")
//   .map((t) => parseInt(t));

// const hour = new Date().getHours();

type TimeTableData = string[][][][][];

export default function useTimeTableState(): [
  TimeTableData,
  Dispatch<TimeTableData>
] {
  const [tts, setTTS] = useLocalStorage<TimeTableData>("time-table-state", [
    [[[["Do Something", "Dont Do Something"]]]],
  ]);
  //   const [ttsOptions, setTTSOptions] = useLocalStorage(
  //     "time-table-state-option",
  //     {}
  //   );
  //   , setTTS, ttsOptions, setTTSOptions

  return [tts, setTTS];
}
