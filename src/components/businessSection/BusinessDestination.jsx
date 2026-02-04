// 'use client'
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Container } from '../layout/Container';

// const BusinessDestination = () => {
//   const [pulseActive, setPulseActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Trigger pulse animation at intervals
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPulseActive(true);
//       setTimeout(() => setPulseActive(false), 3000);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const rectangles = [
//     {
//       id: 1,
//       title: 'World-Class Infrastructure',
//       description: 'Dubai offers state-of-the-art facilities, modern office spaces, and cutting-edge logistics that empower businesses to operate efficiently and scale seamlessly.',
//       position: 'left',
//       verticalPosition: 'top'
//     },
//     {
//       id: 2,
//       title: 'Strategic Location',
//       description: 'Dubai\'s prime location connects businesses to key markets across the Middle East, Asia, Europe, and beyond, making it a global hub for trade and investment.',
//       position: 'left',
//       verticalPosition: 'middle'
//     },
//     {
//       id: 3,
//       title: 'Ease of Doing Business',
//       description: 'Dubai is recognized as one of the world\'s easiest cities to start and operate a business, thanks to streamlined government processes and investor-friendly policies.',
//       position: 'left',
//       verticalPosition: 'bottom'
//     },
//     {
//       id: 4,
//       title: 'Explore Our Departments',
//       description: 'TMG Global supports every aspect of business setup — from licensing and document clearance to PRO services and government approvals.',
//       position: 'right',
//       verticalPosition: 'top'
//     },
//     {
//       id: 5,
//       title: '0% Corporate & Income Tax',
//       description: 'Dubai provides a highly attractive tax environment, including 0% corporate and personal income tax, allowing businesses to maximize profits and growth.',
//       position: 'right',
//       verticalPosition: 'middle'
//     },
//     {
//       id: 6,
//       title: '100% Ownership',
//       description: 'Foreign investors enjoy 100% ownership of their businesses in Dubai\'s free zones, giving complete control and operational freedom.',
//       position: 'right',
//       verticalPosition: 'bottom'
//     }
//   ];

//   const gradientStops = [
//     { offset: "0%", color: "rgba(152,32,68,1)" },
//     { offset: "100%", color: "rgba(100,14,41,1)" }
//   ];

//   const getConnectionPath = (position, verticalPosition) => {
//     const centerX = 50;
//     const centerY = 50;

//     let startX, startY, endX, endY;

//     if (position === 'left') {
//       startX = 33;
//       if (verticalPosition === 'top') startY = 20;
//       if (verticalPosition === 'middle') startY = 50;
//       if (verticalPosition === 'bottom') startY = 80;
//     } else {
//       startX = 67;
//       if (verticalPosition === 'top') startY = 20;
//       if (verticalPosition === 'middle') startY = 50;
//       if (verticalPosition === 'bottom') startY = 80;
//     }

//     endX = centerX;
//     endY = centerY;

//     return { startX, startY, endX, endY };
//   };

//   const pulseDuration = 1.2;
//   const borderPulseDelay = pulseDuration;

//   // Mobile view - Grid layout
//   if (isMobile) {
//     return (
//       <div className="min-h-screen relative bg-white overflow-hidden py-8 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-10">
//             <h2 className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-clip-text text-transparent leading-tight">
//               Why Dubai is the Perfect Business Destination
//             </h2>
//           </div>

//           {/* Mobile Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {rectangles.map((item) => (
//               <motion.div
//                 key={item.id}
//                 className="w-full"
//               >
//                 <motion.div
//                   className="relative bg-white rounded-xl shadow-lg p-5 sm:p-6 overflow-hidden group transition-shadow duration-300"
//                   animate={pulseActive ? {
//                     boxShadow: [
//                       "0 10px 15px -3px rgba(152,32,68,0.08)",
//                       "0 0 0 4px rgba(152,32,68,0.25)",
//                       "0 10px 15px -3px rgba(152,32,68,0.08)"
//                     ],
//                     borderColor: [
//                       "#fff",
//                       "rgba(152,32,68,1)",
//                       "#fff"
//                     ]
//                   } : {}}
//                   transition={{
//                     duration: 1.2,
//                     delay: borderPulseDelay,
//                     times: [0, 0.5, 1]
//                   }}
//                   style={{
//                     borderWidth: 2,
//                     borderStyle: 'solid',
//                     borderColor: '#fff'
//                   }}
//                 >
//                   <div className="relative z-10">
//                     <h3 className="text-lg sm:text-xl font-semibold text-[#982044] mb-2 sm:mb-3 group-hover:text-[#640E29] transition-colors duration-300">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed text-sm">
//                       {item.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Desktop view - Original spider layout
//   return (
//     <div className="min-h-screen relative bg-white overflow-hidden py-16">
//       <Container>

//       <div className="max-w-7xl mx-auto ">
//         {/* Header Section */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl lg:text-5xl font-bold bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-clip-text text-transparent leading-tight mb-4">
//             Why Dubai is the Perfect <br />
//             Business Destination
//           </h2>
//         </div>

//         {/* Main Content */}
//         <div className="relative" style={{ height: '800px' }}>
//           {/* SVG for all connection lines */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
//             <defs>
//               <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 {gradientStops.map((stop, i) => (
//                   <stop key={i} offset={stop.offset} stopColor={stop.color} />
//                 ))}
//               </linearGradient>
//               <filter id="line-shadow" x="-20%" y="-20%" width="140%" height="140%">
//                 <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#941D43" floodOpacity="0.6" />
//               </filter>
//             </defs>

//             {rectangles.map((item) => {
//               const { startX, startY, endX, endY } = getConnectionPath(item.position, item.verticalPosition);
//               const delay = 0;

//               return (
//                 <g key={item.id}>
//                   {/* Base static line */}
//                   <line
//                     x1={`${startX}%`}
//                     y1={`${startY}%`}
//                     x2={`${endX}%`}
//                     y2={`${endY}%`}
//                     stroke="#fff"
//                     strokeWidth="2"
//                     filter="url(#line-shadow)"
//                   />

//                   {/* Animated pulse line */}
//                   {pulseActive && (
//                     <motion.line
//                       x1={`${endX}%`}
//                       y1={`${endY}%`}
//                       x2={`${startX}%`}
//                       y2={`${startY}%`}
//                       stroke="url(#brand-gradient)"
//                       strokeWidth="4"
//                       initial={{
//                         pathLength: 0,
//                         opacity: 1
//                       }}
//                       animate={{
//                         pathLength: 1,
//                         opacity: [1, 1, 0]
//                       }}
//                       transition={{
//                         duration: pulseDuration,
//                         delay,
//                         ease: "easeInOut"
//                       }}
//                     />
//                   )}

//                   {/* Connection dot at card */}
//                   <motion.circle
//                     cx={`${startX}%`}
//                     cy={`${startY}%`}
//                     r="7"
//                     fill="url(#brand-gradient)"
//                     animate={pulseActive ? {
//                       scale: [1, 1.5, 1],
//                       opacity: [0.7, 1, 0.7]
//                     } : {}}
//                     transition={{ duration: 1.2, delay: pulseDuration }}
//                   />

//                   {/* Connection dot at center */}
//                   <motion.circle
//                     cx={`${endX}%`}
//                     cy={`${endY}%`}
//                     r="6"
//                     fill="url(#brand-gradient)"
//                     animate={pulseActive ? {
//                       scale: [1, 1.3, 1],
//                       opacity: [0.7, 1, 0.7]
//                     } : {}}
//                     transition={{ duration: 1.2, delay: 0 }}
//                   />
//                 </g>
//               );
//             })}
//           </svg>

//           {/* Cards Container */}
//           <div className="relative h-full" style={{ zIndex: 10 }}>
//             {rectangles.map((item) => {
//               const isLeft = item.position === 'left';

//               let topPosition;
//               if (item.verticalPosition === 'top') topPosition = '5%';
//               if (item.verticalPosition === 'middle') topPosition = '42.5%';
//               if (item.verticalPosition === 'bottom') topPosition = '80%';

//               return (
//                 <motion.div
//                   key={item.id}
//                   className="absolute w-[30%]"
//                   style={{
//                     left: isLeft ? '0' : 'auto',
//                     right: isLeft ? 'auto' : '0',
//                     top: topPosition,
//                     transform: 'translateY(-50%)'
//                   }}
//                 >
//                   <motion.div
//                     className="relative bg-white rounded-xl shadow-lg p-6 overflow-hidden group transition-shadow duration-300"
//                     animate={pulseActive ? {
//                       boxShadow: [
//                         "0 10px 15px -3px rgba(152,32,68,0.08)",
//                         "0 0 0 4px rgba(152,32,68,0.25)",
//                         "0 10px 15px -3px rgba(152,32,68,0.08)"
//                       ],
//                       borderColor: [
//                         "#fff",
//                         "rgba(152,32,68,1)",
//                         "#fff"
//                       ]
//                     } : {}}
//                     transition={{
//                       duration: 1.2,
//                       delay: borderPulseDelay,
//                       times: [0, 0.5, 1]
//                     }}
//                     style={{
//                       borderWidth: 2,
//                       borderStyle: 'solid',
//                       borderColor: '#fff'
//                     }}
//                   >
//                     <div className="relative z-10">
//                       <h3 className="text-xl font-semibold text-[#982044] mb-3 group-hover:text-[#640E29] transition-colors duration-300">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-700 leading-relaxed text-sm">
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Central Logo */}
//           <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 20 }}>
//             {/* Outer Pulse Rings */}
//             <motion.div
//               className="absolute inset-0 -m-16"
//               animate={pulseActive ? {
//                 scale: [1, 1.5, 1],
//                 opacity: [0.6, 0.3, 0]
//               } : {}}
//               transition={{ duration: 2, ease: "easeOut" }}
//             >
//               <div className="absolute inset-0 rounded-full border-4" style={{ borderColor: "rgba(152,32,68,1)" }}></div>
//             </motion.div>

//             <motion.div
//               className="absolute inset-0 -m-12"
//               animate={pulseActive ? {
//                 scale: [1, 1.3, 1],
//                 opacity: [0.5, 0.2, 0]
//               } : {}}
//               transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
//             >
//               <div className="absolute inset-0 rounded-full border-3" style={{ borderColor: "rgba(100,14,41,1)" }}></div>
//             </motion.div>

//             {/* Logo Container */}
//             <motion.div 
//               className="relative bg-[#C79A59] rounded-full p-5 shadow-2xl"
//               animate={pulseActive ? {
//                 scale: [1, 1.1, 1],
//                 boxShadow: [
//                   "0 20px 25px -5px rgba(152,32,68,0.3)",
//                   "0 25px 50px -12px rgba(100,14,41,0.6)",
//                   "0 20px 25px -5px rgba(152,32,68,0.3)"
//                 ]
//               } : {}}
//               transition={{ duration: 2 }}
//             >
//               <div className="w-32 h-32 flex items-center justify-center">
//                 <img src="/assets/images/middle_logo.png" alt="TMG Logo" className="w-20 h-20 mb-2" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//       </Container>

//     </div>
//   );
// };

// export default BusinessDestination;

'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

const BusinessDestination = () => {
  const rectangles = [
    {
      id: 1,
      title: 'World-Class Infrastructure',
      description: 'Dubai offers state-of-the-art facilities, modern office spaces, and cutting-edge logistics that empower businesses to operate efficiently and scale seamlessly.',
    },
    {
      id: 2,
      title: 'Strategic Location',
      description: 'Dubai\'s prime location connects businesses to key markets across the Middle East, Asia, Europe, and beyond, making it a global hub for trade and investment.',
    },
    {
      id: 3,
      title: 'Ease of Doing Business',
      description: 'Dubai is recognized as one of the world\'s easiest cities to start and operate a business, thanks to streamlined government processes and investor-friendly policies.',
    },
    {
      id: 4,
      title: 'Explore Our Departments',
      description: 'TMG Global supports every aspect of business setup — from licensing and document clearance to PRO services and government approvals.',
    },
    {
      id: 5,
      title: '0% Corporate & Income Tax',
      description: 'Dubai provides a highly attractive tax environment, including 0% corporate and personal income tax, allowing businesses to maximize profits and growth.',
    },
    {
      id: 6,
      title: '100% Ownership',
      description: 'Foreign investors enjoy 100% ownership of their businesses in Dubai\'s free zones, giving complete control and operational freedom.',
    }
  ];

  return (
    <div className="min-h-screen relative bg-white overflow-hidden py-16">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-clip-text text-transparent leading-tight mb-4">
              Why Dubai is the Perfect <br />
              Business Destination
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rectangles.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className="h-full bg-white rounded-2xl p-8 
                  border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_20px_40px_-4px_rgba(152,32,68,0.15)] 
                  hover:border-[rgba(152,32,68,0.1)] 
                  transition-all duration-300 ease-out transform hover:-translate-y-1"
                >
                  <div className="relative z-10 flex flex-col h-full">


                    <h3 className="text-xl font-bold text-[#982044] mb-4 group-hover:text-[#640E29] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative gradient blur */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-[rgba(152,32,68,0.03)] group-hover:bg-[rgba(152,32,68,0.05)] transition-colors duration-300 blur-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BusinessDestination;