import React from "react";

const BlackBanner = () => {
  return (
    <div className="bg-black w-full mx-auto p-2 py-20">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-orange-100 font-semibold  uppercase italic text-center">
          A1 Elite Tampa is committed to nurturing student-athletes both in the game and in life,{" "}
          <br />
         while creating a supportive, family-like atmosphere.
        </h1>
        <h1 className="text-orange-100 font-semibold  uppercase italic text-center mt-6">
          Through the game of basketball, the program seeks to open doors for youth
           <br /> with a strong focus on academics, personal growth, and active involvement in the community.
        </h1>
      </div>
    </div>
  );
};

export default BlackBanner;
