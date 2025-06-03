import React from "react";

const ContactContent = () => {
  return (
    <div className="bg-green-700 py-16 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 justify-center items-center">
        <h1 className="text-orange-100 text-3xl font-semibold">
          CONNECT WITH US!
        </h1>
        <div className="text-orange-50 flex flex-col gap-3 justify-center items-center">
          <p>
            For business inquires or collaborations please contact us at
            boutabucketbball@gmail.com.
          </p>
          <p className="text-center">
            For finance options or questions, please contact Coach Kaos via
            email at boutabucketaau@gmail.com or <br />{" "}
            <span>call (980)-999-1488.</span>
          </p>
          <p>For all other inquires, please complete the form below.</p>
          <button className="bg-[#F97316] mt-6 hover:bg-[#e2792d] text-xs text-white font-medium px-6 py-3 uppercase tracking-wider">
            Learn How You Can Support A1 ELITE TAMPA . Click Here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
