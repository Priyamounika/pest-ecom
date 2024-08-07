import Image from "next/image";
import {
  FaHeart,
  FaStar,
} from "react-icons/fa";

const Page = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-5 md:gap-0 p-4 px-[2rem]">
        {/* Left container */}
        <div className="w-full md:w-1/2 p-2 flex flex-col">
          <div className="flex flex-col-reverse md:flex-row space-x-4">
            {/*small images */}
            <div className="flex flex-row gap-2 overflow-x-scroll md:flex-col space-y-2">
              <Image
                src="/Product/product-img.png"
                alt="Oberon Insecticide"
                width={100}
                height={120}
                className="border border-[#D1CCCC] rounded-md"
              />
              <Image
                src="/Product/product-img.png"
                alt="Oberon Insecticide"
                width={100}
                height={120}
                className="border border-[#D1CCCC] rounded-md"
              />
              <Image
                src="/Product/product-img.png"
                alt="Oberon Insecticide"
                width={100}
                height={120}
                className="border border-[#D1CCCC] rounded-md"
              />
              <Image
                src="/Product/product-img.png"
                alt="Oberon Insecticide"
                width={100}
                height={120}
                className="border border-[#D1CCCC] rounded-md"
              />
            </div>

            {/*large image */}
            <div className="border border-[#D1CCCC] rounded-xl p-4">
              <Image
                src="/Product/product-img.png"
                alt="Oberon Insecticide"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right container*/}
        <div className="w-full md:w-1/2 p-2 md:p-6 flex flex-col items-start justify-center space-y-4">
          <p className="text-[#5C6B7E]">Chemicals</p>
          <h2 className="text-[32px] md:text-[36px] font-bold mt-2 text-black">
            Oberon Insecticide
          </h2>
          <div className="flex gap-5 md:gap-8 items-center">
          <p className="text-[36px] md:text-[46px] font-bold text-red-600">
            <span className="text-lg text-black/20 line-through">₹420</span> ₹400
          </p>
          <p className="bg-primary text-white rounded-full px-4 py-1 text-[15px]">49%</p>
          </div>
          <div className="flex items-center mt-2 space-x-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-primary">(45)</p>
          </div>
          <h3 className="text-black font-semibold">Description</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus.
          </p>
          <div className="flex w-full gap-4 mt-4">
            <button className="bg-red-500 text-white py-3 px-4 rounded w-full">
              Add to Cart
            </button>
            <button className="flex items-center justify-center border border-[#E4E6E8] bg-pink-200 rounded-full p-3 active:opacity-50 w-12 h-12">
              <FaHeart size={24} color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
