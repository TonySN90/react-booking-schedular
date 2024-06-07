import { BrowserRouter } from "react-router-dom";
import ReactBookingSchedular from "./components/ReactBookingSchedular";

export default function App() {
  return (
    <BrowserRouter>
      <div
        id="yourWrapper"
        className="flex justify-center items-center h-screen w-screen"
      >
        <div className="w-[90%]">
          <ReactBookingSchedular />
        </div>
      </div>
    </BrowserRouter>
  );
}
