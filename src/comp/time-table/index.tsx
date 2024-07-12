import useTimeTableState from "../../hooks/use-time-table-state";

export default function TimeTable() {
  const [tts] = useTimeTableState();

  return (
    <div>
      <div></div>
      <div>
        {tts.map((year) => (
          <div key={year} className="flex">
            {year.map((month) => (
              <div key={year + "." + month} className="flex">
                {month.map((week) => (
                  <div key={year + "." + month + "." + week} className="flex">
                    {week.map((day) => (
                      <div
                        key={year + "." + month + "." + week + " " + day}
                        className="flex col"
                      >
                        {day.map((h) => (
                          <div
                            className="flex col"
                            key={
                              year +
                              "." +
                              month +
                              "." +
                              week +
                              " " +
                              day +
                              ":" +
                              h
                            }
                          >
                            {h}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
