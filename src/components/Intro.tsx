import React from "react";
import TextReveal from "./magicui/TextReveal.tsx";
 
function Intro() {
  return (
    <div className="intro z-10 flex min-h-[16rem] items-center justify-center border bg-white dark:bg-black">
      <TextReveal text="Hello, I am Dri! I like taking photos and videos, welcome to my portfolio!" />
    </div>
  );
}

export default Intro;