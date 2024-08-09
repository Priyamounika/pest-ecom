"use client";
import React, { useState } from 'react';
import ProductCard from '@/app/utility/component/product-card';
import Image from 'next/image';
import RangeSlider from '@/app/shop/Range-slider';

const Page = () => {
  const [priceRangeState, setPriceRangeState] = useState(false);
  const [priceRangeValue, setPriceRangeValue] = useState(10000);
  const [categoriesState, setCategoriesState] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Relevance');
  const [priceRangeData, setPriceRangeData] = useState([30, 10000]);
  const [resetPrice, setResetPrice] = useState(false);

  const handleSortClick = (sortType) => {
    setSelectedSort(sortType);
  };

  const handlePriceRangeChange = (values) => {
    setPriceRangeData(values);
    setPriceRangeValue(values[1]);
  };

  // reset price range
  const resetPriceRange = () => {
    setResetPrice(prev => !prev);
  };

  return (
    <div className="p-4 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Filters */}
        <aside className="relative w-full md:w-1/4 md:mr-[0px] border-r-[2px] border-[#F0ECEC]">
          <div className="border-b-[2px] pb-4 flex items-center gap-4 p-4">
            <Image
              src={"/banner/filter.png"}
              alt="Filter"
              width={30}
              height={30}
              className="object-cover"
            />
            <h2 className='text-black text-lg'>Filters</h2>
          </div>

          {/* Categories */}
          <div className="border-b-[2px] pb-4 mt-4 p-4">
            <div
              onClick={() => setCategoriesState(prev => !prev)}
              className="flex justify-between items-center cursor-pointer active:opacity-50"
            >
              <h3 className="font-semibold text-lg text-black">Categories</h3>
              <Image
                src={"/banner/Vector.png"}
                width={12}
                height={8}
                alt="Toggle"
                className={`w-[12px] h-[8px] transition-transform duration-300 ${categoriesState ? "rotate-180" : ""}`}
              />
            </div>
            <div className={`transition-all duration-300 ${categoriesState ? "pt-1" : "invisible h-0"}`}>
              <ul className="space-y-2 mt-2 text-black">
                <li className="flex items-center">
                  <input type="checkbox" id="herbicide" className="mr-2 accent-primary" />
                  <label htmlFor="herbicide">Herbicide</label>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" id="insecticide" className="mr-2 accent-primary" />
                  <label htmlFor="insecticide">Insecticide</label>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" id="bactericides" className="mr-2 accent-primary" />
                  <label htmlFor="bactericides">Bactericides</label>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" id="fungicides" className="mr-2 accent-primary" />
                  <label htmlFor="fungicides">Fungicides</label>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" id="larvicides" className="mr-2 accent-primary" />
                  <label htmlFor="larvicides">Larvicides</label>
                </li>
              </ul>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-4 p-4">
            <div
              onClick={() => setPriceRangeState(prev => !prev)}
              className="flex justify-between items-center cursor-pointer active:opacity-50"
            >
              <h3 className="font-semibold text-lg text-black">Price Range</h3>
              <Image
                src={"/banner/Vector.png"}
                width={12}
                height={8}
                alt="Toggle"
                className={`w-[12px] h-[8px] transition-transform duration-300 ${priceRangeState ? "rotate-180" : ""}`}
              />
            </div>
            <div className={`transition-all duration-300 ${priceRangeState ? "pt-3" : "invisible h-0"}`}>
  <RangeSlider
    min={30}
    max={10000}
    step={1}
    data={priceRangeData}
    handler={handlePriceRangeChange}
    resetPrice={resetPrice}
  />
  
  <div className="flex justify-between text-sm text-black">
    <span>₹30</span>
    <span className=' pr-5 md:pr-3 lg:pr-5'>₹{priceRangeValue}</span>
  </div>
</div>

          </div>
        </aside>

        {/* Products Section */}
        <div className="w-full md:w-3/4 p-1 md:p-4 py-2 md:py-5 lg:py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            <p className='text-[#707070] text-xl md:text-sm font-bold md:font-normal'>Sort:</p>
            <div className="flex flex-wrap gap-0 md:gap-2">
              <button
                onClick={() => handleSortClick('Relevance')}
                className={`font-semibold border rounded-full px-3 md:px-4 py-2 ${selectedSort === 'Relevance' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
              >
                Relevance
              </button>
              <button
                onClick={() => handleSortClick('Popular')}
                className={`ml-2 font-semibold border rounded-full px-3 md:px-4 py-2 ${selectedSort === 'Popular' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
              >
                Popular
              </button>
              <button
                onClick={() => handleSortClick('Most New')}
                className={`ml-2 font-semibold border rounded-full px-3 md:px-4 py-2 ${selectedSort === 'Most New' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
              >
                Most New
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
            {/* product Cards*/}
            {[...Array(6).keys()].map(index => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
