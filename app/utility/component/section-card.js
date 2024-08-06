"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';


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
        <div className="bg-white rounded-tr-[40px] rounded-bl-[20px] shadow-md p-6 relative flex flex-col">
          <div className="relative">
            <Image
              src="/Product/product-img.png"
              alt="Oberon Insecticide"
              width={300}
              height={300}
              className="w-[150px] h-[200px] md:w-[280px] md:h-[340px] object-contain mx-auto cursor-pointer"
            />
          </div>
        </div>
    </>
  );
};

export default ProductCard;
