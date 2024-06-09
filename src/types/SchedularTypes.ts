import { RefObject, UIEvent } from "react";

export interface IBookingTypes {
  cabin: {
    id: number;
  };
  guest: {
    fullName: string;
    id: number;
  };
  status: string;
  id: number;
  startDate: string;
  endDate: string;
  numGuests: number;
}

export interface IMonth {
  month: number;
  monthName: string;
  year: number;
  daysInMonth: number;
  days: number[];
  firstDayOfMonth: Date;
  weekdays: string[];
}

export interface ICabinTypes {
  category: string;
  id: number;
  image: string;
  name: string;
}

export interface IOptionsTypes {
  bookings: IBookingTypes[];
  cabins: ICabinTypes[];
  isLoadingBookings: boolean;
  isLoadingCabins: boolean;
  fnCheckIn: () => void;
  fnCheckOut: () => void;
  fnShowInfo: () => void;
  fnUpdateBooking: () => void;
}

export interface ISchedularTypes {
  bookings: IBookingTypes[];
  cabins: ICabinTypes[];
  labelWidth: number;
  monthsToShow: IMonth[];
  handleScroll: (e: UIEvent<HTMLDivElement>) => void;
  getDayColor: (day: number, month: IMonth) => string | undefined;
  getMonthWidth: (daysInMonth: number) => number;
  calcBookingPositionX: (date: Date) => number;
  calcBookingPositionY: (cabinId: number) => number;
  calcBookingWidth: (startDate: Date, endDate: Date) => number;
  getDateColor: (startDate: string, endDate: string, today: Date) => string;
  loadCalendar: (direction: "left" | "now" | "right") => void;
  checkIfToday: (month: IMonth, day: number) => boolean;
  handleZoom: (operation: "in" | "out") => void;
  zoomLevel: number;
  isLoadingBookings: boolean;
  isLoadingCabins: boolean;
  today: Date;
  dayHeight: number;
  monthWidth: number;
  colWidth: number;
  rowHeight: number;
  todayElement: RefObject<HTMLDivElement>;
}

export interface ISchedularContextTypes {
  bookings: IBookingTypes[];
  cabins: ICabinTypes[];
  schedularData: ISchedularTypes;
  tooltips: { id: string; content: string }[];
  fnCheckIn: () => void;
  fnCheckOut: () => void;
  fnShowInfo: () => void;
  fnUpdateBooking: () => void;
}

export type IModalContextTypes = {
  openName: string;
  close: () => void;
  open: (name: string) => void;
};

export interface IModalWindowPropsTypes {
  name: string;
  children: React.ReactNode;
}

export type ButtonTypes = {
  basics: string;
  md: string;
  lg: string;
  standard: string;
  inverted: string;
  [key: string]: string;
};

export interface IButtonPropsTypes {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variation?: string;

  type?: "reset" | "submit" | "button";
  size: string;
  content: string | React.ReactNode;
  extras: string;
  loading?: boolean;
  disabled?: boolean;
}

export enum LoadingTypes {
  IDLE = "idle",
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}

export enum BookingStatusTypes {
  CHECKEDOUT = "checkedOut",
  CHECKEDIN = "checkedIn",
  UNCONFIRMED = "unconfirmed",
}
