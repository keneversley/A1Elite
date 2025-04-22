import React from "react";
import Hero from "../component/Home/Hero";
import HeroButtom from "../component/Home/HeroButtom";
import Shedule from "../component/Home/Shedule";
import BlackBanner from "../component/Home/BlackBanner";
import Paralax from "../component/Home/Paralax";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <HeroButtom />
      <Shedule />
      <BlackBanner />
      <Paralax />
    </div>
  );
};

export default Home;
