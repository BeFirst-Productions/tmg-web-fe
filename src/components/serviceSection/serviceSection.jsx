import React from 'react';
import MainButton from '../button/main-button';
import { Container } from '../layout/Container';


const ServicesSection = () => {
  const leftServices = [
    'Document Services',
    'Value-Added Services',
    'Value-Added Services'
  ];

  const rightServices = [
    'PRO Services',
    'Visa Services',
    'Government Services'
  ];

  return (
    <section className="relative lg:py-16 py-8">
      <Container>
        <div className="w-full relative z-10">
          {/* Heading and Description */}
          <div className="mb-12">
            <div className="keyboard mb-6 lg:mb-8 ">
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">O</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">U</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">R</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem] ml-4">S</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">E</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">R</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">V</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">I</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">C</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">E</span>
              <span className="key text-4xl sm:text-5xl lg:text-[3rem]">S</span>
            </div>

            {/* <LettersPullUpText text=" Our Services" className="text-[#49051E]" /> */}
            <p className="text-[0.938rem] md:text-lg">
              We provide comprehensive solutions to meet all your service needs with
              professionalism and excellence. Our team is dedicated to delivering
              outstanding results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Section */}
            <div className="space-y-4">
              {leftServices.map((service, index) => (
                <ServiceItem key={index} service={service} />
              ))}
            </div>

            {/* Right Section */}
            <div className="space-y-4 relative">
              {rightServices.map((service, index) => (
                <ServiceItem key={index} service={service} />
              ))}
            </div>
          </div>

          {/* More Services Button */}
          <div className="text-center flex justify-center">
            <MainButton
              text='More Services'
              link='/services'
              gradient="linear-gradient(90deg, rgba(14,14,14,1) 0%, rgba(73,5,30,1) 100%)"
            />
          </div>
        </div>

      </Container>
      {/* Right-side Image */}
      <div className="hidden lg:block absolute top-0 right-0 h-full ">
        <img
          src="/assets/images/lines/lines01.png"
          alt="Decorative"
          className="h-full object-cover w-full"
        />
      </div>
    </section>
  );
};

const ServiceItem = ({ service }) => {
  return (
    <div
      className="
        group 
        p-6  
        border-b-2 border-black 
        rounded-2xl 
        hover:text-white 
        transition-all duration-300 
        cursor-pointer 
        relative 
        overflow-hidden
      "
    >
      <div
        className="
          flex items-center gap-3 
          relative z-10 
          transition-transform duration-500 ease-out 
          group-hover:translate-x-2
        "
      >
        <svg
          className="
            w-8 h-8 
            text-[#49051E]
            opacity-0 
            transition-opacity duration-300 ease-out
            group-hover:opacity-100
            group-hover:text-white
          "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M7 7h10v10"
          />
        </svg>

        <span
          className="
            text-[1.200rem] lg:text-[1.875rem] font-bold 
            transition-transform duration-500 ease-out 
            group-hover:translate-x-2
          "
        >
          {service}
        </span>
      </div>

      <div
        className="
          absolute inset-0 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-300 
          rounded-2xl 
          -z-0
        "
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(142,26,61,1) 0%, rgba(40,7,17,1) 100%)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
};

export default ServicesSection;
