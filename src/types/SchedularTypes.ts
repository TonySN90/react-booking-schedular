import { RefObject, UIEvent } from "react";

export interface IBookingTypes {
  cabins: { name: string; category: string; image: string; id: number };
  cabin: {
    id: number;
    cabinName: string;
    name: string;
    category: string;
    capacity: number;
    price: number;
    discount: number;
    img: string;
    image: string;
    description: string;
  };
  cabinId: number;
  created_at: string;
  id: number;
  guests: {
    email: string;
    fullName: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
    guestSince: string;
    maxStays: number;
    information: string;
  };
  fullName: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  extrasPrice: number;
  status: string;
  hasBreakfast: boolean;
  isPaid: boolean;
  totalPrice: number;
  cabinPrice: number;
  pricePerNight: number;
  allDaysPrice: number;
  guestId: number;
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
  id: number;
  cabinName: string;
  name: string;
  category: string;
  capacity: number;
  price: number;
  discount?: number;
  img: string;
  image: string;
  description: string;
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
  schedularData: ISchedularTypes;
  tooltips: { id: string; content: string }[];
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
