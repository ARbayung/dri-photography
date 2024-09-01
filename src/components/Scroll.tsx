import React from "react";
import { VelocityScroll } from "./magicui/VelocityScroll.tsx";
 
function Scroll() {
  return (
    <div className="pb-10">
        <VelocityScroll
            text="HIRE ME"
            default_velocity={2}
            className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black"
            />
    </div>
  );
}

export default Scroll;