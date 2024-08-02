"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';

// Define a loader for the content
const SkeletonLoader = () => (
  <div className="bg-white border rounded-xl shadow-md p-4 w-[300px] relative">
    <div className="relative">
      <div className="skeleton skeleton-image h-[500px] mx-auto"></div>
      <div className="absolute -top-1 left-0 bg-[#ff776f] text-white text-xs font-bold px-3 py-3 rounded-b-lg -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute top-0 right-0 p-[12px] bg-[#ff776f] rounded-full"></div>
    </div>
    <div className="mt-4">
      <div className="skeleton skeleton-text mb-[10px] "></div>
      <div className="flex items-center gap-1">
        <div className="skeleton skeleton-line w-8 h-8"></div>
        <div className="skeleton skeleton-line w-8 h-8"></div>
        <div className="skeleton skeleton-line w-8 h-8"></div>
        <span className="ml-2 text-sm text-black skeleton skeleton-text"></span>
      </div>
      <div className="py-4">
        <div className="skeleton skeleton-text mb-2"></div>
        <div className="flex">
          <div className="skeleton skeleton-text w-10 h-6"></div>
          <div className="skeleton skeleton-text w-10 h-6 ml-2"></div>
        </div>
      </div>
      <div className="rounded-lg bg-[#ff776f] skeleton-text w-full py-5"></div>
    </div>
  </div>
);

const ProductCard = () => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="bg-white rounded-xl shadow-md p-4 w-[300px] relative">
          <div className="relative">
            <Image
              src="/Product/product-img.png" // Update with your image path
              alt="Oberon Insecticide"
              width={170}
              height={170}
              className="object-contain mx-auto"
            />
            <div className="absolute top-0 left-0 bg-[#FF3F35] text-white text-xs font-bold px-2 py-2 rounded-b-lg -translate-y-1/2 translate-x-1/2">
              49%
            </div>
            <button
              onClick={toggleWishlist}
              className="absolute top-0 right-0 p-2 bg-gray-200 rounded-full"
            >
              {isInWishlist ? (
                <FaHeart className="text-[#FF3F35]" />
              ) : (
                <FaRegHeart className="text-gray-500" />
              )}
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-black/90">Oberon Insecticide</h3>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <span className="ml-2 text-sm text-black">(45)</span>
            </div>
            <div className="py-4">
              <p className='text-[#7A7A7A] text-sm'>Price</p>
              <span className="text-black text-xl font-bold">₹400</span>
              <span className="ml-2 text-sm text-gray-500 line-through">₹420</span>
            </div>
            <button className="mt-4 bg-[#FF3F35] text-white text-center w-full py-2 rounded-md hover:bg-red-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
