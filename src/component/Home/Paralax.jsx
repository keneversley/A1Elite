// import React from "react";
// import group from "../../assets/group.jpg";

// const Paralax = () => {
//   return (
//     <div
//       className="w-full h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
//       style={{ backgroundImage: `url(https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/group.jpg)` }}
//     ></div>
//   );
// };

// export default Paralax;

import React from "react";

const Paralax = () => {
  return (
    <div
      className="w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(https://globalasset1.s3.us-east-2.amazonaws.com/A1elite/group.jpg)`,
        backgroundAttachment: 'scroll', // 'fixed' causes issues on iOS
        height: '60vh',
      }}
    >
      {/* Optional content */}
      <div className="text-white text-center px-4">
        <h2 className="text-xl md:text-3xl font-bold drop-shadow-md">Welcome to A1 Elite</h2>
        <p className="mt-2 text-sm md:text-base drop-shadow-md">
          Empowering youth through basketball
        </p>
      </div>
    </div>
  );
};

export default Paralax;

