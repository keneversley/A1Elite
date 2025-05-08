import React from "react";
import first from "../../assets/firstImage.jpg";

import second from "../../assets/second.jpg";

import third from "../../assets/third.jpg";
const Leadership = () => {
  return (
    <div className="w-full bg-white  mt-16 p-2">
      <div className="max-w-6xl mx-auto ">
        <h1 className="uppercase text-black font-medium text-xl">LEADERSHIP</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <img src={first} alt="" />
            <div className="flex flex-col justify-center items-center mt-6">
              <p className="text-gray-600  text-center  ">
                <span className="text-xl text-black  uppercase">
                  DAMARI PARRIS-
                </span>{" "}
                President, Lead <br /> Coach
              </p>

              <p className="text-center text-gray-600 text-sm mt-4">
                Damari's D1 basketball journey is the epitome of resilience and
                determination. He imparts his passion for basketball as a
                Physical Education and Health Teacher at Wilson STEM Academy in
                Charlotte, NC
              </p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <img src={second} alt="" />
            <div className="flex flex-col justify-center items-center mt-6">
              <p className="text-gray-600  text-center  ">
                <span className="text-xl text-black  uppercase">
                  KAOS PARRIS-
                </span>{" "}
                Vice President & <br /> Treasurer
              </p>

              <p className="text-center text-gray-600 text-sm mt-4">
                Coach K is the patriarch of the Parris Family and a true
                basketball veteran. With over 20 years of coaching experience in
                AAU, Coach K brings a wealth of knowledge and passion to our
                organization.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <img src={third} alt="" />
            <div className="flex flex-col justify-center items-center mt-6">
              <p className="text-gray-600  text-center  ">
                <span className="text-xl text-black  uppercase">
                  DAMANI PARRIS-
                </span>{" "}
                Executive Director, <br /> Head Coach
              </p>

              <p className="text-center text-gray-600 text-sm mt-4">
                Coach Mani possesses a seasoned basketball mind, he is a
                respected figure in the local community, and serves as the Head
                Coach for Kennedy Middle School. He brings a unique perspective
                to the game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;

// 

// import React from "react";
// import first from "../../assets/firstImage.jpg";
// import second from "../../assets/second.jpg";
// import third from "../../assets/third.jpg";

// const Leadership = () => {
//   return (
//     <div className="w-full bg-white mt-16">
//       <div className="w-full mx-auto px-6">
//         <h1 className="uppercase text-black font-medium text-xl text-center">LEADERSHIP</h1>

//         <div className="flex flex-nowrap gap-6 mt-8 overflow-x-auto justify-center">
//           {/* Card 1 */}
//           <div className="bg-gray-200 rounded-lg p-4 w-48 flex-shrink-0">
//             <img src={first} alt="" className="w-20 h-20 object-cover mx-auto rounded-full" />
//             <div className="flex flex-col justify-center items-center mt-4">
//               <p className="text-gray-600 text-center">
//                 <span className="text-lg text-black uppercase">DAMARI PARRIS-</span><br />
//                 President, Lead Coach
//               </p>
//               <p className="text-center text-gray-600 text-sm mt-3">
//                 Damari's D1 basketball journey is the epitome of resilience and determination. 
//                 He teaches PE & Health at Wilson STEM Academy in Charlotte, NC.
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-gray-200 rounded-lg p-4 w-48 flex-shrink-0">
//             <img src={second} alt="" className="w-20 h-20 object-cover mx-auto rounded-full" />
//             <div className="flex flex-col justify-center items-center mt-4">
//               <p className="text-gray-600 text-center">
//                 <span className="text-lg text-black uppercase">KAOS PARRIS-</span><br />
//                 Vice President & Treasurer
//               </p>
//               <p className="text-center text-gray-600 text-sm mt-3">
//                 Coach K is the patriarch of the Parris Family with over 20 years of AAU coaching experience.
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-gray-200 rounded-lg p-4 w-48 flex-shrink-0">
//             <img src={third} alt="" className="w-20 h-20 object-cover mx-auto rounded-full" />
//             <div className="flex flex-col justify-center items-center mt-4">
//               <p className="text-gray-600 text-center">
//                 <span className="text-lg text-black uppercase">DAMANI PARRIS-</span><br />
//                 Executive Director, Head Coach
//               </p>
//               <p className="text-center text-gray-600 text-sm mt-3">
//                 Coach Mani brings a seasoned basketball mind and serves as Head Coach for Kennedy Middle School.
//               </p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-gray-200 rounded-lg p-4 w-48 flex-shrink-0">
//             <img src={second} alt="" className="w-20 h-20 object-cover mx-auto rounded-full" />
//             <div className="flex flex-col justify-center items-center mt-4">
//               <p className="text-gray-600 text-center">
//                 <span className="text-lg text-black uppercase">KAOS PARRIS-</span><br />
//                 Vice President & Treasurer
//               </p>
//               <p className="text-center text-gray-600 text-sm mt-3">
//                 Coach K is the patriarch of the Parris Family with over 20 years of AAU coaching experience.
//               </p>
//             </div>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-gray-200 rounded-lg p-4 w-48 flex-shrink-0">
//             <img src={second} alt="" className="w-20 h-20 object-cover mx-auto rounded-full" />
//             <div className="flex flex-col justify-center items-center mt-4">
//               <p className="text-gray-600 text-center">
//                 <span className="text-lg text-black uppercase">KAOS PARRIS-</span><br />
//                 Vice President & Treasurer
//               </p>
//               <p className="text-center text-gray-600 text-sm mt-3">
//                 Coach K is the patriarch of the Parris Family with over 20 years of AAU coaching experience.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Leadership;

