// "use client";
// import Image from "next/image";
// import { Container } from "../layout/Container";
// import { SocialSidebar } from "./SocialSidebar";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { heroTexts } from "@/data/HeroData";


// export const HeroSection = () => {
//   const [videoError, setVideoError] = useState(false);
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const videoRef = useRef(null);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [heroTexts.length]);

//   useEffect(() => {
//     if (videoRef.current) {
//       const video = videoRef.current;

//       video.playbackRate = 0.98;

//       // Aggressive preloading removed
//       // video.load();

//       // Attempt autoplay
//       const playPromise = video.play();

//       if (playPromise !== undefined) {
//         playPromise.catch((error) => {
//           console.log("Video autoplay prevented:", error);

//           const playOnInteraction = () => {
//             video.play();
//             document.removeEventListener("click", playOnInteraction);
//             document.removeEventListener("touchstart", playOnInteraction);
//             document.removeEventListener("scroll", playOnInteraction);
//           };
//           document.addEventListener("click", playOnInteraction, { once: true });
//           document.addEventListener("touchstart", playOnInteraction, {
//             once: true,
//           });
//           document.addEventListener("scroll", playOnInteraction, {
//             once: true,
//           });
//         });
//       }
//     }
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       const handleTimeUpdate = () => {

//         if (video.duration && video.currentTime >= video.duration - 0.15) {
//           video.currentTime = 0;
//         }
//       };

//       const handleEnded = () => {
//         video.currentTime = 0;
//         video.play().catch((err) => console.log("Replay failed:", err));
//       };

//       video.addEventListener("timeupdate", handleTimeUpdate);
//       video.addEventListener("ended", handleEnded);

//       return () => {
//         video.removeEventListener("timeupdate", handleTimeUpdate);
//         video.removeEventListener("ended", handleEnded);
//       };
//     }
//   }, []);

//   const words = heroTexts[currentTextIndex].split(" ");

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.06,
//         delayChildren: 0.1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: 0.3 },
//     },
//   };

//   const wordVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//       rotateX: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         damping: 20,
//         stiffness: 150,
//       },
//     },
//   };

//   return (
//     <>

//       <section id="hero-section" className="relative h-screen w-full overflow-hidden bg-gray-900">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-10" />
//           <div className="absolute inset-0 -z-10">
//             <Image
//               src="/assets/images/hero/tmg_video_img.png"
//               alt="Office Background"
//               fill
//               priority
//               className="object-cover"
//               sizes="100vw"
//             />
//           </div>

//           {/* Video Element  */}
//           {!videoError && (
//             <video
//               ref={videoRef}
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="metadata"
//               onError={(e) => {
//                 console.error("Video failed to load:", e);
//                 setVideoError(true);
//               }}
//               className="w-full h-full object-cover relative z-0"
//             >
//               <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
//               <source src="/assets/videos/hero-video.webm" type="video/webm" />
//               Your browser does not support the video tag.
//             </video>
//           )}
//         </div>
//         <SocialSidebar />
//         <div id="home" className="relative z-20 h-full flex flex-col">
//           <Container>

//             <div className="flex-1 flex items-center justify-center h-screen">
//               <div className="text-center w-full">
//                 <div style={{ perspective: "1200px" }}>
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={currentTextIndex}
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                     >
//                       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight">
//                         {words.map((word, index) => (
//                           <motion.span
//                             key={`${currentTextIndex}-${index}`}
//                             variants={wordVariants}
//                             className="inline-block mr-2 sm:mr-3"
//                             style={{
//                               textShadow:
//                                 "0 10px 40px rgba(0,0,0,0.8), 0 0 80px rgba(255,255,255,0.1)",
//                               transformStyle: "preserve-3d",
//                             }}
//                           >
//                             {word}
//                           </motion.span>
//                         ))}
//                       </h1>
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>

//               </div>
//             </div>
//           </Container>
//         </div>


//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10" />
//       </section>

//     </>
//   );
// };






"use client";
import Image from "next/image";
import { Container } from "../layout/Container";
import { SocialSidebar } from "./SocialSidebar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroTexts } from "@/data/HeroData";


export const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroTexts.length]);



  const words = heroTexts[currentTextIndex].split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 150,
      },
    },
  };

  return (
    <>

      <section id="hero-section" className="relative h-screen w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-10" />
          <div className="absolute inset-0 -z-10">
            <Image
              src="/assets/images/hero/tmg-global.webp"
              alt="Office Background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        <SocialSidebar />
        <div id="home" className="relative z-20 h-full flex flex-col">
          <Container>

            <div className="flex-1 flex items-center justify-center h-screen">
              <div className="text-center w-full">
                <div style={{ perspective: "1200px" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTextIndex}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight">
                        {words.map((word, index) => (
                          <motion.span
                            key={`${currentTextIndex}-${index}`}
                            variants={wordVariants}
                            className="inline-block mr-2 sm:mr-3"
                            style={{
                              textShadow:
                                "0 10px 40px rgba(0,0,0,0.8), 0 0 80px rgba(255,255,255,0.1)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </h1>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </Container>
        </div>


        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10" />
      </section>

    </>
  );
};
