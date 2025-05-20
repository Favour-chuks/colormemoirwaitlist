import React from "react";
import TextBlur from "./ui/text-blur";
import Image from "next/image";

function Steps() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[40px] pt-4">
      <TextBlur
        className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
        text="Three Simple Steps"
      />

      <div>
        <Image
          width={500}
          height={500}
          src="/steps.png"
          alt="an image showing the steps to create a pixel art"
          className="mx-auto h-full w-full"
        />
      </div>
    </div>
  );
}

export default Steps;
