import React from "react";
import TextReveal from "./magicui/TextReveal.tsx";
 
function Intro() {
  return (
    <div className="intro text-2xl z-20 flex min-h-[28rem] items-center justify-center bg-white text-black">
      <TextReveal text="Hello, I am Dri! I like taking photos and videos, welcome to my portfolio!" />
    </div>
  );
}

export default Intro;