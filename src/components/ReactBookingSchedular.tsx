import { createContext } from "react";
import useSchedular from "../hooks/useSchedular";
import {
  IOptionsTypes,
  ISchedularContextTypes,
  ISchedularTypes,
} from "../types/SchedularTypes";
import { OutsideWrapper } from "./OutsideWrapper";
import InsideWrapper from "./InsideWrapper";
import SideBar from "./SideBar";
import BookingsLoader from "./BookingsLoader";
import Canvas from "./Canvas";
import Controls from "./Controls";
import Caption from "./Caption";
import LabelBar from "./Labels";

export const SchedularContext = createContext({} as ISchedularContextTypes);

function ReactBookingSchedular({
  bookings,
  cabins,
  isLoadingBookings,
  isLoadingCabins,
  fnCheckIn,
  fnCheckOut,
  fnShowInfo,
  fnUpdateBooking,
}: IOptionsTypes) {
  const schedularData = useSchedular({
    bookings,
    cabins,
    isLoadingBookings,
    isLoadingCabins,
  }) as ISchedularTypes;
  const tooltips = [
    { id: "control-prev-btn", content: "Setze einen Monat zurück" },
    { id: "control-current-btn", content: "Setze zum heutigen Tag" },
    { id: "control-next-btn", content: "Setze einen Monat vor" },
    { id: "bookings-menu-details-btn", content: "Zeige Details" },
    { id: "bookings-menu-edit-btn", content: "Buchung bearbeiten" },
    { id: "bookings-menu-checkin-btn", content: "Check-In" },
    { id: "bookings-menu-checkout-btn", content: "Check-Out" },
  ];

  return (
    <SchedularContext.Provider
      value={{
        bookings,
        cabins,
        fnCheckIn,
        fnCheckOut,
        fnShowInfo,
        fnUpdateBooking,
        tooltips,
        schedularData,
      }}
    >
      <OutsideWrapper>
        <InsideWrapper>
          <BookingsLoader />
          <SideBar>
            <Controls />
            <LabelBar />
          </SideBar>
          <Canvas />
        </InsideWrapper>
        <Caption />
      </OutsideWrapper>
    </SchedularContext.Provider>
  );
}

export default ReactBookingSchedular;
