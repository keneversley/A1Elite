
import React from "react";

const Paralax = () => {
  return (
    <div
      className="w-full bg-center bg-cover flex items-center justify-center relative"
      style={{
        backgroundImage: `url(https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/group.jpg)`,
        backgroundAttachment: "scroll",
        height: "60vh",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional dark overlay */}

      <div className="text-white text-center px-4 z-10">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-md">
          Welcome to A1 Elite
        </h2>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
          Empowering youth through basketball
        </p>
      </div>
    </div>
  );
};

export default Paralax;


