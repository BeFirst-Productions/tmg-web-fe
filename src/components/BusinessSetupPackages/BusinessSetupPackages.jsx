// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";
// import { packageData } from "../../data/PackageData";
// import { useRouter } from "next/navigation";

// export const BusinessSetupPackages = () => {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState("FREEZONE");
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [withVisa, setWithVisa] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const currentOptions = packageData[activeTab];

//   const categoryLinks = {
//     FREEZONE: "/freezone-company-formation",
//     OFFSHORE: "/offshore-company-formation",
//     Mainland: "/mainland-company-formation",
//   };

//   const handleLearnMore = (e) => {
//     e.stopPropagation();
//     const link = categoryLinks[activeTab] || "/";
//     router.push(link);
//   };

//   const cards = [
//     {
//       name: "MEYDAN",
//       prices: {
//         withVisa: { current: 20595, old: 21095 },
//         withoutVisa: { current: 12500, old: 13500 },
//       },
//       image: "/assets/images/packages/meydan-package.jpg",
//     },
//     {
//       name: "IFZA",
//       prices: {
//         withVisa: { current: 23495, old: 23995 },
//         withoutVisa: { current: 12400, old: 12000 },
//       },
//       image: "/assets/images/packages/ifza-freezone-package.jpg",
//     },
//     {
//       name: "SPC FREEZONE",
//       prices: {
//         withVisa: { current: 14490, old: 4990 },
//         withoutVisa: { current: 6375, old: 6875 },
//       },
//       image: "/assets/images/packages/spc-freezone-package.jpg",
//     },
//     {
//       name: "SRTIP PACKAGES",
//       prices: {
//         withVisa: { current: 12490, old: 13990 },
//         withoutVisa: { current: 5000, old: 5500 },
//       },
//       image: "/assets/images/packages/SRTIP-freezone-package.jpg",
//     },
//     {
//       name: "RAKEZ",
//       prices: {
//         withVisa: { current: 12010, old: 14010 },
//         withoutVisa: { current: 5510, old: 6010 },
//       },
//       image: "/assets/images/packages/rakez-freezone-package.jpg",
//     },
//     {
//       name: "SHAMS FREEZONE",
//       prices: {
//         withVisa: { current: 12600, old: 13120 },
//         withoutVisa: { current: 5750, old: 6885 },
//       },
//       image: "/assets/images/packages/shams-freezone-package.jpg",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isPaused) {
//         setFade(false);
//         setTimeout(() => {
//           setCurrentIndex((prev) => (prev + 1) % cards.length);
//           setFade(true);
//         }, 400);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   useEffect(() => {
//     const firstCard = document.querySelector("[data-first-card]");
//     if (!firstCard) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setHoveredIndex(0);
//             setTimeout(() => setHoveredIndex(null), 1000);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(firstCard);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="pb-16">
//       <div className="bg-black mx-3 md:mx-10 rounded-3xl flex justify-center py-10 xl:px-40 px-10">
//         <div className="grid lg:grid-cols-3 w-full gap-8 items-start">
//           {/* Left Side */}
//           <div>
//             <motion.h2
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-white text-4xl lg:text-5xl font-bold mb-8"
//             >
//               All-inclusive Business Setup Packages
//             </motion.h2>

//             <div className="flex gap-4 mb-8 flex-wrap">
//               <button
//                 onClick={() => setActiveTab("FREEZONE")}
//                 className={`px-6 py-3 rounded-2xl font-medium transition-all ${
//                   activeTab === "FREEZONE"
//                     ? "bg-[#C79A59] text-white"
//                     : "bg-transparent text-white border-2 border-[#C79A59]"
//                 }`}
//               >
//                 FREEZONE
//               </button>
//               <button
//                 onClick={() => setActiveTab("Mainland")}
//                 className={`px-6 py-3 rounded-2xl font-medium transition-all ${
//                   activeTab === "Mainland"
//                     ? "bg-[#C79A59] text-white"
//                     : "bg-transparent text-white border-2 border-[#C79A59]"
//                 }`}
//               >
//                 MAINLAND
//               </button>
//               <button
//                 onClick={() => setActiveTab("OFFSHORE")}
//                 className={`px-6 py-3 rounded-2xl font-medium transition-all ${
//                   activeTab === "OFFSHORE"
//                     ? "bg-[#C79A59] text-white"
//                     : "bg-transparent text-white border-2 border-[#C79A59]"
//                 }`}
//               >
//                 OFFSHORE
//               </button>
//             </div>

//             {/* Options List */}
//             <div className="space-y-4 mb-10">
//               <AnimatePresence mode="wait">
//                 {currentOptions.map((option, index) => (
//                   <motion.div
//                     data-first-card={index === 0 ? true : undefined}
//                     key={`${activeTab}-${option.name}`}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{
//                       opacity: 1,
//                       x: hoveredIndex === index ? 20 : 0,
//                     }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     className="flex items-center gap-3 text-amber-400 hover:text-amber-300 cursor-pointer group"
//                   >
//                     <span className="text-xl lg:text-3xl font-semibold bg-[conic-gradient(from_180deg,rgba(199,154,89,1)_0%,rgba(241,241,241,1)_100%)] bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-90">
//                       {option.name}
//                     </span>
//                     <motion.div
//                       animate={{
//                         rotate: hoveredIndex === index ? 50 : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <ArrowUpRight className="w-6 h-6" />
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>

//             <div className="flex justify-center">
//               <motion.button
//                 onClick={handleLearnMore}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#C79A59] text-white px-4 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors"
//               >
//                 Explore Packages
//                 <ArrowUpRight className="w-5 h-5" />
//               </motion.button>
//             </div>
//           </div>

//           {/* Middle Section - Flip Cards */}
//           <div className="flex justify-center w-full">
//             <div className="w-full md:w-[400px] h-[600px] overflow-y-auto pr-2 scrollbar-hide">
//               <div className="space-y-6">
//                 <AnimatePresence mode="wait">
//                   {currentOptions.map((option, index) => (
//                     <motion.div
//                       key={`${activeTab}-img-${option.name}`}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       transition={{ duration: 0.5, delay: index * 0.15 }}
//                       onHoverStart={() => {
//                         if (window.innerWidth > 768) setHoveredIndex(index);
//                       }}
//                       onHoverEnd={() => {
//                         if (window.innerWidth > 768) setHoveredIndex(null);
//                       }}
//                       onClick={() => {
//                         // Always navigate on click (consistent mobile & desktop behavior)
//                         const link = categoryLinks[activeTab] || "/";
//                         router.push(link);
//                       }}
//                       className="relative w-full cursor-pointer aspect-[3/2.5] lg:aspect-[3/3] xl:aspect-[3/2.5]"
//                       style={{ perspective: "1000px" }}
//                     >
//                       <motion.div
//                         className="relative w-full h-full"
//                         style={{ transformStyle: "preserve-3d" }}
//                         animate={{
//                           rotateY: hoveredIndex === index ? 180 : 0,
//                         }}
//                         transition={{ duration: 0.6 }}
//                       >
//                         {/* Front Side */}
//                         <div
//                           className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gray-900"
//                           style={{ backfaceVisibility: "hidden" }}
//                         >
//                           <div className="absolute top-0 left-0 z-10 bg-white/95 backdrop-blur-sm py-4 px-2 rounded-br-2xl shadow-md">
//                             <img
//                               className="h-6 md:h-12 w-auto object-contain"
//                               src={option.logo}
//                               alt="Logo"
//                             />
//                           </div>

//                           <img
//                             src={option.image}
//                             alt={option.name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>

//                         {/* Back Side */}
//                         <div
//                           className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
//                           style={{
//                             backfaceVisibility: "hidden",
//                             transform: "rotateY(180deg)",
//                             background:
//                               "linear-gradient(180deg, rgba(152,32,68,1) 0%, rgba(100,14,41,1) 100%)",
//                           }}
//                         >
//                           <div className="w-full h-full p-4 2xl:p-8 flex flex-col justify-between">
//                             <div>
//                               <h3 className="text-white text-2xl font-bold mb-4">
//                                 {option.name}
//                               </h3>
//                               <p className="text-white/90 text-sm md:text-base leading-relaxed">
//                                 {option.description}
//                               </p>
//                             </div>

//                             <div className="flex items-center bg-white p-4 h-14 rounded-xl justify-between mt-2 lg:mt-2 xl:mt-6">
//                               <span className="text-black text-lg md:text-xl font-semibold">
//                                 {option.rate}
//                               </span>

//                               <Link href={categoryLinks[activeTab] || "/"}>
//                                 <img
//                                   src={option.logo}
//                                   alt={`${option.name} logo`}
//                                   className="h-14 w-14 object-contain hover:scale-105 transition-transform duration-300"
//                                 />
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Explore Packages */}
//           <div className="w-full flex flex-col items-center space-y-8">
//             {/* Section Heading */}
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-2xl md:text-3xl xl:text-4xl font-bold text-white text-center"
//             >
//               Explore Our Packages
//             </motion.h2>

//             {/* Card Container */}
//             <div className="w-full flex justify-center">
//               <motion.div
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//                 onClick={() => {
//                   const link = categoryLinks[activeTab] || "/";
//                   router.push(link);
//                 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="relative w-full md:w-[380px] lg:w-[420px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-in-out border-2 border-[#8E1A3D]"
//               >
//                 {/* Package Image with Fade Transition */}
//                 <div className="relative w-full h-56 overflow-hidden">
//                   <motion.img
//                     key={cards[currentIndex].image}
//                     src={cards[currentIndex].image}
//                     alt={cards[currentIndex].name}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: fade ? 1 : 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="bg-white px-6 py-8 flex flex-col items-center text-center space-y-4">
//                   {/* Title */}
//                   <motion.h3
//                     key={cards[currentIndex].name}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="text-2xl md:text-3xl font-bold text-[#8E1A3D]"
//                   >
//                     {cards[currentIndex].name}
//                   </motion.h3>

//                   {/* Toggle Switch for Visa Option */}
//                   <div className="flex items-center justify-center gap-3">
//                     <span
//                       className={`text-xs md:text-sm font-medium transition-colors ${
//                         !withVisa ? "text-[#8E1A3D]" : "text-gray-400"
//                       }`}
//                     >
//                       Without Visa
//                     </span>

//                     <motion.button
//                       onClick={() => setWithVisa(!withVisa)}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
//                         withVisa ? "bg-[#8E1A3D]" : "bg-gray-300"
//                       }`}
//                     >
//                       <motion.span
//                         animate={{ x: withVisa ? 20 : 2 }}
//                         transition={{ duration: 0.3 }}
//                         className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md"
//                       ></motion.span>
//                     </motion.button>

//                     <span
//                       className={`text-xs md:text-sm font-medium transition-colors ${
//                         withVisa ? "text-[#8E1A3D]" : "text-gray-400"
//                       }`}
//                     >
//                       With Visa
//                     </span>
//                   </div>

//                   {/* Price Section with Animation */}
//                   <div className="flex flex-col items-center space-y-1 pt-2">
//                     <motion.span
//                       key={`${cards[currentIndex].name}-${
//                         withVisa ? "with" : "without"
//                       }`}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4 }}
//                       className="text-3xl md:text-4xl font-extrabold text-[#8E1A3D]"
//                     >
//                       AED{" "}
//                       {withVisa
//                         ? cards[
//                             currentIndex
//                           ].prices.withVisa.current.toLocaleString()
//                         : cards[
//                             currentIndex
//                           ].prices.withoutVisa.current.toLocaleString()}
//                     </motion.span>

//                     <motion.span
//                       key={`${cards[currentIndex].name}-old-${
//                         withVisa ? "with" : "without"
//                       }`}
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.4, delay: 0.1 }}
//                       className="text-gray-400 line-through text-sm md:text-base"
//                     >
//                       AED{" "}
//                       {withVisa
//                         ? cards[
//                             currentIndex
//                           ].prices.withVisa.old.toLocaleString()
//                         : cards[
//                             currentIndex
//                           ].prices.withoutVisa.old.toLocaleString()}
//                     </motion.span>
//                   </div>
//                 </div>

//                 {/* Auto Slide Indicators */}
//                 <div className="flex gap-2 justify-center pb-4 bg-white">
//                   {cards.map((_, index) => (
//                     <motion.span
//                       key={index}
//                       animate={{
//                         backgroundColor:
//                           currentIndex === index ? "#8E1A3D" : "#D1D5DB",
//                         scale: currentIndex === index ? 1.2 : 1,
//                       }}
//                       transition={{ duration: 0.3 }}
//                       className="w-2 h-2 rounded-full cursor-pointer"
//                       onClick={() => {
//                         setCurrentIndex(index);
//                         setFade(true);
//                       }}
//                     ></motion.span>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { packageData } from "../../data/PackageData";
import { useRouter } from "next/navigation";

export const BusinessSetupPackages = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("FREEZONE");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [withVisa, setWithVisa] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const currentOptions = packageData[activeTab];
  const scrollRef = React.useRef(null);

  // Scroll Sync: Update currentIndex based on scroll position (Sticky Strategy)
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerRect = container.getBoundingClientRect();

      const cards = container.querySelectorAll('[data-card-index]');
      let maxOverlap = 0;
      let mostVisibleIndex = currentIndex;
      let fullyVisibleIndex = -1;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();

        // Calculate vertical overlap
        const overlapTop = Math.max(containerRect.top, cardRect.top);
        const overlapBottom = Math.min(containerRect.bottom, cardRect.bottom);
        const overlapHeight = Math.max(0, overlapBottom - overlapTop);
        const overlapRatio = overlapHeight / card.clientHeight;

        if (overlapRatio > 0.9) {
          fullyVisibleIndex = parseInt(card.getAttribute('data-card-index') || '0', 10);
        }

        if (overlapHeight > maxOverlap) {
          maxOverlap = overlapHeight;
          mostVisibleIndex = parseInt(card.getAttribute('data-card-index') || '0', 10);
        }
      });

      if (fullyVisibleIndex !== -1) {
        if (fullyVisibleIndex !== currentIndex) {
          setCurrentIndex(fullyVisibleIndex);
          setFade(true);
        }
      } else {
        // No card is fully visible. Check if we should hold onto the current one.
        const currentCard = container.querySelector(`[data-card-index="${currentIndex}"]`);
        if (currentCard) {
          const currentRect = currentCard.getBoundingClientRect();
          const overlapTop = Math.max(containerRect.top, currentRect.top);
          const overlapBottom = Math.min(containerRect.bottom, currentRect.bottom);
          const currentOverlap = Math.max(0, overlapBottom - overlapTop);
          const currentRatio = currentOverlap / currentCard.clientHeight;

          // If current card is less than 40% visible, fallback to most visible
          if (currentRatio < 0.4) {
            if (mostVisibleIndex !== currentIndex) {
              setCurrentIndex(mostVisibleIndex);
              setFade(true);
            }
          }
        } else {
          // Current card logic failed (e.g. index out of bounds), strictly fallback
          if (mostVisibleIndex !== currentIndex) {
            setCurrentIndex(mostVisibleIndex);
            setFade(true);
          }
        }
      }
    }
  };

  const categoryLinks = {
    FREEZONE: "/freezone-company-formation",
    OFFSHORE: "/offshore-company-formation",
    Mainland: "/mainland-company-formation",
  };

  const handleLearnMore = (e) => {
    e.stopPropagation();
    const link = categoryLinks[activeTab] || "/";
    router.push(link);
  };

  const cards = [
    {
      name: "MEYDAN",
      prices: {
        withVisa: { current: 20595, old: 21095 },
        withoutVisa: { current: 12500, old: 13500 },
      },
      image: "/assets/images/packages/meydan-package.jpg",
    },
    {
      name: "IFZA",
      prices: {
        withVisa: { current: 23495, old: 23995 },
        withoutVisa: { current: 12400, old: 12000 },
      },
      image: "/assets/images/packages/ifza-freezone-package.jpg",
    },
    {
      name: "SPC FREEZONE",
      prices: {
        withVisa: { current: 14490, old: 4990 },
        withoutVisa: { current: 6375, old: 6875 },
      },
      image: "/assets/images/packages/spc-freezone-package.jpg",
    },
    {
      name: "SRTIP PACKAGES",
      prices: {
        withVisa: { current: 12490, old: 13990 },
        withoutVisa: { current: 5000, old: 5500 },
      },
      image: "/assets/images/packages/SRTIP-freezone-package.jpg",
    },
    {
      name: "RAKEZ",
      prices: {
        withVisa: { current: 12010, old: 14010 },
        withoutVisa: { current: 5510, old: 6010 },
      },
      image: "/assets/images/packages/rakez-freezone-package.jpg",
    },
    {
      name: "SHAMS FREEZONE",
      prices: {
        withVisa: { current: 12600, old: 13120 },
        withoutVisa: { current: 5750, old: 6885 },
      },
      image: "/assets/images/packages/shams-freezone-package.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % cards.length);
          setFade(true);
        }, 400);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const firstCard = document.querySelector("[data-first-card]");
    if (!firstCard) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHoveredIndex(0);
            setTimeout(() => setHoveredIndex(null), 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(firstCard);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-16">
      <div className="bg-black mx-3 md:mx-10 rounded-3xl flex justify-center py-10 xl:px-40 px-10">
        <div className="grid lg:grid-cols-3 w-full gap-8 items-start">
          {/* Left Side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl lg:text-5xl font-bold mb-8"
            >
              All-inclusive Business Setup Packages
            </motion.h2>

            <div className="flex gap-4 mb-8 flex-wrap">
              <button
                onClick={() => setActiveTab("FREEZONE")}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${activeTab === "FREEZONE"
                  ? "bg-[#C79A59] text-white"
                  : "bg-transparent text-white border-2 border-[#C79A59]"
                  }`}
              >
                FREEZONE
              </button>
              <button
                onClick={() => setActiveTab("Mainland")}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${activeTab === "Mainland"
                  ? "bg-[#C79A59] text-white"
                  : "bg-transparent text-white border-2 border-[#C79A59]"
                  }`}
              >
                MAINLAND
              </button>
              <button
                onClick={() => setActiveTab("OFFSHORE")}
                className={`px-6 py-3 rounded-2xl font-medium transition-all ${activeTab === "OFFSHORE"
                  ? "bg-[#C79A59] text-white"
                  : "bg-transparent text-white border-2 border-[#C79A59]"
                  }`}
              >
                OFFSHORE
              </button>
            </div>

            {/* Options List */}
            <div className="space-y-4 mb-10">
              <AnimatePresence mode="wait">
                {currentOptions.map((option, index) => (
                  <motion.div
                    data-first-card={index === 0 ? true : undefined}
                    key={`${activeTab}-${option.name}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: currentIndex === index ? 20 : 0,
                    }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-amber-400 hover:text-amber-300 cursor-pointer group"
                  >
                    <span className="text-xl lg:text-3xl font-semibold bg-[conic-gradient(from_180deg,rgba(199,154,89,1)_0%,rgba(241,241,241,1)_100%)] bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-90">
                      {option.name}
                    </span>
                    <motion.div
                      animate={{
                        rotate: currentIndex === index ? 50 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-center">
              <motion.button
                onClick={handleLearnMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C79A59] text-white px-4 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors"
              >
                Explore Packages
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Middle Section - Flip Cards */}
          <div className="flex justify-center w-full">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="w-full md:w-[400px] h-[600px] overflow-y-auto pr-2 scrollbar-hide scroll-smooth"
            >
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {currentOptions.map((option, index) => (
                    <motion.div
                      data-card-index={index}
                      key={`${activeTab}-img-${option.name}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      onClick={() => {
                        // Always navigate on click
                        const link = categoryLinks[activeTab] || "/";
                        router.push(link);
                      }}
                      className="relative w-full cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                      {/* Image Section (Formerly Front Side) */}
                      <div className="relative w-full h-48 sm:h-56 bg-gray-900">
                        <div className="absolute top-0 left-0 z-10 bg-white/95 backdrop-blur-sm py-3 px-3 rounded-br-2xl shadow-md">
                          <img
                            className="h-8 md:h-10 w-auto object-contain"
                            src={option.logo}
                            alt="Logo"
                          />
                        </div>

                        <img
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content Section (Formerly Back Side) */}
                      <div
                        className="w-full p-5 lg:p-6 flex flex-col justify-between"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(152,32,68,1) 0%, rgba(100,14,41,1) 100%)",
                        }}
                      >
                        <div>
                          <h3 className="text-white text-xl lg:text-2xl font-bold mb-3">
                            {option.name}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                            {option.description}
                          </p>
                        </div>

                        <div className="flex items-center bg-white p-4 h-14 rounded-xl justify-between">
                          <span className="text-black text-lg md:text-xl font-semibold">
                            {option.rate}
                          </span>

                          <Link href={categoryLinks[activeTab] || "/"}>
                            <img
                              src={option.logo}
                              alt={`${option.name} logo`}
                              className="h-12 w-12 object-contain hover:scale-105 transition-transform duration-300"
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Section - Explore Packages */}
          <div className="w-full flex flex-col items-center space-y-8">
            {/* Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl xl:text-4xl font-bold text-white text-center"
            >
              Explore Our Packages
            </motion.h2>

            {/* Card Container */}
            <div className="w-full flex justify-center">
              <motion.div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => {
                  const link = categoryLinks[activeTab] || "/";
                  router.push(link);
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full md:w-[380px] lg:w-[420px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-in-out border-2 border-[#8E1A3D]"
              >
                {/* Package Image with Fade Transition */}
                <div className="relative w-full h-56 overflow-hidden">
                  <motion.img
                    key={cards[currentIndex].image}
                    src={cards[currentIndex].image}
                    alt={cards[currentIndex].name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: fade ? 1 : 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="bg-white px-6 py-8 flex flex-col items-center text-center space-y-4">
                  {/* Title */}
                  <motion.h3
                    key={cards[currentIndex].name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl md:text-3xl font-bold text-[#8E1A3D]"
                  >
                    {cards[currentIndex].name}
                  </motion.h3>

                  {/* Toggle Switch for Visa Option */}
                  <div className="flex items-center justify-center gap-3">
                    <span
                      className={`text-xs md:text-sm font-medium transition-colors ${!withVisa ? "text-[#8E1A3D]" : "text-gray-400"
                        }`}
                    >
                      Without Visa
                    </span>

                    <motion.button
                      onClick={() => setWithVisa(!withVisa)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${withVisa ? "bg-[#8E1A3D]" : "bg-gray-300"
                        }`}
                    >
                      <motion.span
                        animate={{ x: withVisa ? 20 : 2 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md"
                      ></motion.span>
                    </motion.button>

                    <span
                      className={`text-xs md:text-sm font-medium transition-colors ${withVisa ? "text-[#8E1A3D]" : "text-gray-400"
                        }`}
                    >
                      With Visa
                    </span>
                  </div>

                  {/* Price Section with Animation */}
                  <div className="flex flex-col items-center space-y-1 pt-2">
                    <motion.span
                      key={`${cards[currentIndex].name}-${withVisa ? "with" : "without"
                        }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-3xl md:text-4xl font-extrabold text-[#8E1A3D]"
                    >
                      AED{" "}
                      {withVisa
                        ? cards[
                          currentIndex
                        ].prices.withVisa.current.toLocaleString()
                        : cards[
                          currentIndex
                        ].prices.withoutVisa.current.toLocaleString()}
                    </motion.span>

                    <motion.span
                      key={`${cards[currentIndex].name}-old-${withVisa ? "with" : "without"
                        }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-gray-400 line-through text-sm md:text-base"
                    >
                      AED{" "}
                      {withVisa
                        ? cards[
                          currentIndex
                        ].prices.withVisa.old.toLocaleString()
                        : cards[
                          currentIndex
                        ].prices.withoutVisa.old.toLocaleString()}
                    </motion.span>
                  </div>
                </div>

                {/* Auto Slide Indicators */}
                <div className="flex gap-2 justify-center pb-4 bg-white">
                  {cards.map((_, index) => (
                    <motion.span
                      key={index}
                      animate={{
                        backgroundColor:
                          currentIndex === index ? "#8E1A3D" : "#D1D5DB",
                        scale: currentIndex === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 rounded-full cursor-pointer"
                      onClick={() => {
                        setCurrentIndex(index);
                        setFade(true);
                      }}
                    ></motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
