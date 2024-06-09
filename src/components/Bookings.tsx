import { useContext, useRef, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { PiInfoBold } from "react-icons/pi";
import { TbDoorEnter, TbDoorExit } from "react-icons/tb";
import { SchedularContext } from "./ReactBookingSchedular";
import { BookingStatusTypes } from "../types/SchedularTypes";

function Bookings() {
  const [hidden, setHidden] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const BookingElement = useRef<HTMLDivElement>(null);

  const { schedularData, tooltips } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const {
    isLoadingCabins,
    isLoadingBookings,
    bookings,
    today,
    calcBookingPositionX,
    calcBookingPositionY,
    calcBookingWidth,
    getDateColor,
  } = schedularData;

  return (
    <div className="overflow-hidden">
      {isLoadingCabins && isLoadingBookings
        ? null
        : bookings.map((booking) => (
            <div
              ref={BookingElement}
              key={booking.id}
              className={`transition-all duration-500 absolute top-[110px] h-10 rounded-full overflow-none ${getDateColor(
                booking.startDate,
                booking.endDate,
                today
              )} shadow-md flex items-center`}
              style={{
                left: `${calcBookingPositionX(new Date(booking.startDate))}px`,
                top: `${calcBookingPositionY(booking.cabin.id)}px`,
                width: `${calcBookingWidth(
                  new Date(booking.startDate),
                  new Date(booking.endDate)
                )}px`,
              }}
              onMouseEnter={() => {
                {
                  setHidden(1), setCurrentId(booking.id);
                }
              }}
              onMouseLeave={() => setHidden(0)}
            >
              {booking.id === currentId && (
                <div
                  style={{ opacity: hidden, zIndex: 10 }}
                  className="flex flex-col gap-1 transition-all text-sm p-1 absolute bottom-0 right-0 border-2 border-color_border bg-color_bg_secondary rounded-full"
                >
                  {/* Info-Btn */}
                  <div
                    data-tooltip-id={
                      tooltips.find((t) => t.id === "bookings-menu-details-btn")
                        ?.id
                    }
                    onClick={() => console.log("Booking-information")}
                    className="group flex items-center justify-center w-7 h-7 bg-color_status_4 rounded-full cursor-pointer"
                  >
                    <PiInfoBold className="group-hover:scale-125 transition-all" />
                  </div>

                  {/* CheckIn-Btn */}
                  {/* if booking is today and unconfirmed */}
                  {new Date(booking.startDate).toDateString() ===
                    new Date().toDateString() &&
                    booking.status === "unconfirmed" && (
                      <div
                        data-tooltip-id={
                          tooltips.find(
                            (t) => t.id === "bookings-menu-checkin-btn"
                          )?.id
                        }
                        onClick={() => console.log("CheckIn")}
                        className="group flex items-center justify-center w-7 h-7 bg-color_status_1 rounded-full cursor-pointer"
                      >
                        <TbDoorEnter className="group-hover:scale-125 transition-all" />
                      </div>
                    )}

                  {/* Check-Out-Btn */}
                  {/* if booking is checkedIn */}
                  {booking.status === BookingStatusTypes.CHECKEDIN && (
                    <div
                      data-tooltip-id={
                        tooltips.find(
                          (t) => t.id === "bookings-menu-checkout-btn"
                        )?.id
                      }
                      onClick={() => console.log("CheckOut")}
                      className="group flex items-center justify-center w-7 h-7 bg-color_status_3 rounded-full cursor-pointer"
                    >
                      <TbDoorExit className="group-hover:scale-125 transition-all" />
                    </div>
                  )}

                  {(booking.status === BookingStatusTypes.CHECKEDIN ||
                    booking.status === BookingStatusTypes.UNCONFIRMED) && (
                    <div
                      data-tooltip-id={
                        tooltips.find((t) => t.id === "bookings-menu-edit-btn")
                          ?.id
                      }
                      onClick={() => console.log("update booking")}
                      className="group flex items-center justify-center w-7 h-7 bg-color_status_2 rounded-full cursor-pointer"
                    >
                      <MdModeEdit className="group-hover:scale-125 transition-all" />
                    </div>
                  )}
                </div>
              )}

              <div className="relative flex items-center text-xs px-3 font-semibold h-full w-full cursor-pointer">
                <div className="truncate">
                  <span>{`${booking.guests.fullName} | ${booking.numGuests} P`}</span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Bookings;
