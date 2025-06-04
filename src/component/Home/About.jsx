import React from "react";
import basketBal from "../../assets/basketbal.png";
import location from "../../assets/location.png";
import jersey from "../../assets/jersey.png";
const About = () => {
  return (
    <div className="bg-white w-full py-20 p-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-20">
        <div className=" flex flex-col gap-6 justify-center items-center">
          {/* <img className="w-24 h-24" src={basketBal} alt="" /> */}
          <img
  className="w-32 h-24 object-contain rounded-md shadow-md"
  src={basketBal}
  alt="Basketball"
/>
          <h1 className="text-black uppercase font-medium text-center">
            who we are
          </h1>
          <p className="text-gray-600 text-sm text-center">
          A1 Elite is a family-run grassroots travel basketball program founded in 2023. We offer competitive teams for boys ages 13U to 17U at the national, regional, and local levels. Our focus is on player development through structured training, skill-building, and character education. A1 Elite is dedicated to creating a positive, disciplined environment that helps athletes grow on and off the court.
 
          </p>
        </div>
        <div className=" flex flex-col gap-6 justify-center items-center">
          <img className="w-24 h-24" src={jersey} alt="" />
          <h1 className="text-black uppercase font-medium text-center">
            FOUNDER
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Nelson Agholor, is a Nigerian-American professional football wide receiver. He played college football at USC and was drafted in the first round of the 2015 NFL Draft by the Philadelphia Eagles. Agholor spent five seasons with the Eagles and helped them win Super Bowl LII. He has also played for the Las Vegas Raiders, New England Patriots, and Baltimore Ravens.
          </p>
        </div>
        <div className=" flex flex-col gap-6 justify-center items-center">
          <img className="w-24 h-24" src={location} alt="" />
          <h1 className="text-black uppercase font-medium text-center">
            WE ARE HERE
          </h1>
          <p className="text-gray-600 text-sm text-center">
           A1 Elite Tampa is an AAU-affiliated travel basketball program partnered with the Our Kids Our Responsibility non-profit organization. It serves youth athletes in Tampa, St. Petersburg, and nearby areas. The program focuses on competitive play and skill development. Players participate in tournaments locally, across the South, and along the East Coast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
