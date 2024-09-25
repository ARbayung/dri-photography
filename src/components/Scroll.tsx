import React from "react";
import { VelocityScroll } from "./magicui/VelocityScroll.tsx";
 
function Scroll() {
  return (
    <div>
        <VelocityScroll
            text="DRII FRANCISCO"
            default_velocity={5}
            className="scroll font-display text-center text-8xl font-bold tracking-[-0.01em] text-black drop-shadow-sm md:text-7x1 md:leading-[5rem]"
            />
    </div>
  );
}

export default Scroll;