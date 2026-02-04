// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { generateWhatsAppMessage } from '../common/WhatsAppMessage';
// import { Container } from '../layout/Container';

// export default function GetInTouch() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const containerRef = useRef(null);
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);
//   const formFieldsRef = useRef(null);

//   const containerInView = useInView(containerRef, { once: false, amount: 0.3 });
//   const leftInView = useInView(leftRef, { once: false, amount: 0.4 });
//   const rightInView = useInView(rightRef, { once: false, amount: 0.4 });
//   const formFieldsInView = useInView(formFieldsRef, { once: false, amount: 0.2 });

//   const leftControls = useAnimation();
//   const rightControls = useAnimation();
//   const formFieldControls = useAnimation();

//   useEffect(() => {
//     rightControls.start(rightInView ? { opacity: 1, x: 0, transition: { duration: 0.8 } } : { opacity: 0, x: 100 });
//   }, [rightInView, rightControls]);

//   useEffect(() => {
//     leftControls.start(leftInView ? { opacity: 1, x: 0, scaleX: 1, transition: { duration: 0.9, delay: 0.2 } } : { opacity: 0, x: 150, scaleX: 0 });
//   }, [leftInView, leftControls]);

//   useEffect(() => {
//     formFieldControls.start(formFieldsInView ? 'visible' : 'hidden');
//   }, [formFieldsInView, formFieldControls]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = generateWhatsAppMessage(formData);
//     const phoneNumber = '971545267777'; 
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const fieldVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1 + 0.5, duration: 0.6 }
//     })
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15 + 0.4, duration: 0.6 }
//     })
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="w-full flex items-center justify-center py-4 sm:py-6 lg:py-8"
//     >
//       <Container>

//       <div className="flex flex-col lg:flex-row w-full max-w-[1083px] mx-auto overflow-hidden rounded-2xl shadow-sm"> 

//         {/* Left Section */}
//         <motion.div 
//           ref={leftRef}
//           initial={{ opacity: 0, x: 150, scaleX: 0 }}
//           animate={leftControls}
//           style={{ originX: 1 }}
//           className="relative bg-[#941D43]/70 w-full lg:w-[611px] h-[400px] sm:h-[480px] lg:h-[573px] px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16  items-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden hidden lg:flex"
//         >
//           <div 
//             className="absolute inset-0 bg-cover bg-center opacity-30"
//             style={{
//               backgroundImage: `url('/assets/images/contact/bg-Img.png')`,
//               backgroundBlendMode: 'multiply'
//             }}
//           />
//           <div className="relative z-10 w-full">
//             <motion.h2 
//               custom={0}
//               variants={textVariants}
//               initial="hidden"
//               animate={leftInView ? "visible" : "hidden"}
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight"
//             >
//               Your Next Move, Perfected with TMG
//             </motion.h2>

//             <motion.p 
//               custom={1}
//               variants={textVariants}
//               initial="hidden"
//               animate={leftInView ? "visible" : "hidden"}
//               className="text-white text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed mb-3"
//             >
//               At TMG, we’re more than just a service provider — we’re your strategic partner in growth. Whether you’re 
//               setting up a new business in the UAE, managing corporate operations, or seeking expert support in media and 
//               marketing, our dedicated team is here to make every step seamless.
//             </motion.p>

//             <motion.p 
//               custom={2}
//               variants={textVariants}
//               initial="hidden"
//               animate={leftInView ? "visible" : "hidden"}
//               className="text-white text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed"
//             >
//               From company formation, visa services, and document clearing to branding, creative production, and digital 
//               strategy, we offer complete solutions tailored to your goals.
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* Right Section - Contact Form */}
//         <motion.div 
//           ref={rightRef}
//           initial={{ opacity: 0, x: 100 }}
//           animate={rightControls}
//           className="bg-black w-full lg:w-[472px] h-[500px] sm:h-[540px] lg:h-[573px] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 flex items-center justify-center rounded-b-2xl rounded-t-2xl lg:rounded-r-2xl lg:rounded-bl-none lg:rounded-tl-none"
//         >
//           <div className="w-full max-w-md">
//             <motion.h3 
//               custom={0}
//               variants={textVariants}
//               initial="hidden"
//               animate={rightInView ? "visible" : "hidden"}
//               className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold text-white mb-5 sm:mb-6 lg:mb-8"
//             >
//               GET IN TOUCH
//             </motion.h3>

//             <div ref={formFieldsRef} className="space-y-3 sm:space-y-4 lg:space-y-5">
//               {['fullName', 'phone', 'email', 'message'].map((field, i) => (
//                 <motion.div
//                   key={field}
//                   custom={i}
//                   variants={fieldVariants}
//                   initial="hidden"
//                   animate={formFieldsInView ? "visible" : "hidden"}
//                 >
//                   {field !== 'message' ? (
//                     <>
//                       <label className="block text-white text-xs sm:text-sm mb-1.5 sm:mb-2 capitalize">
//                         {field === 'fullName' ? 'Full Name' : field === 'phone' ? 'Phone Number' : 'Email'}
//                       </label>
//                       <input
//                         type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
//                         name={field}
//                         value={formData[field]}
//                         onChange={handleChange}
//                         className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
//                       />
//                     </>
//                   ) : (
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Type Your Message"
//                       rows={3}
//                       className="w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition resize-none"
//                     />
//                   )}
//                 </motion.div>
//               ))}

//               <motion.button
//                 custom={4}
//                 variants={fieldVariants}
//                 initial="hidden"
//                 animate={formFieldsInView ? "visible" : "hidden"}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSubmit}
//                 className="w-full bg-[#C79A59] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full hover:bg-[#B8894D] transition flex items-center justify-center gap-2 mt-4 sm:mt-5 lg:mt-6"
//               >
//                 Submit
//                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//       </Container>

//     </div>
//   );
// }

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { generateWhatsAppMessage } from '../common/WhatsAppMessage';
import { Container } from '../layout/Container';

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const formFieldsRef = useRef(null);

  const containerInView = useInView(containerRef, { once: false, amount: 0.3 });
  const leftInView = useInView(leftRef, { once: false, amount: 0.4 });
  const rightInView = useInView(rightRef, { once: false, amount: 0.4 });
  const formFieldsInView = useInView(formFieldsRef, { once: false, amount: 0.2 });

  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const formFieldControls = useAnimation();

  useEffect(() => {
    rightControls.start(rightInView ? { opacity: 1, transition: { duration: 0.8 } } : { opacity: 0 });
  }, [rightInView, rightControls]);

  useEffect(() => {
    leftControls.start(leftInView ? { opacity: 1, transition: { duration: 0.9, delay: 0.2 } } : { opacity: 0 });
  }, [leftInView, leftControls]);

  useEffect(() => {
    formFieldControls.start(formFieldsInView ? 'visible' : 'hidden');
  }, [formFieldsInView, formFieldControls]);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[\d\s-]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = generateWhatsAppMessage(formData);
    const phoneNumber = '971545267777';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.5, duration: 0.6 }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 + 0.4, duration: 0.6 }
    })
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-4 sm:py-6 lg:py-8"
    >
      <Container>

        <div className="flex flex-col lg:flex-row w-full max-w-[1083px] mx-auto overflow-hidden rounded-2xl shadow-sm">

          {/* Left Section */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0 }}
            animate={leftControls}
            className="relative bg-[#941D43]/70 w-full lg:w-[611px] min-h-[400px] sm:min-h-[480px] lg:min-h-[573px] px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16  items-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden hidden lg:flex"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url('/assets/images/contact/get-in-touch.webp')`,
                backgroundBlendMode: 'multiply'
              }}
            />
            <div className="relative z-10 w-full">
              <motion.h2
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate={leftInView ? "visible" : "hidden"}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight"
              >
                Your Next Move, Perfected with TMG
              </motion.h2>

              <motion.p
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate={leftInView ? "visible" : "hidden"}
                className="text-white text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed mb-3"
              >
                At TMG, we’re more than just a service provider — we’re your strategic partner in growth. Whether you’re
                setting up a new business in the UAE, managing corporate operations, or seeking expert support in media and
                marketing, our dedicated team is here to make every step seamless.
              </motion.p>

              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate={leftInView ? "visible" : "hidden"}
                className="text-white text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed"
              >
                From company formation, visa services, and document clearing to branding, creative production, and digital
                strategy, we offer complete solutions tailored to your goals.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0 }}
            animate={rightControls}
            className="bg-black w-full lg:w-[472px] min-h-[500px] sm:min-h-[540px] lg:min-h-[573px] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 flex items-center justify-center rounded-b-2xl rounded-t-2xl lg:rounded-r-2xl lg:rounded-bl-none lg:rounded-tl-none"
          >
            <div className="w-full max-w-md">
              <motion.h3
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate={rightInView ? "visible" : "hidden"}
                className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold text-white mb-5 sm:mb-6 lg:mb-8"
              >
                GET IN TOUCH
              </motion.h3>

              <div ref={formFieldsRef} className="space-y-3 sm:space-y-4 lg:space-y-5">
                {['fullName', 'phone', 'email', 'message'].map((field, i) => (
                  <motion.div
                    key={field}
                    custom={i}
                    variants={fieldVariants}
                    initial="hidden"
                    animate={formFieldsInView ? "visible" : "hidden"}
                  >
                    {field !== 'message' ? (
                      <>
                        <label className="block text-white text-xs sm:text-sm mb-1.5 sm:mb-2 capitalize">
                          {field === 'fullName' ? 'Full Name' : field === 'phone' ? 'Phone Number' : 'Email'}
                        </label>
                        <input
                          type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg bg-white text-black focus:outline-none focus:ring-2 transition ${errors[field] ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-yellow-500'
                            }`}
                        />
                        {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
                      </>
                    ) : (
                      <>
                        <label className="block text-white text-xs sm:text-sm mb-1.5 sm:mb-2 capitalize">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Type Your Message"
                          rows={3}
                          className={`w-full px-3 py-2 sm:px-4 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 transition resize-none ${errors.message ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-yellow-500'
                            }`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </>
                    )}
                  </motion.div>
                ))}

                <motion.button
                  custom={4}
                  variants={fieldVariants}
                  initial="hidden"
                  animate={formFieldsInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="w-full bg-[#C79A59] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-full hover:bg-[#B8894D] transition flex items-center justify-center gap-2 mt-4 sm:mt-5 lg:mt-6"
                >
                  Submit
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

    </div>
  );
}
