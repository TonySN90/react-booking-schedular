import { ReactNode } from "react";

function InsideWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex shadow-xl overflow-x-auto max-w-[100%] bg-color_bg_secondary">
      {children}
    </div>
  );
}

export default InsideWrapper;
