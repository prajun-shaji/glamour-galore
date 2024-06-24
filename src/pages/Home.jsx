import React from "react";
import Slider from "../components/Slider";
import TrendingProducts from "../components/TrendingProducts";
import FeaturedProducts from "../components/FeaturedProducts";
import Category from "../components/categories/Categories";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Slider />
      <TrendingProducts />
      <Category />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
};

export default Home;
