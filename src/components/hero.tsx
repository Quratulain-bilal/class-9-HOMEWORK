import Image from "next/image";
import React from "react";

const Hero = () => {
 return (
    <>
      <div className=" relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/bg_house.jpg')] bg-cover __className_092cb9">
        <div className=" absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>
        <div className=" z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px] ">
          <div className=" h-fit w-full pt-5 md:w-1/2 md:py-10">
            <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-[#044e83] sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
              Governor Sindh
            </h1>
            <h1 className=" whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-[#044e83] sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
              Kamran Khan Tessori
            </h1>
            <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider  text-[rgb(46,182,232)] sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
              Certified Cloud
              <br />
              Applied Generative AI
              <br />
              Engineer (GenEng)
            </h1>
            <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-[#044e83] sm:text-2xl md:text-left">
              Earn up to $5,000 / month
            </p>
            <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-[#044e83] sm:text-2xl md:w-[80%] md:text-left">
              Now admissions are open in Hyderabad
            </p>
            <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
              <a className="w-full md:w-auto" href="/apply">
                <button className="w-full rounded-md bg-[#044e83] py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                  APPLY NOW
                </button>
              </a>
              <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
                <div className="flex-col text-center text-xl tracking-widest text-[#044e83] sm:text-3xl">
                  <div className="w-40 font-extrabold">562,143</div>
                </div>
                <div className="text-center text-xs tracking-wider text-[#044e83] sm:mb-0 sm:text-sm">Accepted Applications</div>
              </div>
            </div>
          </div>
          <div className=" relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
            <Image
              alt="cover"
              loading="lazy"
              width={1600}
              height={1212}
              decoding="async"
              data-nimg="1"
              className=" md: ml-40 h-auto min-w-[900px] lg:w-[600px]"
              src="/governor.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
