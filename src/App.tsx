import { BrowserRouter } from "react-router-dom";
import ReactBookingSchedular from "./components/ReactBookingSchedular";

export default function App() {
  return (
    <BrowserRouter>
      <div
        id="yourWrapper"
        className="flex justify-center items-center h-screen w-[90%] m-auto"
      >
        <ReactBookingSchedular />
      </div>
    </BrowserRouter>
  );
}
