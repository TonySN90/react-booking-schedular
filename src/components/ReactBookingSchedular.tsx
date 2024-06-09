import { createContext } from "react";
import useSchedular from "../hooks/useSchedular";
import {
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

function ReactBookingSchedular() {
  const schedularData = useSchedular() as ISchedularTypes;
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
    <SchedularContext.Provider value={{ schedularData, tooltips }}>
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
