// import image_1 from "../../assets/hero-basket.jpg";


// const Hero = () => {
//   // const image_2 = "https://globalasset1.s3.us-east-2.amazonaws.com/105_+leopard1.jpg"
//   return (
//     <div
//       className="relative w-full h-[70vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(https://globalasset1.s3.us-east-2.amazonaws.com/105_+leopard1.jpg)` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 bg-gray-800 bg-opacity-50 text-center text-white p-6 rounded-lg space-y-2 py-10">
//         <h1 className="text-4xl md:text-3xl font-bold mb-4 uppercase">
//           TRAIN HARD. PLAY SMART. WIN BIG.
//         </h1>
//         <button className="bg-[#F97316] hover:bg-[#e2792d] text-white font-medium px-6 py-3 uppercase tracking-wider">
//           Donate To The Youth
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Hero;
// 
// import React from "react";

// const Hero = () => {
//   return (
//  <div
 
//     className="w-full h-screen bg-black flex items-center justify-center"
//   style={{
//     backgroundImage: `url(https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/back.png)`,
//     backgroundSize: "cover", // changed from "contain"
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
  
// >
//   <div className="bg-black bg-opacity-50 absolute inset-0 z-10" />
//   <div className="relative z-20 text-white text-center px-4 py-10">
//     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight">
//       PLAY HARD. PLAY TOGETHER. A1!
//     </h1>
//     <button className="mt-6 bg-black hover:bg-[#2d190b] text-white font-medium px-6 py-3 uppercase tracking-wider text-sm sm:text-base">
//       Donate To The Youth
//     </button>
//   </div>
// </div>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-black flex items-center justify-center relative"
      style={{
        backgroundImage: `url(https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/back.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-white text-center px-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight">
          PLAY HARD. PLAY TOGETHER. A1!
        </h1>
        <button className="mt-6 bg-black hover:bg-[#2d190b] text-white font-medium px-6 py-3 uppercase tracking-wider text-sm sm:text-base">
          Donate To The Youth
        </button>
      </div>
    </div>
  );
};

export default Hero;






