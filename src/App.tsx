import { BrowserRouter } from "react-router-dom";
import ReactBookingSchedular from "./components/ReactBookingSchedular";
import { bookings, cabins } from "./dummyData";

export default function App() {
  console.log(cabins);
  return (
    <BrowserRouter>
      <div
        id="yourWrapper"
        className="flex flex-col justify-center  h-screen w-[90%] m-auto"
      >
        <h1 className="text-2xl mb-2">React Booking Schedular</h1>
        <div className="w-full">
          <ReactBookingSchedular
            bookings={bookings}
            cabins={cabins}
            isLoadingBookings={false}
            isLoadingCabins={false}
            fnShowInfo={() => console.log("Info")}
            fnCheckIn={() => console.log("Check In")}
            fnCheckOut={() => console.log("Check Out")}
            fnUpdateBooking={() => console.log("Update Booking")}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}
