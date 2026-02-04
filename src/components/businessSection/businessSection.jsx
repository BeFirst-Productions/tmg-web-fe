
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import MainButton from "../button/main-button";
import LettersPullUpText from "../text/LettersPullUpText";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const BusinessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });

  const rectangles = [
    {
      id: 1,
      link: "/freezone-company-formation",
      title: "FREEZONE",
      image:
        "/assets/images/business-section/freezone-company-formation-dubai.png",
      color: "#8E8E8E",
      hoverColor: "#49051E",
      description:
        "TMG Global Services LLC offers expert Free Zone company formation services in Dubai, allowing investors full ownership and operational freedom. Our consultants assist with jurisdiction selection, approvals, licensing, and registration, ensuring a seamless setup. With detailed understanding of Free Zone regulations, we deliver efficient, compliant, and structured services that enable entrepreneurs to focus on growth and maximize opportunities within Dubai's business-friendly environment.",
    },
    {
      id: 2,
      link: "/mainland-company-formation",
      title: "MAINLAND",
      image:
        "/assets/images/business-section/mainland-company-formation-dubai.png",
      color: "#FFFFFF",
      hoverColor: "#49051E",
      description:
        "TMG Global Services LLC provides trusted mainland company formation services in Dubai, helping entrepreneurs establish fully licensed businesses. We manage trade name approvals, legal documentation, and licensing processes directly with government authorities. With in-depth local knowledge, our team ensures smooth registration and compliance, enabling businesses to operate efficiently and leverage Dubai's strong commercial infrastructure for growth and long-term success.",
    },
    {
      id: 3,
      link: "/offshore-company-formation",
      title: "OFFSHORE",
      image:
        "/assets/images/business-section/Offshore-company-formation-dubai.png",
      color: "#49051E",
      hoverColor: "#49051E",
      description:
        "TMG Global Services LLC specializes in offshore company formation in Dubai, providing investors with secure, compliant, and strategic solutions. We handle registration, documentation, and regulatory approvals efficiently, ensuring confidentiality and operational flexibility. Our team guides clients through the offshore setup process with precision and professionalism, helping businesses access international markets while benefiting from Dubai's favorable regulatory framework.",
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const getRectangleColor = (index, rectangle) => {
    if (activeIndex === index) return rectangle.hoverColor;
    if (rectangle.id === 2) return index === 1 ? "#FFFFFF" : "#49051E";
    if (rectangle.id === 1 && index === 0) return "#8E8E8E";
    if (rectangle.id === 3 && index === 2) return "#49051E";
    return rectangle.color;
  };

  const getBorderColor = (index, rectangle) => {
    if (rectangle.id === 2) return "border-[#49051E]";
    return "border-white";
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-auto py-8 lg:py-16 "
    >
      <Container>
        <div className="w-full ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8 lg:w-4/6">
              <div className="space-y-6">
                <LettersPullUpText
                  text="Establish Your Business in Opportunity"
                  className="text-[#49051E]"
                />
                {activeIndex === 0 ? (
                  <p className="text-[0.938rem] md:text-lg leading-relaxed transition-all duration-500 ease-in-out">
                    TMG Global Services LLC offers expert{" "}
                    <a
                      href="https://tmgdubai.ae/freezone-company-formation-dubai"
                      className="text-decoration-none"
                    >
                      <b>Freezone company formation in Dubai</b>,
                    </a>{" "}
                    allowing investors full ownership and operational freedom.
                    Our consultants assist with jurisdiction selection,
                    approvals, licensing, and registration, ensuring a seamless
                    setup. With detailed understanding of Free Zone regulations,
                    we deliver efficient, compliant, and structured services
                    that enable entrepreneurs to focus on growth and maximize
                    opportunities within Dubai's business-friendly environment.
                  </p>
                ) : activeIndex === 1 ? (
                  <p className="text-[0.938rem] md:text-lg leading-relaxed transition-all duration-500 ease-in-out">
                    TMG Global Services LLC provides trusted
                    <a
                      href="https://tmgdubai.ae/mainland-company-formation-dubai"
                      className="text-decoration-none"
                    >
                      <b> mainland company formation in Dubai</b>,
                    </a>{" "}
                    helping entrepreneurs establish fully licensed businesses.
                    We manage trade name approvals, legal documentation, and
                    licensing processes directly with{" "}
                    <a href="https://ded.ae" className="text-decoration-none">
                      <b>government authorities</b>
                    </a>
                    . With in-depth local knowledge, our team ensures smooth
                    registration and compliance, enabling businesses to operate
                    efficiently and leverage Dubai's strong commercial
                    infrastructure for growth and long-term success.
                  </p>
                ) : (
                  <p className="text-[0.938rem] md:text-lg leading-relaxed transition-all duration-500 ease-in-out">
                    TMG Global Services LLC specializes in{" "}
                    <a
                      href="https://tmgdubai.ae/offshore-company-formation-dubai"
                      className="text-decoration-none"
                    >
                      <b>offshore company formation in Dubai</b>,
                    </a>{" "}
                    providing investors with secure, compliant, and strategic
                    solutions. We handle registration, documentation, and
                    regulatory approvals efficiently, ensuring confidentiality
                    and operational flexibility. Our team guides clients through
                    the offshore setup process with precision and
                    professionalism, helping businesses access international
                    markets while benefiting from Dubai's favorable regulatory
                    framework.
                  </p>
                )}
              </div>
            </div>

            {/* Right Side - Rectangles */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end w-full overflow-y-auto sm:overflow-x-auto lg:overflow-visible px-2 sm:px-4 no-scrollbar">
              {rectangles.map((rectangle, index) => (
                <Link key={rectangle.id} href={rectangle.link}>
                  <div
                    key={rectangle.id}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => handleMouseEnter(index)}
                    className={`relative group cursor-pointer flex-shrink-0 w-full sm:w-auto`}
                  >
                    <div
                      className={`relative overflow-hidden transition-all duration-700 ease-out rounded-2xl shadow-2xl transform group-hover:scale-[1.03] border-2 border-opacity-20 backdrop-blur-sm
                      ${getBorderColor(index, rectangle)}
                      h-16 sm:h-[260px] lg:h-[400px]
                      ${activeIndex === index
                          ? "sm:w-[380px] lg:w-[500px] h-48 sm:h-[260px] lg:h-[400px]"
                          : "sm:w-20 lg:w-28 h-16 sm:h-[260px] lg:h-[400px]"
                        }`}
                      style={{
                        background: getRectangleColor(index, rectangle),
                      }}
                    >
                      {/* Collapsed Text */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 ${activeIndex === index
                          ? "opacity-0 scale-90"
                          : "opacity-100 scale-100"
                          }`}
                      >
                        <div className="text-center">
                          <span
                            className={`font-bold text-xl sm:text-2xl lg:text-[40px] tracking-wider sm:hidden ${rectangle.id === 2 && index === 1
                              ? "text-[#49051E]"
                              : "text-white"
                              }`}
                          >
                            {rectangle.title}
                          </span>
                          <span
                            className={`font-bold text-xl sm:text-2xl lg:text-[40px] tracking-wider hidden sm:inline [writing-mode:vertical-rl] [text-orientation:mixed] ${rectangle.id === 2 && index === 1
                              ? "text-[#49051E]"
                              : "text-white"
                              }`}
                          >
                            {rectangle.title}
                          </span>
                        </div>
                      </div>

                      {/* Expanded Image */}
                      <div
                        className={`absolute w-full h-full inset-0 transition-all duration-700 ${activeIndex === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                          }`}
                      >
                        <div className="w-full h-full relative">
                          <Image
                            src={rectangle.image}
                            alt={rectangle.title}
                            fill
                            className="object-fit"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                          />
                        </div>

                        {/* Button */}
                        <div className="absolute bottom-3 right-6 sm:right-8">
                          <MainButton
                            text="View more"
                            icon="arrow"
                            link={rectangle.link}
                          />
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </motion.div>
  );
};

export default BusinessSection;
