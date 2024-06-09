import { useContext } from "react";
import { SchedularContext } from "./ReactBookingSchedular";
import Spinner from "./Spinner";

function LabelBar() {
  const { schedularData } = useContext(SchedularContext);
  if (!schedularData) throw new Error("SchedularContext not found");

  const { cabins, isLoadingCabins } = schedularData;

  console.log(isLoadingCabins);

  return (
    <>
      {cabins.length === 0 && isLoadingCabins ? <LabelsLoader /> : <Labels />}
    </>
  );
}

export default LabelBar;

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
