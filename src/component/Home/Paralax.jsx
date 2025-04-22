import React from "react";
import group from "../../assets/group.jpg";

const Paralax = () => {
  return (
    <div
      className="w-full h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${group})` }}
    ></div>
  );
};

export default Paralax;
