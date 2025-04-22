import React from "react";
import basketBal from "../../assets/basketbal.png";
import location from "../../assets/location.png";
import jersey from "../../assets/jersey.png";
const About = () => {
  return (
    <div className="bg-white w-full py-20 p-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-20">
        <div className=" flex flex-col gap-6 justify-center items-center">
          <img className="w-24 h-24" src={basketBal} alt="" />
          <h1 className="text-black uppercase font-medium text-center">
            who we are
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Bout A Bucket is a family-run grassroots travel basketball program
            founded in 2024. Bout A Bucket offers national and regional
            basketball teams for Boys 8U - 17U and Girls 14U - 17U. We also have
            summer camps, training and development programs, and fall and winter
            league teams.
          </p>
        </div>
        <div className=" flex flex-col gap-6 justify-center items-center">
          <img className="w-24 h-24" src={jersey} alt="" />
          <h1 className="text-black uppercase font-medium text-center">
            FOUNDER
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Bout A Bucket was founded by Damari Parris, a former division 1
            basketball player at Western Kentucky, Eastern Michigan & Prairie
            View A & M. He has played against and with top NBA players and
            collegiate athletes, and his most notable performance was scoring 40
            pts. against Oak Hill Academy.
          </p>
        </div>
        <div className=" flex flex-col gap-6 justify-center items-center">
          <img className="w-24 h-24" src={location} alt="" />
          <h1 className="text-black uppercase font-medium text-center">
            WE ARE HERE
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Bout A Bucket is an AAU affiliated non-profit organization servicing
            Charlotte, North Carolina and the surrounding areas. Tournaments are
            held locally and mostly on the East Coast and surrounding cities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
