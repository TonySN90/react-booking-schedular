import { useContext } from "react";
import { BsClockFill } from "react-icons/bs";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { SchedularContext } from "./ReactBookingSchedular";

function Controls() {
  const { schedularData, tooltips } = useContext(SchedularContext);

  const { loadCalendar, handleZoom, zoomLevel } = schedularData;

  return (
    <div className="h-[100px] flex flex-col justify-center items-center bg-color_main ">
      <div className="flex flex-col justify-between h-[70px]">
        <div className="font-semibold text-center">
          {new Date().toLocaleDateString("de-DE")}
        </div>
        <div className="flex justify-between w-[100px]">
          <div
            data-tooltip-id={
              tooltips.find((t) => t.id === "control-prev-btn")?.id
            }
            className="flex justify-center items-center w-10 pb-[2px] cursor-pointer hover:text-color_bg_secondary transition-all"
            onClick={() => loadCalendar("left")}
          >
            <IoIosArrowDropleftCircle className="w-7 h-7" />
          </div>
          <div
            data-tooltip-id={
              tooltips.find((t) => t.id === "control-current-btn")?.id
            }
            className="flex justify-center items-center w-10 cursor-pointer hover:text-color_bg_secondary transition-all"
            onClick={() => loadCalendar("now")}
          >
            <BsClockFill className="w-8 h-8" />
          </div>
          <div
            data-tooltip-id={
              tooltips.find((t) => t.id === "control-next-btn")?.id
            }
            className="flex justify-center items-center w-10 cursor-pointer hover:text-color_bg_secondary transition-all"
            onClick={() => loadCalendar("right")}
          >
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </div>
        </div>
        <div className="hidden justify-between w-[50px] m-auto">
          <div onClick={() => handleZoom("in")} className="cursor-pointer">
            <CiCirclePlus
              className={`w-5 h-5 ${zoomLevel === 2 ? "text-border" : ""}`}
            />
          </div>
          <div onClick={() => handleZoom("out")} className="cursor-pointer">
            <CiCircleMinus
              className={`w-5 h-5 ${zoomLevel === 1 && "text-border"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;
