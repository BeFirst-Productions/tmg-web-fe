"use client";

import { Container } from "../layout/Container";


 export default function Map() {
  const position = [53.4072, -2.9917]; // Liverpool

  return (
      <div className="w-full pb-32 lg:pt-16 pt-8 flex justify-center items-center ">
        <Container>
      <div className="w-full  border border-blue-300 shadow-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28865.60141693132!2d55.36545222397547!3d25.26385073970584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dcc71346669%3A0x3376a6c40cb3577a!2sAl%20Twar%20Centre!5e0!3m2!1sen!2sin!4v1760765392272!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] border-0 "
        ></iframe>
      </div>
   </Container>
    </div>
  );
}


