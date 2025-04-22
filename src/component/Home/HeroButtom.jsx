import React from "react";
import basket from "../../assets/basket.jpg";
const HeroButtom = () => {
  return (
    <div className="bg-black w-full p-6 md:p-20">
      <div className="bg-white max-w-4xl mx-auto flex items-center justify-center p-6">
        <div className="w-1/3">
          <img className="" src={basket} alt="" />
        </div>
        <div className="w-full justify-center items-center">
          <h1 className="text-black font-semibold text-3xl">
            Join the NXTPRO Puma Hoops Circuit with us!
          </h1>
          <p className="text-gray-600 text-sm mt-4">
            We are thrilled to announce our official partnership with PUMA as we
            take our AAU program to the next level by joining the NXTPRO PUMA
            Hoops circuit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroButtom;
