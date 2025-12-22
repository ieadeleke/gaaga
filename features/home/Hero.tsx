"use client";

import { useEffect, useRef, useState, type MouseEventHandler } from "react";
import Image from "next/image";
import GaageMain from "@/assets/images/gaaga-huge.svg";
import Hero4Img from "@/assets/images/hero.gif";
import HeroStillImg from "@/assets/images/hero_4.png";

const HomeHero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    let raf: number;
    let running = true;
    const ease = 0.15; // lower = more floaty

    const tick = () => {
      const t = targetRef.current;
      setPos((p) => ({
        x: p.x + (t.x - p.x) * ease,
        y: p.y + (t.y - p.y) * ease,
      }));
      if (running) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (expanded) return;
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    targetRef.current = { x, y };
    if (!visible) {
      setPos({ x, y });
      setVisible(true);
    }
  };

  const handleLeave = () => {
    setVisible(false);
  };

  // Close overlay on Escape
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [expanded]);

  const onExpandClick = () => {
    setVisible(false);
    setExpanded(true);
  };

  return (
    <header className="pt-40 relative">
      <div>
        <Image
          src={GaageMain}
          alt="Gaaga stylish design"
          width={1000}
          height={1000}
          className="w-[550px] mx-auto h-full mb-24"
        />
        <div
          ref={heroRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className={`sawtooth-mask relative ${!expanded && 'mb-16'}`}
        >
          <Image
            src={expanded ? HeroStillImg : Hero4Img}
            alt="checklist"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <div className="text-center max-w-[752px] mx-auto absolute inset-0 top-20">
            <h1 className="text-4xl text-white mb-3">
              Growing With Emerging Creators.
            </h1>
            <p className="text-xl w-[90%] mx-auto font-avenir-medium text-white mb-20">
              Gaaga Agency is a venture studio empowering Africa’s next
              generation of digital creators — turning creativity into capital.
            </p>
            <div className="flex items-center justify-center gap-5">
              <button className="bg-accent rounded-lg border-2 border-accent font-avenir-medium py-3 px-4 text-black">
                View Our Projects
              </button>
              <button className="border-2 rounded-lg bg-transparent border-accent font-avenir-medium text-accent py-3 px-4 capitalize">
                Pitch your Project
              </button>
            </div>
          </div>

          
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {visible && (
              <button
                type="button"
                onClick={onExpandClick}
                className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 select-none"
                style={{ left: pos.x, top: pos.y }}
              >
                <span className="bg-accent text-black border-2 border-black uppercase rounded-full px-4 py-2 text-sm shadow-[4px_4px_0_0_#000] font-avenir-medium whitespace-nowrap">
                  Expand
                </span>
              </button>
            )}
          </div>

          
          {false && (
            <div />
          )}
        </div>
      </div>
      {expanded && (
        <div ref={overlayRef} className="absolute inset-0 z-40 bg-transparent">
          <Image
            src={Hero4Img}
            alt="hero animation"
            unoptimized
            width={2000}
            height={1200}
            className="w-full h-full object-cover pointer-events-none"
          />
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="absolute bottom-4 right-4 z-10 bg-white text-black rounded-md px-3 py-1 text-sm border border-black shadow"
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default HomeHero;
