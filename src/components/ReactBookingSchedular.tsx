import { CgSpinnerTwoAlt } from "react-icons/cg";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { createContext, useContext, ReactNode, useState, useRef } from "react";
import { useNavigate } from "react-router";
// import BookingInfoBox from "./bookingInfoBox";
import { TbDoorEnter, TbDoorExit } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
// import CreateBookingForm from "./CreateBookingForm";
import { PiInfoBold } from "react-icons/pi";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Spinner from "./Spinner";
import Modal from "./Modal";
import useSchedular from "../hooks/useSchedular";
import {
  BookingStatusTypes,
  ISchedularContextTypes,
  ISchedularTypes,
} from "../types/SchedularTypes";

const SchedularContext = createContext({} as ISchedularContextTypes);

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
          <BookingLoader />
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

export function OutsideWrapper({ children }: { children: ReactNode }) {
  const { tooltips } = useContext(SchedularContext);

  return (
    <div className="rounded-lg overflow-hidden">
      <>
        {children}
        {tooltips.map(({ id, content }) => (
          <ReactTooltip
            key={id}
            id={id}
            place="right"
            content={content}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--background-secondary)",
              height: "35px",
              zIndex: "1000",
              color: "var(--text)",
              borderRadius: "10px",
            }}
            border="2px solid var(--border-modal)"
            opacity="1"
          />
        ))}
      </>
    </div>
  );
}

function InsideWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex shadow-xl overflow-x-auto max-w-[100%] bg-color_bg_secondary">
      {children}
    </div>
  );
}

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

function BookingLoader() {
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

function LabelBar() {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const { cabins, isLoadingCabins } = schedularData;

  return (
    <>
      {cabins.length === 0 && isLoadingCabins ? <LabelsLoader /> : <Labels />}
    </>
  );
}

function Labels() {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const { cabins, rowHeight } = schedularData;

  return cabins.map((cabin) => {
    return (
      <div key={cabin.id}>
        <div
          className=" flex items-center gap-1 ml-2 border-r-4 border-color_main"
          style={{ height: `${rowHeight}px` }}
        >
          <div className="flex justify-center items-center">
            <img className="h-8 w-8 rounded-full" src={cabin.image} />
          </div>
          <div className="flex flex-col text-xs">
            <span>{cabin.name}</span>
            <span>{cabin.category}</span>
          </div>
        </div>
      </div>
    );
  });
}

function LabelsLoader() {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const { rowHeight } = schedularData;

  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="relative flex justify-center items-center gap-1 border-r-4 border-color_main"
          style={{ height: `${rowHeight}px` }}
        >
          <Spinner />
        </div>
      ))}
    </>
  );
}

function Bookings() {
  const [hidden, setHidden] = useState(0);
  const [currentId, setCurrentId] = useState(0);
  const BookingElement = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const { schedularData, tooltips } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  function handleClick(status: string, id: number) {
    if (status === "checkedIn") navigate(`/checkOut/${id}`);
    if (status === "unconfirmed") navigate(`/checkIn/${id}`);
  }

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
                top: `${calcBookingPositionY(booking.cabins.id)}px`,
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
                  className="transition-all text-sm p-1 absolute bottom-0 right-0 border-2 border-color_border rounded-full"
                >
                  <Modal>
                    <div className="flex flex-col gap-1">
                      <Modal.Open opens="view">
                        <div
                          data-tooltip-id={
                            tooltips.find(
                              (t) => t.id === "bookings-menu-details-btn"
                            )?.id
                          }
                          className="group flex items-center justify-center w-7 h-7 bg-color_status_4 rounded-full cursor-pointer"
                        >
                          <PiInfoBold className="group-hover:scale-125 transition-all" />
                        </div>
                      </Modal.Open>
                      <Modal.Window name="view">
                        {/* <BookingInfoBox bookingId={booking.id} /> */}
                        <div>Info</div>
                      </Modal.Window>

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
                            onClick={() =>
                              handleClick(booking.status, booking.id)
                            }
                            className="group flex items-center justify-center w-7 h-7 bg-color_status_1 rounded-full cursor-pointer"
                          >
                            <TbDoorEnter className="group-hover:scale-125 transition-all" />
                          </div>
                        )}

                      {/* if booking is checkedIn */}
                      {booking.status === BookingStatusTypes.CHECKEDIN && (
                        <div
                          data-tooltip-id={
                            tooltips.find(
                              (t) => t.id === "bookings-menu-checkout-btn"
                            )?.id
                          }
                          onClick={() =>
                            handleClick(booking.status, booking.id)
                          }
                          className="group flex items-center justify-center w-7 h-7 bg-color_status_3 rounded-full cursor-pointer"
                        >
                          <TbDoorExit className="group-hover:scale-125 transition-all" />
                        </div>
                      )}

                      {/* if booking is checkedIn or unconf */}
                      {(booking.status === BookingStatusTypes.CHECKEDIN ||
                        booking.status === BookingStatusTypes.UNCONFIRMED) && (
                        <>
                          <Modal.Open opens="edit">
                            <div
                              data-tooltip-id={
                                tooltips.find(
                                  (t) => t.id === "bookings-menu-edit-btn"
                                )?.id
                              }
                              className="group flex items-center justify-center w-7 h-7 bg-color_status_2 rounded-full cursor-pointer"
                            >
                              <MdModeEdit className="group-hover:scale-125 transition-all" />
                            </div>
                          </Modal.Open>
                          <Modal.Window name="edit">
                            {/* <CreateBookingForm bookingToUpdate={booking} /> */}
                            <div>f2</div>
                          </Modal.Window>
                        </>
                      )}
                    </div>
                  </Modal>
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

function Caption() {
  return (
    <div className="flex flex-wrap gap-3 mt-2 md:ml-[155px] text-sm">
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-color_status_5 rounded-full"></div>
        <span>Ausgecheckt</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-color_status_4 rounded-full"></div>
        <span>Eingecheckt</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-color_status_1 rounded-full"></div>
        <span>Anreisetag</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-color_status_3 rounded-full"></div>
        <span>Abreisetag</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-color_status_2 rounded-full"></div>
        <span>Ausstehend</span>
      </div>
    </div>
  );
}
