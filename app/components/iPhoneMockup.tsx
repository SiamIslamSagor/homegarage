import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import appScreenshot from "@/app/assets/images/page.jpg";
import { motion } from "framer-motion";

const IPhoneMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imagePosition, setImagePosition] = useState<
    "object-top" | "object-bottom"
  >("object-top");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || !cardRef.current) return;

      // Get hero section bounds
      const heroSection = document.querySelector("#hero_section");
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const isInsideHero =
        event.clientX >= heroRect.left &&
        event.clientX <= heroRect.right &&
        event.clientY >= heroRect.top &&
        event.clientY <= heroRect.bottom;

      // Check if cursor is inside window
      const isInsideWindow =
        event.clientX >= 0 &&
        event.clientX <= window.innerWidth &&
        event.clientY >= 0 &&
        event.clientY <= window.innerHeight;

      if (!isInsideHero || !isInsideWindow) {
        // Reset rotation when mouse is outside hero section or window
        gsap.to(cardRef.current, {
          duration: 0.8,
          rotationY: 0,
          rotationX: 0,
          ease: "power2.out",
        });
        return;
      }

      // Calculate mouse position relative to window center
      const mouseX = -(window.innerWidth / 2 - event.pageX) / 32;
      const mouseY = (window.innerHeight / 2 - event.pageY) / 50;

      // Apply 3D rotation using GSAP
      gsap.to(cardRef.current, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: "power2.out",
      });
    };

    // Handle mouse leave window
    const handleMouseLeave = () => {
      if (!cardRef.current) return;

      gsap.to(cardRef.current, {
        duration: 0.8,
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[390px] h-[844px] mx-auto perspective-1000 top_section"
    >
      <div
        ref={cardRef}
        className="relative w-full h-full 3d_card group"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative p-[6%]">
          {/* iPhone Body */}
          <div className="absolute inset-0 right-[1%] left-[1%] bg-gradient-to-t from-[#e5e5e5] via-[#f7f7f9] to-[#eeeef0] rounded-[14%/7%] shadow-[inset_0_0_3px_1px_#000] pointer-events-none duration-300">
            {/* Inner Black Border */}
            <div className="absolute top-[0.7%] right-[1.4%] bottom-[0.7%] left-[1.4%] bg-black rounded-[13%/7%] shadow-[0_0_3px_#000]" />

            {/* Screen Border */}
            <div className="absolute top-[1%] right-[2.3%] bottom-[1%] left-[2.3%] bg-black shadow-[inset_0_0_5px_1px_#fff] rounded-[13%/6.5%]" />

            {/* Notch */}
            <div className="absolute z-[20] top-[2.6%] left-1/2 w-[50%] h-[3.5%] bg-black rounded-b-[10%_80%] -translate-x-1/2" />

            {/* Speaker */}
            <div className="absolute z-[20] top-[4%] left-1/2 w-[12%] h-[0.8%] bg-[#222] rounded-[5px] -translate-x-1/2 -translate-y-1/2" />

            {/* Camera */}
            <div className="absolute z-[20] top-[4%] left-[36%] w-[3.5%] h-[1.7%] bg-[#222] rounded-full shadow-[inset_0_0_2px_1px_#000] -translate-x-1/2 -translate-y-1/2" />

            {/* Sensor */}
            <div className="absolute z-[20] top-[4%] left-[61%] w-[2.2%] h-[1.1%] bg-[#2a4a73] rounded-full shadow-[inset_0_0_2px_1px_#000] -translate-x-1/2 -translate-y-1/2" />

            {/* Side Buttons */}
            {/* Mute Button */}
            <div className="absolute top-[14.7%] -left-[0.7%] w-[0.7%] h-[4%] bg-[#b5b8ba] rounded-l shadow-[inset_0_5px_5px_-3px_rgba(0,0,0,0.5),inset_0_-5px_5px_-3px_rgba(0,0,0,0.5)] -translate-y-1/2" />

            {/* Volume Up */}
            <div className="absolute top-[25%] -left-[1%] w-[1%] h-[7.5%] bg-[#b5b8ba] rounded-l shadow-[inset_0_5px_5px_-3px_rgba(0,0,0,0.5),inset_0_-5px_5px_-3px_rgba(0,0,0,0.5)] -translate-y-1/2" />

            {/* Volume Down */}
            <div className="absolute top-[34%] -left-[1%] w-[1%] h-[7.5%] bg-[#b5b8ba] rounded-l shadow-[inset_0_5px_5px_-3px_rgba(0,0,0,0.5),inset_0_-5px_5px_-3px_rgba(0,0,0,0.5)] -translate-y-1/2" />

            {/* Power Button */}
            <div className="absolute top-[25%] -right-[1%] w-[1%] h-[7.5%] bg-[#f4f6f6] rounded-r shadow-[inset_0_5px_5px_-3px_rgba(0,0,0,0.5),inset_0_-5px_5px_-3px_rgba(0,0,0,0.5)] -translate-y-1/2" />
          </div>

          {/* Screen */}
          <div
            className="relative z-[10]"
            onMouseEnter={() => setImagePosition("object-bottom")}
            onMouseLeave={() => setImagePosition("object-top")}
          >
            <div className="relative pb-[218%] bg-[#888] rounded-[10%/5%] shadow-[0_0_10px_#000]">
              <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                <Image
                  src={appScreenshot}
                  alt="HomeGarage App"
                  fill
                  className={`object-cover ${imagePosition} group-hover:cursor-pointer duration-[6s]`}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneMockup;
