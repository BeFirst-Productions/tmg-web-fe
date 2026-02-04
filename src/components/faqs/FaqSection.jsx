"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/Container";
import { faqsData } from "../../data/FaqData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(2);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const particlePositions = [
    { left: "10%", top: "35%" },
    { left: "25%", top: "60%" },
    { left: "40%", top: "45%" },
    { left: "55%", top: "25%" },
    { left: "70%", top: "70%" },
    { left: "85%", top: "40%" },
  ];

  return (
    <div className="min-h-screen md:min-h-fit bg-white py-16 relative overflow-hidden">
      <div
        className="absolute left-0 top-[30%] w-80 h-80 opacity-100"
        style={{ transform: "translateY(-50%)" }}
      >
        <img
          src="/assets/images/faqs/left_element_faq.png"
          alt="Professional woman with tablet"
          className="w-full h-auto rounded-2xl"
        />{" "}
      </div>

      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold text-center mb-12 bg-[linear-gradient(180deg,rgba(152,32,68,1)_0%,rgba(100,14,41,1)_100%)] bg-center bg-clip-text text-transparent"
          >
            Frequently Asking Questions
          </motion.h2>

          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="rounded-lg shadow-lg overflow-hidden"
                    style={{
                      backgroundColor:
                        openIndex === index ? "#C79A59" : "#941D43",
                    }}
                  >
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-6 text-white font-medium text-lg flex justify-between items-center group"
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="pr-8">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="flex-shrink-0"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.4, ease: "easeOut" },
                              opacity: { duration: 0.3, delay: 0.1 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3, ease: "easeIn" },
                              opacity: { duration: 0.2 },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 text-white text-base leading-relaxed bg-black bg-opacity-10"
                          >
                            {faq.answer}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Decorative glow effect */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -inset-0.5 rounded-lg blur-sm -z-10"
                        style={{
                          backgroundColor: "#C79A59",
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Fixed Floating particles effect */}
          {isMounted &&
            particlePositions.map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-40"
                initial={{ opacity: 0 }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, 10, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3 + (i % 3), // Use deterministic values
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: position.left,
                  top: position.top,
                }}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
