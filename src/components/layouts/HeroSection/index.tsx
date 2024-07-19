import Image from "next/image";
import * as React from "react";
import { blogHero } from "../../../assets/utils";

const HeroSection: React.FC = () => {
   return (
      <div className="relative h-[80vh] bg-gray-800 text-white">
         <Image
            src={blogHero}
            fill
            className="absolute inset-0 object-cover opacity-70"
            alt="Hero Background"
         />
         <div className="relative z-10 flex flex-col items-start justify-end h-full pb-16 px-[5%] text-center md:text-left">
            <div className="w-full md:w-[50%] py-5">
               <h1 className="text-4xl md:text-6xl font-bold mb-4 text-left leading-snug md:leading-[4.6rem]">
                  Unlock Industry Insights: Get Essential Tips & Boilerplate Hacks
               </h1>
            </div>
            <button className="bg-[#F97316] text-white px-8 py-3 rounded-[2px] mt-4">
               Read more
            </button>
         </div>
      </div>
   );
};

export default HeroSection;
