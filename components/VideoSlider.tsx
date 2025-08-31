"use client";

import { useState, useRef, useEffect, TouchEvent } from "react";

const videos = ["/livespot-home.mp4", "/livespot-home.mp4"];

export default function VideoSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Go to next with fade
  const goToNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 500); // match transition duration
  };

  const goToPrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
      setFade(false);
    }, 500);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) goToNext(); // swipe left
      else goToPrev(); // swipe right
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const currentVideo = videoRefs.current[current];
    if (currentVideo) {
      const handleEnded = () => {
        goToNext();
      };

      currentVideo.addEventListener("ended", handleEnded);

      // Try to autoplay manually
      currentVideo.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });

      return () => {
        currentVideo.removeEventListener("ended", handleEnded);
      };
    }
  }, [current]);

  return (
    <div className="w-full">
      <div
        className="relative w-full aspect-video max-h-[80vh] md:max-h-[700px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {videos.map((src, index) => (
          <video
            key={index}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={src}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              index === current
                ? fade
                  ? "opacity-0 z-20"
                  : "opacity-100 z-20"
                : "opacity-0 z-10"
            }`}
            autoPlay={index === current}
            muted
            playsInline
            controls={index === current}
          />
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-30"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-30"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFade(true);
              setTimeout(() => {
                setCurrent(i);
                setFade(false);
              }, 500);
            }}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              i === current ? "bg-brand" : "bg-gray-300"
            }`}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
