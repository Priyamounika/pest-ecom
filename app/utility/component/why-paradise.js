import React from "react";
import Image from "next/image";
import CardGrid from "@/app/utility/cardgrid"

const WhyParadise = () => {
  return (
    <div className="text-center text-black container mx-auto">
      <h1 className="text-[26px] md:text-[42px] font-medium">
        Why
        <span className="text-primary"> paradise</span> pest
      </h1>
      <p className="text-center text-[15px] md:text-[16px] text-[#707070] px-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 h-full py-5 md:py-10 px-[32px]">
        <div className="w-full lg:w-2/6 ">
          <div className="p-4 bg-white rounded-lg">
            <Image
              className="w-full object-cover"
              src={"/banner/Rectangle.webp"}
              width={200}
              height={200}
              alt="logo"
            />
            <p className="text-start py-4">
              We offers comprehensive and eco-friendly pest management
              solutions, ensuring a safe and pest-free environment. We offers
              comprehensive and eco-friendly pest management solutions, ensuring
              a safe and pest-free environment.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-4/6">

<CardGrid/>
        </div>
      </div>
    </div>
  );
};

export default WhyParadise;
