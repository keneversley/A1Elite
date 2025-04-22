import React from "react";
import Hero from "../component/Home/Hero";
import HeroButtom from "../component/Home/HeroButtom";
import Shedule from "../component/Home/Shedule";
import BlackBanner from "../component/Home/BlackBanner";
import Paralax from "../component/Home/Paralax";
import About from "../component/Home/About";
import Sponsor from "../component/Home/Sponsor";
import Leadership from "../component/Home/Leadership";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <HeroButtom />
      <Shedule />
      <BlackBanner />
      <About />
      <Paralax />
      <Sponsor />
      <Leadership />
    </div>
  );
};

export default Home;
