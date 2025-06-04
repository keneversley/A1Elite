import React from "react";
import player from "../../assets/player.jpg";
import play from "../../assets/play.jpg";
const Donatecontent = () => {
  return (
    <div className="bg-purple-800 w-full">
      <div className="max-w-6xl mx-auto p-2 py-10">
        <div className="flex w-full flex-col md:flex-row bg-black">
          {/* <div className="flex-1">
            <img className="w-full " src={play} alt="" />
          </div> */}
          <div className="flex-1">
  <img
    className="w-full"
    src="https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/donate.jpeg"
    alt="Donate"
  />
</div>
          <div className="flex-1 text-xs text-gray-300 p-10">
            <p className="">
              SUPPORT THE YOUTH, SUPPORT A LEGACY, BUILD A FAMILY
            </p>
            <h1 className="text-2xl uppercase text-orange-50 my-6">DONATE</h1>
            <p>
              Thank you for your interest in the A1 ELITE TAMPA  organization. As
              a 501 c3 and AAU affiliated program, we sincerely appreciate any
              monetary offering to aid in supporting the youth and those in
              need. Your kindness can change lives! SUPPORT THE YOUTH
            </p>
            <button className="bg-[#F97316] mt-6 hover:bg-[#e2792d] text-white font-medium px-6 py-3 uppercase tracking-wider">
              Support The Youth
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row-reverse mt-4 bg-black">
          <div className="flex-1">
            <img className="w-full " src={player} alt="" />
          </div>
          {/* <div className="flex-1">
  <img
    className="w-full"
    src="https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/donate.jpeg"
    alt="Donate"
  />
</div> */}
          <div className="flex-1  text-xs text-gray-300 p-10">
            <p className="">COMMUNITY INVOLVEMENT</p>
            <h1 className="text-2xl uppercase text-orange-50 my-6">
              SPONSORSHIP
            </h1>
            <p>
              Engage with a thriving community of fans, athletes, and families
              at our high-profile tournaments to ensure maximum exposure.
              Sponsorship benefits include logo placement, recognition, VIP
              access, outreach initiates & more. Please email
              Ourkidsourresponsibility@gmail.com to receive sponsorship packages.
            </p>
            <button className="bg-[#F97316] mt-6  hover:bg-[#e2792d] text-white font-medium px-6 py-3 uppercase tracking-wider">
              Contact US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donatecontent;
