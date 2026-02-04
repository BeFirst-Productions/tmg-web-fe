// "use client";

// import React, { useState } from "react";
// import { ArrowRight, MessageCircle, Phone, ChevronRight } from "lucide-react";
// import { Container } from "../layout/Container";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import MainButton from "../button/main-button";
// import LettersPullUpText from "../text/LettersPullUpText";
// import ScheduleMeetingSection from "../meetingSchedule/ScheduleMeetingSection";
// import ConsultationModal from "../common/ConsultationModal";

// const AboutSection = () => {
//   const [selectedDate, setSelectedDate] = useState(2);
//   const [isSwiped, setIsSwiped] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const dates = [
//     { day: 31, month: "May" },
//     { day: 1, month: "We" },
//     { day: 2, month: "We" },
//     { day: 3, month: "We" },
//     { day: 4, month: "We" },
//   ];

//   const x = useMotionValue(0);
//   const background = useTransform(x, [0, 150], ["#5c1a2e", "#7a2240"]);

//   const handleDragEnd = (event, info) => {
//     if (info.offset.x > 150) {
//       setIsSwiped(true);

//       setTimeout(() => setIsSwiped(false), 2000);
//     } else {
//       x.set(0);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Top Background Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
//         <div className="w-full h-full bg-gradient-to-br from-amber-200 via-orange-200 to-amber-100 rounded-full blur-3xl"></div>
//       </div>
//       <div className="absolute top-32 left-20 w-48 h-48 opacity-20">
//         <div className="w-full h-full bg-gradient-to-br from-orange-300 via-amber-200 to-yellow-200 rounded-full blur-2xl"></div>
//       </div>

//       {/* Top Decorative dots */}
//       {/* <div className="absolute top-40 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-60"></div>
//       <div className="absolute top-48 left-24 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50"></div>
//       <div className="absolute top-56 left-16 w-1 h-1 bg-amber-500 rounded-full opacity-40"></div> */}

//       <div
//         className="absolute left-0 w-80 h-80 opacity-100"
//         style={{ top: "55%", transform: "translateY(-50%)" }}
//       >
//         <img
//           src="/assets/images/about/left_element_about.png"
//           alt="Professional woman with tablet"
//           className="w-full h-auto rounded-2xl"
//         />{" "}
//       </div>

//       <div
//         className="absolute left-8 w-48 h-48 opacity-20"
//         style={{ top: "62%", transform: "translateY(-50%)" }}
//       >
//         <div className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-300 to-yellow-300 rounded-full blur-xl"></div>
//       </div>

//       <Container>
//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:pt-16">
//           <section className="mb-16 lg:mb-24">
//             <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-6 lg:py-8">
//               <div className="order-2 lg:order-1">
//                 <LettersPullUpText
//                   text="Empowering Businesses. Simplifying Solutions."
//                   className="text-[#49051E]"
//                 />
//                 {/* <h2 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-bold text-maroon-900 mb-6 lg:mb-8 leading-tight">
//                   <span className="text-[#49051E]">
//                   Driven by Vision, Built on Trust
//                   </span>
//                 </h2> */}

//                 <p className="text-gray-600 text-[0.938rem]  md:text-lg leading-relaxed mb-5">
//                   <strong>
//                     {" "}
//                     TMG Global Services LLC (Thameem Management Group Global
//                     LLC)
//                   </strong>{" "}
//                   stands as a trusted
//                   <strong>
//                     {" "}
//                     document-clearing and <a href="https://tmgdubai.ae/about-us" className="text-decoration-none">best business setup company in Dubai</a>,UAE{" "}
//                   </strong>{" "}
//                   offering comprehensive solutions for individuals,
//                   entrepreneurs, and corporations throughout the UAE. Founded by{" "}
//                   <strong>Mr. Thameem Aboobacker ,</strong> a pioneering figure
//                   in{" "}
//                   <strong>
//                     {" "}
//                     business consultancy and government services{" "}
//                   </strong>
//                   , we specialize in simplifying complex procedures including{" "}
//                   <strong>
//                     company formation, visa processing, PRO services,{" "}
//                   </strong>{" "}
//                   and <strong> government documentation. </strong>
//                 </p>

//                 <p className="text-gray-600 text-[0.938rem]  md:text-lg leading-relaxed mb-5 md:mb-8">
//                   With our expanding network of{" "}
//                   <strong> over four branches across Dubai ,</strong> we bring
//                   together deep local expertise, professional guidance, and
//                   transparent processes to ensure our clients can establish and
//                   grow their businesses seamlessly. Our commitment is to deliver
//                   fast, reliable, and fully compliant services that empower
//                   sustainable success in the UAE's dynamic and competitive
//                   business landscape, making us your ideal partner for business
//                   growth and establishment in the region.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <MainButton
//                     bgColor="#49051E"
//                     text="  Read More"
//                     link="/about-us"
//                     className=""
//                     icon="external"
//                   />
//                   <MainButton
//                     bgColor="#8E1A3D"
//                     text="Enquire Now"

//                     className=""
//                     icon="external"
//                     Click={() => setShowModal(true)}

//                   />
//                 </div>
//               </div>

//               <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
//                 <div className="relative w-full max-w-md lg:max-w-lg h-[400px] sm:h-[500px] lg:h-[600px]">
//                   {/* Person Image */}
//                   <motion.div
//                     className="absolute bottom-0 left-0 w-[60%] sm:w-[55%] lg:w-[58%] h-auto z-10"
//                     animate={{
//                       y: [0, -20, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <img
//                       src="/assets/images/about/business-setup-dubai.png"
//                       alt="Business Setup Dubai"
//                       className="w-full h-auto object-contain"
//                     />
//                   </motion.div>

//                   {/* Background Image - Top layer */}
//                   <div className="absolute bottom-0 left-0 w-full h-auto z-20 pointer-events-none">
//                     <img
//                       src="/assets/images/about/business-setup-company-in-dubai.png"
//                       alt="Business Setup Company In Dubai"
//                       className="w-full h-auto object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>


//         </div>
//       </Container>
//       {showModal && (
//         <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
//       )}

//     </div>
//   );
// };

// export default AboutSection;
"use client";

import React, { useState } from "react";
import { ArrowRight, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { Container } from "../layout/Container";
import { motion, useMotionValue, useTransform } from "framer-motion";
import MainButton from "../button/main-button";
import LettersPullUpText from "../text/LettersPullUpText";
import ScheduleMeetingSection from "../meetingSchedule/ScheduleMeetingSection";
import ConsultationModal from "../common/ConsultationModal";

const AboutSection = () => {
  const [selectedDate, setSelectedDate] = useState(2);
  const [isSwiped, setIsSwiped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dates = [
    { day: 31, month: "May" },
    { day: 1, month: "We" },
    { day: 2, month: "We" },
    { day: 3, month: "We" },
    { day: 4, month: "We" },
  ];

  const x = useMotionValue(0);
  const background = useTransform(x, [0, 150], ["#5c1a2e", "#7a2240"]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 150) {
      setIsSwiped(true);

      setTimeout(() => setIsSwiped(false), 2000);
    } else {
      x.set(0);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Top Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-amber-200 via-orange-200 to-amber-100 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-32 left-20 w-48 h-48 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-orange-300 via-amber-200 to-yellow-200 rounded-full blur-2xl"></div>
      </div>

      {/* Top Decorative dots */}
      {/* <div className="absolute top-40 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-60"></div>
      <div className="absolute top-48 left-24 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50"></div>
      <div className="absolute top-56 left-16 w-1 h-1 bg-amber-500 rounded-full opacity-40"></div> */}

      <div
        className="absolute left-0 w-80 h-80 opacity-100"
        style={{ top: "55%", transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/about/left_element_about.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>

      <div
        className="absolute left-8 w-48 h-48 opacity-20"
        style={{ top: "62%", transform: "translateY(-50%)" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-300 to-yellow-300 rounded-full blur-xl"></div>
      </div>

      <Container>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-0 py-8 lg:pt-16">
          <section className="mb-16 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-6 lg:py-8">
              <div className="order-2 lg:order-1">
                <LettersPullUpText
                  text="Empowering Businesses. Simplifying Solutions."
                  className="text-[#49051E]"
                />
                {/* <h2 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-bold text-maroon-900 mb-6 lg:mb-8 leading-tight">
                  <span className="text-[#49051E]">
                  Driven by Vision, Built on Trust
                  </span>
                </h2> */}

                <p className="text-gray-600 text-[0.938rem]  md:text-lg leading-relaxed mb-5">
                  <strong>
                    {" "}
                    TMG Global Services LLC (Thameem Management Group Global
                    LLC)
                  </strong>{" "}
                  stands as a trusted
                  <strong>
                    {" "}
                    document-clearing and <a href="https://tmgdubai.ae/about-us" className="text-decoration-none">best business setup company in Dubai</a>,UAE{" "}
                  </strong>{" "}
                  offering comprehensive solutions for individuals,
                  entrepreneurs, and corporations throughout the UAE. Founded by{" "}
                  <strong>Mr. Thameem Aboobacker ,</strong> a pioneering figure
                  in{" "}
                  <strong>
                    {" "}
                    business consultancy and government services{" "}
                  </strong>
                  , we specialize in simplifying complex procedures including{" "}
                  <strong>
                    company formation, visa processing, PRO services,{" "}
                  </strong>{" "}
                  and <strong> government documentation. </strong>
                </p>

                <p className="text-gray-600 text-[0.938rem]  md:text-lg leading-relaxed mb-5 md:mb-8">
                  With our expanding network of{" "}
                  <strong> over four branches across Dubai ,</strong> we bring
                  together deep local expertise, professional guidance, and
                  transparent processes to ensure our clients can establish and
                  grow their businesses seamlessly. Our commitment is to deliver
                  fast, reliable, and fully compliant services that empower
                  sustainable success in the UAE's dynamic and competitive
                  business landscape, making us your ideal partner for business
                  growth and establishment in the region.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MainButton
                    bgColor="#49051E"
                    text="  Read More"
                    link="/about-us"
                    className=""
                    icon="external"
                  />
                  <MainButton
                    bgColor="#8E1A3D"
                    text="Enquire Now"

                    className=""
                    icon="external"
                    onClick={() => setShowModal(true)}

                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <img
                    src="/assets/images/about/business-setup-company-in-dubai.webp"
                    alt="Business Setup Company In Dubai"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>


        </div>
      </Container>
      {showModal && (
        <ConsultationModal isOpen={showModal} setIsOpen={setShowModal} />
      )}

    </div>
  );
};

export default AboutSection;
