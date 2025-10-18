"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSection } from "../hero/HeroSection";
import AboutSection from "../about/AboutSection";


export const HeroAboutScrollTransition = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Hero moves up and fades out faster
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // fades faster

  // About comes up from below and fades in faster
  const aboutY = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]); // increases opacity quickly

  return (
    <div ref={ref} className="relative w-full h-[200vh] overflow-hidden">
      {/* Hero */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <HeroSection />
      </motion.div>

      {/* About */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen"
        style={{ y: aboutY, opacity: aboutOpacity }}
      >
        <AboutSection />
      </motion.div>
    </div>
  );
};
