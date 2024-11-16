import React from "react";
import { FaFacebook } from "react-icons/fa";
const Apply = () => {
  return (
    <>
      <div className="w-full h-[500px] flex justify-center items-center">
        <div className="bg-gray-100 flex flex-col mx-4 my-10 w-full max-w-2xl items-center justify-center gap-8 rounded bg-opacity-30 px-4 py-10 text-black shadow-lg backdrop-blur-3xl">
          <p className="text-center text-3xl text-[#044e83] xs:text-3xl">
            Before continuing to the application please subscribe on these
            social media platforms.
          </p>
          <FaFacebook className="text-blue-700 text-4xl" />
          <div className="flex flex-col items-center gap-5">
            <button className="w-full rounded-md bg-[#044e83] py-3 text-center text-sm font-semibold tracking-widest text-white sm:py-4 sm:text-base md:w-52 hover:bg-[#033c64] transition-colors">
              CONTINUE
            </button>
            <p>
              Already applied?{" "}
              <span className="underline text-[#044e83]">Get Admit Card</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
