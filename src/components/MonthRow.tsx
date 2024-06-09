import { useContext } from "react";
import { SchedularContext } from "./ReactBookingSchedular";

function MonthRow() {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const { monthsToShow, getMonthWidth } = schedularData;

  return (
    <div className="flex">
      {monthsToShow.map((month) => (
        <div
          key={month.month + month.year}
          className={`bg-color_main flex justify-center items-center font-semibold border-r border-color_border`}
          style={{
            height: `${50}px`,
            width: `${getMonthWidth(month.daysInMonth)}px`,
          }}
        >
          <span>{month.monthName + " " + month.year}</span>
        </div>
      ))}
    </div>
  );
}

export default MonthRow;
