import React from "react";
import Blogs from "../Blogs/Blogs";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import NewProducts from "../NewProducts/NewProducts";
import TopProductSection from "../TopProduct/TopProductSection";

export default function Home() {
  return (
    <>
      <Header />
      <HomeCarousel />
      <TopProductSection />
      <NewProducts />
      <FeaturedProducts />
      <Blogs />
      <Footer />
    </>
  );
}
