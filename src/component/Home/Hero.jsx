import image_1 from "../../assets/hero-basket.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[70vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image_1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 bg-gray-800 bg-opacity-50 text-center text-white p-6 rounded-lg space-y-2 py-10">
        <h1 className="text-4xl md:text-3xl font-bold mb-4 uppercase">
          TRAIN HARD. PLAY SMART. WIN BIG.
        </h1>
        <button className="bg-[#F97316] hover:bg-[#e2792d] text-white font-medium px-6 py-3 uppercase tracking-wider">
          Donate To The Youth
        </button>
      </div>
    </div>
  );
};
// import image_1 from "../../assets/hero-basket.jpg";
// import image_2 from "../../assets/hero-basket2.jpg";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-[70vh] flex items-center justify-center bg-black overflow-hidden">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

//       {/* Side-by-side full-size images */}
//       <div className="absolute inset-0 flex z-0">
//         <img
//           src={image_1}
//           alt="Basket 1"
//           className="w-1/2 h-full object-cover"
//         />
//         <img
//           src={image_2}
//           alt="Basket 2"
//           className="w-1/2 h-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-20 bg-gray-800 bg-opacity-50 text-center text-white p-6 rounded-lg space-y-2 py-10">
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


export default Hero;


