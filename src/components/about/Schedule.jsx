"use client"
import { useState, useEffect } from 'react'
import ScheduleMeetingSection from '../meetingSchedule/ScheduleMeetingSection'
import LettersPullUpText from '../text/LettersPullUpText'
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Container } from '../layout/Container';

const Schedule = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);


  const contentCards = [
    {
      id: 1,
      image: '/assets/images/Uae-national-day-2025.webp',
      title: 'UAE National Day 2025 holiday',
      description: 'Eid Al Etihad expected on December 2–3, with the chance of an extended long weekend for residents'
    },
    // {
    //   id: 2,
    //   image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    //   title: 'Document Clearance',
    //   description: 'Complete document verification and approval services for your business'
    // },

  ];

  // Auto carousel effect
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % contentCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, contentCards.length]);

  const goToCard = (index) => {
    setCurrentCardIndex(index);
    setAutoPlay(false);
  };

  return (
    <>
      <Container>
        {/* Top Hero Section */}
        <section className="px-4 sm:px-6 lg:px-0 pt-8 lg:pt-12 mb-8 lg:mb-8 flex justify-center items-center text-center ">
          <div className="bg-transparent">
            <LettersPullUpText
              text="Schedule Meeting"
              className="text-[#49051E] w-full lg:w-full"
            />
            {/* <p className="text-gray-700 font-semibold mb-4 text-[0.938rem] md:text-lg">
            Your Path to UAE Business Ownership
          </p> */}
            <p className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed max-w-3xl">
              Take the first step toward establishing your business in the UAE
              with TMG Global. Our experts guide you through every stage from
              company setup and licensing to document clearance and approvals
              making your business journey seamless and hassle-free.
            </p>
          </div>
        </section>

        {/* Main Grid Section */}
        <section className="grid lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-0 py-8 lg:pb-16">
          {/* Left Column - Carousel Cards */}
          <div className="lg:col-span-1">
            <div className="relative h-96 bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Carousel Container with Image as Background */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={contentCards[currentCardIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  {/* Background Image */}
                  <img
                    src={contentCards[currentCardIndex].image}
                    alt={contentCards[currentCardIndex].title}
                    className="w-full h-full object-cover absolute inset-0"
                  />

                  {/* Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`content-${contentCards[currentCardIndex].id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {contentCards[currentCardIndex].title}
                        </h4>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {contentCards[currentCardIndex].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Dots Indicator */}
                    <div className="flex gap-2 mt-4">
                      {contentCards.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => goToCard(index)}
                          animate={{
                            scale: index === currentCardIndex ? 1.2 : 1,
                            backgroundColor: index === currentCardIndex ? '#ffffff' : 'rgba(255,255,255,0.5)'
                          }}
                          className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Middle Column - Support CTA */}
          <div className="bg-[#8E1A3D] rounded-2xl px-8 py-10 lg:px-5 lg:py-6 xl:px-8 xl:py-10 shadow-xl text-white flex flex-col justify-betwee h-fit md:h-96">
            <div>
              <h3 className="text-2xl md:text-2xl xl:text-3xl font-bold mb-4 md:mb-8 lg:mb-4 xl:mb-8">
                Hurry? Get Support
                <br />
                Right Away!
              </h3>
              <p className="text-white/90 mb-6 md:mb-8 lg:mb-4 xl:mb-8 text-[0.938rem] md:text-lg lg:text-base xl:text-lg font-normal">
                Short on time? Connect with our team directly via WhatsApp or
                call for immediate support. We're here to answer your questions
                and guide you through your business setup efficiently.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3"
            >
              {/* Chat / WhatsApp */}
              <a
                href="https://wa.me/971545267777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <motion.button
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 lg:px-4 lg:py-2 xl:px-6 xl:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Now
                </motion.button>
              </a>

              {/* Call */}
              <a
                href="tel:+971545267777"
                aria-label="Call +971 54 526 7777"
              >
                <motion.button
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.button>
              </a>

            </motion.div>
          </div>

          {/* Right Column - Schedule Meeting */}
          <div className="bg-[#C79A59] rounded-2xl px-6 py-10 lg:px-5 lg:py-6 xl:px-8 xl:py-10 shadow-xl text-white flex flex-col justify-between h-fit md:h-96">
            <p className="text-[#000000] mb-6 lg:mb-4 xl:mb-6 text-lg  leading-relaxed font-normal">
              Plan your meeting with ease. Select a date that suits you, and
              we'll make sure an expert is ready to assist you with your
              business setup in the UAE.
            </p>

            <ScheduleMeetingSection />
          </div>
        </section>
      </Container>

    </>

  )
}

export default Schedule