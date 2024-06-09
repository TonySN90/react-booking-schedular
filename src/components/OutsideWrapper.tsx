import { ReactNode, useContext } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { SchedularContext } from "./ReactBookingSchedular";

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
              backgroundColor: "var(--color-bg-secondary)",
              height: "35px",
              zIndex: "1000",
              color: "var(--text)",
              borderRadius: "10px",
            }}
            border="2px solid var(--color-border)"
            opacity="1"
          />
        ))}
      </>
    </div>
  );
}
