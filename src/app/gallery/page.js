import BannerSection from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import ComingSoon from "@/components/ComingSoon";
import SmallBanner from "@/components/common/SmallBanner";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import { Navbar } from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <Navbar />
        <BannerSection
          title="Gallery"
          breadcrumbs={[
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]}
        />
        <Gallery />

        <Footer />
      </div>
    </>
  );
};

export default page;
