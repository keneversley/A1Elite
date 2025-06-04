import React from "react";

const ContactContent = () => {
  return (
    <div className="bg-purple-700 py-16 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 justify-center items-center">
        <h1 className="text-orange-100 text-3xl font-semibold">
          CONNECT WITH US!
        </h1>
        <div className="text-orange-50 flex flex-col gap-3 justify-center items-center">
          <p>
            For business inquires or collaborations please contact us at
            Ourkidsourresponsibility@gmail.com
          </p>
          <p className="text-center">
            For finance options or questions, please contact Christina Williams via
            email at Ourkidsourresponsibility@gmail.com or <br />{" "}
            {/* <span>Christina Williams</span> */}
          </p>
          <p>For all other inquires, please complete the form below.</p>
          <button className="bg-[#0c0703] mt-6 hover:bg-[#25150a] text-xs text-white font-medium px-6 py-3 uppercase tracking-wider">
            Learn How You Can Support A1 ELITE TAMPA . Click Here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
