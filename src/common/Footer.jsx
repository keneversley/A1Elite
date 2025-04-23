import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-between  bg-gray-100 border-t border-gray-20 shadow-sm ">
      <div className="max-w-6xl mx-auto mt-6  pb-20 ">
        <div className="flex justify-center gap-6 text-gray-600 text-sm mb-10 ">
          <span className="hover:underline">Search</span>
          <span className="hover:underline">Contact</span>
          <span className="hover:underline">Donate now</span>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-300  flex justify-center items-center">
        <p className="text-xs text-gray-600 py-6">
          © 2025, Bout A Bucket Powered by Shopify
        </p>
      </div>
    </div>
  );
};

export default Footer;
