import React from "react";
const FooterTop = () => {
  return (
    <div
      className="relative w-full h-[70vh] bg-no-repeat bg-cover bg-center flex items-center justify-center mt-10"
      style={{ backgroundImage: `url(https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/shooting.jpg)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className=" max-w-4xl mx-auto relative z-10 bg-purple-800 text-center text-white p-6 rounded-lg space-y-2 py-10">
        <h1 className="text-4xl md:text-3xl font-bold mb-4 uppercase">
          ARE YOU A1 ELITE TAMPA  CERTIFIED?
        </h1>
        <p className="text-orange-50 text-sm ">
          A1 ELITE TAMPA  is built on family, player development and fostering a
          winning culture that emphasizes values on and off the court. In just
          our 2nd year, we have proudly partnered with PUMA Hoops and compete
          nationally on the NXTPRO Puma Circuit.
        </p>
        <button className="bg-black hover:bg-[#1b0f07] text-white font-medium px-6 py-3 uppercase tracking-wider">
          Contact us now to learn more!
        </button>
      </div>
    </div>
  );
};

export default FooterTop;

