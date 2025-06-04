import React from "react";
import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg";

const Sponsor = () => {
  return (
    <div className="bg-black py-10 p-2">
      <div className="max-w-6xl mx-auto">
        {/* <h1 className="text-orange-100 text-xl uppercase font-semibold">
          A1 ELITE TAMPA IS PROUD TO WORK WITH THESE ORGANIZATIONS
        </h1> */}
        <h1 className="text-orange-100 text-xl uppercase font-semibold text-center">
  A1 ELITE TAMPA IS PROUD TO WORK WITH THESE ORGANIZATIONS
</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 justify-items-center">
          <div>
            <img className="w-40 h-40" src={logo1} alt="" />
          </div>
          <div>
            <img className="w-40 h-40" src={logo2} alt="" />
          </div>
          <div>
            <img className="w-40 h-40" src={logo1} alt="" />
          </div>
          <div>
            <img className="w-40 h-40" src={logo2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
