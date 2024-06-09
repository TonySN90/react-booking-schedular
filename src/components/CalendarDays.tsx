import { useContext } from "react";
import { SchedularContext } from "./ReactBookingSchedular";

function CalendarDays() {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const {
    monthsToShow,
    colWidth,
    rowHeight,
    cabins,
    todayElement,
    getDayColor,
    checkIfToday,
    dayHeight,
  } = schedularData;

  return (
    <>
      {monthsToShow.map((month) =>
        month.days.map((day) => (
          <div
            key={`${day}-${month.month}-${month.year}`}
            ref={checkIfToday(month, day) ? todayElement : null}
            className={`flex border-r border-color_border ${getDayColor(
              day,
              month
            )}`}
            style={{
              width: `${colWidth}px`,
              height: `${cabins.length * rowHeight + 50}px`,
            }}
          >
            <div className="justify-center items-center w-full">
              <div
                className="flex flex-col justify-center items-center border-b border-color_border"
                style={{
                  height: `${dayHeight}px`,
                  width: `${colWidth}px`,
                }}
              >
                <span className="font-semibold text-sm">
                  {month.weekdays[day - 1]}
                </span>
                <span className="text-sm">{day}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default CalendarDays;
