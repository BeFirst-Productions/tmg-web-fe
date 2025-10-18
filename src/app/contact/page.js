import BannerSection from "@/components/banner/Banner";
import ContactUs from "@/components/contact/Contact";
import Map from "@/components/contact/Map";
import Footer from "@/components/footer/Footer";

import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar/>
        <BannerSection 
        title="Contact"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ]}/>
 <ContactUs/>
 <Map/>
      <Footer/>
      </div>
    </>
  );
};

export default page;
