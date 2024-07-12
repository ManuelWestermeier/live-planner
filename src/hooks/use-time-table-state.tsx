import useLocalStorage from "use-local-storage";

const [day, month, year] = new Date()
  .toLocaleDateString("de")
  .split(".")
  .map((t) => parseInt(t));

const hour = new Date().getHours();

export default function useTimeTableState(): [string[][][][][]] {
  const [tts, setTTS] = useLocalStorage<string[][][][][]>("time-table-state", [
    [[[["Do Something", "Dont Do Something"]]]],
  ]);
  //   const [ttsOptions, setTTSOptions] = useLocalStorage(
  //     "time-table-state-option",
  //     {}
  //   );
  //   , setTTS, ttsOptions, setTTSOptions

  return [tts];
}
