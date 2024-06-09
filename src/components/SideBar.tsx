import { ReactNode, useContext } from "react";
import { SchedularContext } from "./ReactBookingSchedular";

function SideBar({ children }: { children: ReactNode }) {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const { labelWidth } = schedularData;

  return (
    <div
      className="bg-color_bg_secondary h-full z-10"
      style={{ width: `${labelWidth}px` }}
    >
      {children}
    </div>
  );
}

export default SideBar;
