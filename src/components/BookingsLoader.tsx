import { useContext } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { SchedularContext } from "./ReactBookingSchedular";

function BookingsLoader() {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const { isLoadingBookings, isLoadingCabins } = schedularData;

  return (
    <>
      {isLoadingBookings && isLoadingCabins && (
        <div className="bg-color_status_3 px-4 py-2 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex gap-2 rounded-lg">
          <span>Buchungen laden</span>
          <div>
            <CgSpinnerTwoAlt className="animate-spin text-2xl color_text" />
          </div>
        </div>
      )}
    </>
  );
}

export default BookingsLoader;
