import React from "react";
import greenBg from "../../assets/greenbg.jpg";
import skyBg from "../../assets/skybg.jpg";
const Shedule = () => {
  return (
    <div className="bg-green-800 w-full mx-auto flex  justify-center items-center py-20 px-2">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-neutral-100 text-4xl font-bold">
          2025 NXTPRO PUMA CIRCUIT SCHEDULE
        </h1>
        <div className=" flex gap-10 flex-col md:flex-row mt-6">
          <div
            className="relative w-full h-[70vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${greenBg})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

            {/* Content */}
            <div className="relative font-semibold uppercase  text-center text-white p-6 rounded-lg space-y-3 pb-10 px-6 md:px-20">
              <h1 className="text-3xl font-semibold uppercase">
                nxtpro puma <br />
                circuit shedule!
              </h1>
              <h2 className="text-black text-2xl">Bout a bucket</h2>
              <h3 className="text-white text-xl">high school</h3>
              <p className="text-white text-xl">
                march 28th,boston,ma <br />
                april 18th-20th, tampa fl <br />
                may 2nd-4th,memphis,tn <br />
                may 23-25th, winston-salem,nc <br />
                july 10-13th,richmond,va <br />
                july 24-27th, florida
              </p>
            </div>
          </div>
          <div
            className="relative w-full h-[70vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${skyBg})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

            {/* Content */}
            <div className="relative font-semibold uppercase  text-center text-white p-6 rounded-lg space-y-3 pb-10 px-6 md:px-20">
              <h1 className="text-3xl font-semibold uppercase">
                nxtpro puma <br />
                circuit shedule!
              </h1>
              <h2 className="text-black text-2xl">Bout a bucket</h2>
              <h3 className="text-white text-xl">high school</h3>
              <p className="text-white text-2xl">
                april 18th-20th, tampa fl <br />
                may 23-25th, winston-salem,nc <br />
                july 10-13th,richmond,va <br />
                july 24-27th, florida
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shedule;
