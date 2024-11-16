import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <>
      <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10 ">
        <h1 className="text-center xl:text-[32px] sm:text-[30px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-[#044e83] font-extrabold m-auto md:w-[95%]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="mt-7 sm:mt-10 xl:leading-[1.75rem] xl:text-[1.2rem] sm:tracking-wider tracking-normal text-justify my-10">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>

      <div>
        {/* Top Section: 3 Horizontal Cards */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between mt-5 mb-1 m-3 gap-8">
          <Image
            src="/card/01.jpg"
            width={450}
            height={350}
            alt="content-img"
            className="shadow-2xl shadow-black rounded-lg h-[350px] object-cover w-full max-w-[450px]"
          />
          <Image
            src={"/card/02.jpg"}
            width={450}
            height={350}
            alt="content-img"
            className="shadow-2xl shadow-black rounded-lg h-[350px] object-cover w-full max-w-[450px]"
          />
          <Image
            src={"/card/03.jpg"}
            width={450}
            height={350}
            alt="content-img"
            className="shadow-2xl shadow-black rounded-lg h-[350px] object-cover w-full max-w-[450px]"
          />
        </div>

        {/* Bottom Section: 2 Full-Width Cards */}
        <div className="flex flex-col md:flex-row w-full h-screen items-stretch justify-center md:justify-between gap-6 p-6 mt-10">
          {/* First Card */}
          <div className="flex-1 relative border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/carousel/03.jpg"
              alt="Full-width Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Second Card */}
          <div className="flex-1 relative border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/carousel/04.jpg"
              alt="Full-width Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
