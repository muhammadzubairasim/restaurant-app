import React from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      {" "}
      <Navbar />
      {/* Hero Section  */}
      <HeroCarousel />
      <Products/>
    </div>
  );
};

export default Home;
