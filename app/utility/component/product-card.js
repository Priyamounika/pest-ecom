"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';

// Define a loader for the content
const SkeletonLoader = () => (
  <div className="bg-white border rounded-xl shadow-md p-4 relative">
    <div className="relative">
      <div className="skeleton skeleton-image h-[200px] mx-auto"></div>
      <div className="absolute -top-2 left-0 bg-[#ff776f] font-bold px-3 py-2 rounded-b-lg -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute top-0 right-0 p-[12px] bg-[#ff776f] rounded-full"></div>
    </div>
    <div className="mt-4">
      <div className="skeleton skeleton-text mb-[10px] "></div>
      <div className="flex items-center gap-1">
        <div className="skeleton skeleton-line w-8 h-2"></div>
        <div className="skeleton skeleton-line w-8 h-2"></div>
        <div className="skeleton skeleton-line w-8 h-2"></div>
        <span className="ml-2 text-sm text-black skeleton skeleton-text"></span>
      </div>
      <div className="py-4">
        <div className="skeleton skeleton-text mb-2"></div>
        <div className="flex">
          <div className="skeleton skeleton-text w-10 h-2"></div>
          <div className="skeleton skeleton-text w-10 h-2 ml-2"></div>
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

  const product_name = "Oberon Insecticide";
  const productName = product_name.length > 18
    ? `${product_name.slice(0, 18)}...`
    : product_name;

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="bg-white rounded-xl shadow-md p-3 md:p-4 relative flex flex-col">
          {/* Discount Badge */}
          <div className="absolute top-0 left-8 bg-[#FF3F35] text-white text-xs font-bold px-2 py-2 rounded-b-lg">
            49%
          </div>

          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className="absolute top-2 right-2 md:top-4 md:right-4 p-2 bg-gray-200 rounded-full"
          >
            {isInWishlist ? (
              <FaHeart className="text-[#FF3F35]" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </button>
          <div className="relative mt-5 md:mt-4">
            <Image
              src="/Product/product-img.png"
              alt="Oberon Insecticide"
              width={180}
              height={180}
              className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-contain mx-auto cursor-pointer transition-transform duration-300 transform md:hover:translate-y-[-8px] hover:border-b-[1px] hover:border-b-[#fcb8b4]"
            />
          </div>

          <div className="mt-4">
            <h3 className="text-md md:text-lg font-semibold text-black/90">{productName}</h3>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <span className="ml-2 text-sm text-black">(45)</span>
            </div>
            <div className="py-2 md:py-4">
              <p className='text-[#7A7A7A] text-sm'>Price</p>
              <span className="text-black text-xl font-bold">₹400</span>
              <span className="ml-2 text-sm text-gray-500 line-through">₹420</span>
            </div>
            <button className="mt-1 md:mt-4 bg-[#FF3F35] text-white text-center w-full py-2 rounded-md hover:bg-red-600 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
