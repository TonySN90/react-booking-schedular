import { useContext } from "react";
import { SchedularContext } from "./ReactBookingSchedular";
import MonthRow from "./MonthRow";
import CalendarDays from "./CalendarDays";
import Bookings from "./Bookings";

function Canvas() {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const { monthWidth, handleScroll } = schedularData;

  return (
    <div
      className="h-full w-full overflow-x-scroll relative"
      style={{
        scrollbarColor: "var(--color-main) var(--color-bg-primary)",
        scrollSnapType: "x mandatory",
      }}
      onScroll={handleScroll}
    >
      <div
        className="relative h-full bg-color_bg_secondary overflow-hidden"
        style={{ width: `${monthWidth}px` }}
      >
        <MonthRow />
        <div className="w-full flex border-l border-color_border">
          <CalendarDays />
          <Bookings />
        </div>
      </div>
    </div>
  );
}

export default Canvas;
