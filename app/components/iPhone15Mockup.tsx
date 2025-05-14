import React from "react";
import Image from "next/image";
import appScreenshot from "@/app/assets/images/iphonewp.jpg";

const IPhone15Mockup = () => {
  return (
    <div className="relative w-[308px] aspect-[308/640] z-[3]">
      {/* Device Body */}
      <div className="absolute inset-0 rounded-[44px] z-[3] pointer-events-none shadow-[inset_0_0_0_20px_#000]">
        {/* Top Border Gradient */}
        {/* <div className="absolute inset-[2px_6px_2px_0] rounded-[43px] border-t-[4px] border-b-[4px] border-t-white/80 border-b-white/60 z-[2]" /> */}

        {/* Side Border */}
        <div className="absolute inset-[0_0_0_2px] rounded-[43px] border-t-[8px] border-b-[8px] border-black z-[3]" />

        {/* Dynamic Island */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[78px] h-[22px] rounded-[20px] bg-black z-[20]">
          {/* Camera */}
          <div className="absolute h-[14px] w-[14px] top-[4px] right-[4px] rounded-full bg-[#2f3132] opacity-66 z-[2]" />

          {/* Sensor */}
          <div className="absolute h-[8px] w-[8px] top-[7px] right-[7px] rounded-full bg-gradient-radial from-[#134296] to-[#2f3132] opacity-66 z-[3]" />
        </div>

        {/* Controls */}
        <div className="absolute inset-0 pointer-events-none z-[10]">
          {/* Mute Button */}
          <button
            type="button"
            className="absolute top-[12.5%] -left-[2px] w-[2px] h-[3.75%] bg-black cursor-pointer hover:after:opacity-100 after:content-[''] after:block after:w-[54px] after:h-[54px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-black/20 after:opacity-0 after:transition-opacity after:duration-200"
            aria-label="Mute"
          />

          {/* Power Button */}
          <button
            type="button"
            className="absolute top-[21%] -right-[2px] w-[2px] h-[10.5%] bg-black cursor-pointer hover:after:opacity-100 after:content-[''] after:block after:w-[54px] after:h-[54px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-black/20 after:opacity-0 after:transition-opacity after:duration-200"
            aria-label="Power"
          />

          {/* Volume Controls */}
          <div className="absolute top-[21%] -left-[2px] h-[16.1%]">
            {/* Volume Up */}
            <button
              type="button"
              className="absolute top-0 left-0 w-[2px] h-[45px] bg-black cursor-pointer hover:after:opacity-100 after:content-[''] after:block after:w-[54px] after:h-[54px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-black/20 after:opacity-0 after:transition-opacity after:duration-200"
              aria-label="Volume Up"
            />

            {/* Volume Down */}
            <button
              type="button"
              className="absolute bottom-0 left-0 w-[2px] h-[45px] bg-black cursor-pointer hover:after:opacity-100 after:content-[''] after:block after:w-[54px] after:h-[54px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-black/20 after:opacity-0 after:transition-opacity after:duration-200"
              aria-label="Volume Down"
            />
          </div>
        </div>

        {/* Screen */}
        <div className="absolute inset-[6px] z-[-1] rounded-[43px] overflow-hidden">
          <Image
            src={appScreenshot}
            alt="HomeGarage App"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default IPhone15Mockup;
