'use client';

import Image from 'next/image';
import { Container } from '../layout/Container';
import { useState, useEffect } from 'react';

const AboutUsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  // 🟢 Run the animation automatically on first load
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 2000); // reset after animation duration
    return () => clearTimeout(timer);
  }, []);

  // 🟢 Function to trigger animation again (hover)
  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 2000);
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-0 py-8 lg:py-16 mb-10 overflow-hidden">
      {/* Decorative Left Element */}
     {/* Decorative Left Element (fixed for all screens) */}
    <div className="absolute  left-0 bottom-0 w-80 h-80 opacity-100 z-0">
    <img
      src="/assets/images/about/left_element.png"
      alt="Professional woman with tablet"
      className="w-full h-full object-contain opacity-80"
    />
  </div>


      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content Section */}
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl lg:text-[3rem] text-[#49051E] mb-6 lg:mb-8 leading-tight font-bold">
              About Us
            </h2>
            <div className="text-gray-600 text-[0.938rem] md:text-lg font-normal leading-relaxed">
              <p>
                TMG Global Services LLC (Thameem Management Group Global LLC) is a leading business setup and document clearing company in Dubai, providing complete, end-to-end solutions for individuals, entrepreneurs, and corporations across the UAE.
              </p>
              <p>
                Founded by Mr. Thameem Aboobacker, a visionary leader and pioneer in business consultancy and government services, TMG Global was created with one mission — to simplify complex business and government processes and empower people to achieve success.
              </p>
              <p>
                At TMG Global, we combine local expertise, global perspective, and customer-first service — ensuring fast, compliant, and reliable business solutions tailored to your needs.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 relative z-10">
            {/* Corner Design Container */}
            <div className="absolute -top-4 -left-4 w-72 h-52 pointer-events-none">
              {/* Horizontal Line */}
              <div
                className={`absolute top-2 left-2 h-0.5 bg-[#C79A59] transition-all duration-700 ease-in-out ${
                  animate ? 'w-72' : 'w-20'
                }`}
              ></div>

              {/* Vertical Line */}
              <div
                className={`absolute top-2 left-2 w-0.5 bg-[#C79A59] transition-all duration-700 ease-in-out delay-150 ${
                  animate ? 'h-52' : 'h-20'
                }`}
              ></div>

              {/* Moving Circle on Horizontal Line */}
              <div
                className={`absolute top-[0.4rem] transition-all duration-700 ease-in-out ${
                  animate ? 'left-[17.5rem]' : 'left-[5.3rem]'
                }`}
              >
                <div className="w-4 h-4 bg-[#49051E] rounded-full border-2 border-white shadow-lg transform -translate-y-1/2"></div>
              </div>

              {/* Moving Circle on Vertical Line */}
              <div
                className={`absolute left-[0.4rem] transition-all duration-700 ease-in-out delay-150 ${
                  animate ? 'top-[12.5rem]' : 'top-[5.3rem]'
                }`}
              >
                <div className="w-4 h-4 bg-[#49051E] rounded-full border-2 border-white shadow-lg transform -translate-x-1/2"></div>
              </div>
            </div>

            {/* Main Image */}
            <div
              className="relative overflow-hidden ml-6 mt-6 transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => {
                setIsHovered(true);
                triggerAnimation();
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/assets/images/about/about02.png"
                alt="TMG Global Team"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;
