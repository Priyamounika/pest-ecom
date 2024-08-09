"use client";
import { useState } from 'react';
import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";
import ProductCard from '@/app/utility/component/product-card'
import Heading from '../utility/Heading';

const Page = () => {
  const [largeImageSrc, setLargeImageSrc] = useState("/Product/product-img.png");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleImageClick = (src, index) => {
    setLargeImageSrc(src);
    setSelectedIndex(index);
  };

  const smallImages = ["/Product/product-img.png", "/banner/Group.webp", "/banner/Group.webp", "/Product/product-img.png"];

  const increaseQuantity = () => setQuantity(prev => prev + 1);

  const decreaseQuantity = () => {
    setQuantity(prev => {
      if (prev > 1) {
        return prev - 1;
      } else {
        setIsAddedToCart(false);
        return 1;
      }
    });
  };

  // add to cart
  const handleAddToCartClick = () => {
    setIsAddedToCart(true);
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-white flex flex-col lg:flex-row gap-5 md:gap-0 p-4 lg:px-[2rem]">
        {/* Left container */}
        <div className="w-full lg:w-1/2 p-2 flex flex-col justify-center">
          <div className="flex flex-col-reverse md:flex-row space-x-4">
            {/* Small images */}
            <div className="flex flex-row gap-2 overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden xl:overflow-x-hidden md:flex-col space-y-2 justify-center items-center">
              {smallImages.map((src, index) => (
                <div
                  key={index}
                  className={`relative w-[100px] h-[110px] md:w-[110px] md:h-[120px] lg:w-[100px] lg-h-[120px] flex-shrink-0 cursor-pointer border-[2px] ${selectedIndex === index ? 'border-primary' : 'border-[#D1CCCC]'} rounded-md`}
                >
                  <Image
                    src={src}
                    alt={`Product image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md p-2"
                    onClick={() => handleImageClick(src, index)}
                  />
                </div>
              ))}
            </div>

            {/* Large image */}
            <div className="relative border border-[#D1CCCC] rounded-xl p-4 w-[300px] h-[340px] md:w-[500px] md:h-[560px] lg:w-[470px] lg:h-[525px]">
              <Image
                src={largeImageSrc}
                alt="Large Product"
                layout="fill"
                objectFit="cover"
                className="rounded-xl p-4"
              />
            </div>
          </div>
        </div>

        {/* Right container */}
        <div className="w-full lg:w-1/2 p-2 md:p-6 flex flex-col items-start justify-center space-y-3">
          <div>
            <p className="text-[#5C6B7E]">Chemicals</p>
            <h2 className="text-[32px] md:text-[36px] font-semibold text-black">
              Oberon Insecticide
            </h2>
          </div>
          <div className="flex gap-5 md:gap-8 items-center">
            <p className="text-[36px] md:text-[46px] font-bold text-black">
              <span className="text-lg text-black/20 line-through">₹420</span> ₹400
            </p>
            <p className="bg-primary text-white rounded-full px-4 py-1 text-[15px]">49%</p>
          </div>
          <div className="flex items-center gap-2 space-x-2">
            <div className="flex text-yellow-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-black">(45)</p>
          </div>
          <h3 className="text-black font-semibold">Description</h3>
          <p className="text-gray-700 w-full md:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus.
          </p>
          <div>
            {isAddedToCart ? (
              <div className="flex items-center gap-4 mt-5 lg:mt-8">
                {/* Quantity */}
                <div className="flex items-center justify-center gap-4 border bg-[#F6F6F6] rounded-md h-12 px-4 text-sm w-full md:w-[450px]">
                  <button
                    onClick={decreaseQuantity}
                    className="text-xl text-black bg-[#E1E3E7] rounded-xl px-4 py-1 flex items-center justify-center font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <p className="text-white bg-primary rounded-xl px-4 py-1 text-lg">{quantity}</p>
                  <button
                    onClick={increaseQuantity}
                    className="font-bold text-xl text-black bg-[#E1E3E7] rounded-xl px-4 py-1 flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist*/}
                <button className="border border-[#E4E6E8] bg-pink-200 rounded-full w-12 h-12 flex items-center justify-center">
                  <FaHeart size={24} color="red" />
                </button>
              </div>
            ) : (
              <div className="flex w-full md:w-[500px] gap-5 mt-5 lg:mt-8">
                {/* Add to Cart*/}
                <button
                  onClick={handleAddToCartClick}
                  className="bg-primary text-white py-3 px-4 rounded w-full"
                >
                  Add to Cart
                </button>

                {/* Wishlist*/}
                <button className="border border-[#E4E6E8] bg-pink-200 rounded-full p-3 active:opacity-50 w-12 h-12 flex items-center justify-center">
                  <FaHeart size={24} color="red" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='px-4'>
        <Heading title={"More Items"} subtitle={"Similar Products"}/>  
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-2 lg:gap-4 py-4 container mx-auto px-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};

export default Page;
