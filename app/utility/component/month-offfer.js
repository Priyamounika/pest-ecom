import React from 'react'
import Image from 'next/image'

const OfferSpecial = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center rounded-xl container mx-auto bg-black gap-5 px-10 md:px-[4rem]'>
        <div className='w-full md:w-1/2 md:p-4'>
        <h1 className="text-primary text-[22px] md:text-[42px] py-4">
        This Months Special Offer
        </h1>
        <p className="text-white text-lg md:text-[20px]">
        Multiple Products for Sales..
        </p>
        <p className="text-white text-lg md:text-[18px] py-4 md:w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="active:opacity-20 inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-white transition-colors bg-primary text-white h-14 px-14 rounded-full">
          Buy Now!..
        </button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
        <div>
        <Image
              className="w-[300px] h-[300px] md:w-[580px] md:h-[410px]"
              src={"/banner/Group.webp"}
              width={300}
              height={300}
              alt="logo"
            />
            </div>
        </div>
    </div>
  )
}

export default OfferSpecial
