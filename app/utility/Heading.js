import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col container mx-auto py-4">
        <div className="flex flex-row text-primary items-center gap-4">
        <HiOutlineShoppingBag />
        <p className="text-center text-[16px] font-[700] font-pt_serif">
            {title}
          </p>
        </div>
          <h2 className="text-black text-[22px] md:text-[28px] lg:text-[34px] py-2 md:py-4 font-pt_serif font-[700]">
          {subtitle}
        </h2>
      </div>
    </>
  );
};

export default Heading;
