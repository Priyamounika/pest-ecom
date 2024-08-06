import React from 'react';

const Banner = () => {
  return (
    <div
      className="flex flex-col justify-center py-24 bg-cover bg-right-top relative overflow-hidden w-full"
      style={{ backgroundImage: "url('/banner/banner.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative brand-container space-y-8 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        <div className="px-3 py-2 border w-fit rounded-full bg-white flex items-center justify-center gap-2">
          <img src="/Testi/star.png" alt="star" className="w-[17px] h-[17px] object-cover animate-pulse" />
          <p className="text-sm text-black">No.1 Pest control service</p>
        </div>
        <h1 className="text-white lg:w-3/5 xl:w-3/5 text-[22px] md:text-[46px] font-bold">
          We are <span className="text-primary">Paradise</span> Pest control, Service to fix your problems.
        </h1>
        <p className="text-white lg:w-3/5 xl:w-3/5 text-lg md:text-[18px]">
          We offer comprehensive and eco-friendly pest management solutions, ensuring a safe and pest-free environment for homes and businesses.
        </p>
        <button className="active:opacity-20 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors bg-primary text-white h-14 px-10 rounded-full">
          Buy Products
        </button>
      </div>
    </div>
  );
};

export default Banner;
