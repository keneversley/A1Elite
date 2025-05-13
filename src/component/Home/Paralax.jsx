import React from "react";
import group from "../../assets/group.jpg";

const Paralax = () => {
  return (
    <div
      className="w-full h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/group.jpg)` }}
    ></div>
  );
};

export default Paralax;
