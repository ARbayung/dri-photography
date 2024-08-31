import React from "react";
import { VelocityScroll } from "./magicui/VelocityScroll.tsx";
 
function Scroll() {
  return (
    <div className="pb-10">
        <VelocityScroll
            text="HIRE ME"
            default_velocity={2}
            className="font-display text-center text-8xl font-bold tracking-[-0.05em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
            />
    </div>
  );
}

export default Scroll;