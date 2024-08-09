"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa6";


const testimonials = [
  {
    name: "Jack Brown",
    role: "Business Owner",
    image: "/Testi/testi.png",
    rating: 5,
    text: "Vitae tempus mattis gravida habitant nunc sociosqu fringilla pulvinar nisi cum suspendisse maecenas bibendum faucibus, per duis primis.",
  },
  {
    name: "Jane Smith",
    role: "Entrepreneur",
    image: "/Testi/testi.png",
    rating: 4,
    text: "Phasellus egestas tellus nec fringilla ultricies. Aenean euismod urna at est cursus, et luctus ipsum efficitur.",
  },
  {
    name: "John Doe",
    role: "Marketing Specialist",
    image: "/Testi/testi.png",
    rating: 5,
    text: "Curabitur tincidunt libero eu tellus dignissim, vitae condimentum odio sollicitudin. Nulla facilisi.",
  },
];

const Testimonial = () => {
  const categorySplide = useRef(null);

  const prevCategory = () => {
    if (categorySplide.current) {
      categorySplide.current.go("-1");
    }
  };

  const nextCategory = () => {
    if (categorySplide.current) {
      categorySplide.current.go("+1");
    }
  };
  

  return (
    <div className="relative w-full h-screen">
       <div
        style={{
          backgroundImage: "url('/Testi/testi-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.7",
          position: "absolute",
          inset: "0",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 flex flex-col items-center px-4 py-2 md:py-8">
        <div className="flex justify-center mb-4">
          <div className="px-3 py-2 border w-fit rounded-full bg-white flex items-center justify-center gap-2">
            <img
              src="/Testi/star.png"
              alt="star"
              className="w-[17px] h-[17px] object-cover"
            />
            <p className="text-sm text-black">Testimonials</p>
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-white mb-2 text-center">
          What our <span className="text-red-600">customers</span> say about us.
        </h2>
        <p className="text-gray-300 py-2 mb-0 md:mb-8 text-center">
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
          ipsum, nec sagittis sem nibh id elit.
        </p>
        {/* Slider */}
        <div className="w-full max-w-6xl mx-auto splide-container">
          <Splide
            ref={categorySplide}
            options={{
              type: "loop",
              perPage: 2,
              perMove: 1,
              autoplay: true,
              interval: 3000,
              gap: "2rem",
              pagination: false,
              speed: 2000,
              arrows: false,
              easing: "linear",
            //   height:"300px",
              breakpoints: {
                1024: {
                  perPage: 2,
                  gap: "1rem",
                  height: "300px"
                },
                768: {
                  perPage: 2,
                  gap: "0.5rem",
                  height: "260px",
                },
                640: {
                  perPage: 1,
                  gap: "0.5rem",
                  height: "260px",
                },
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <div className="relative p-6 rounded shadow-md px-4 flex flex-col items-start">
                  <div className="flex items-start mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[150px] h-[180px] mr-4 object-cover"
                    />
                    <div className="py-2">
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-[#FF3F35]">
                        {testimonial.role}
                      </p>
                      <div className="flex mb-4 gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, idx) => (
                            <span key={idx} className="text-yellow-400">
                              &#9733;
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-[15px] absolute bottom-10 left-[5rem] md:left[7rem] lg:left-[8rem] text-gray-600 bg-white rounded-lg p-3 w-[250px] md:w-[280px] lg:w-[400px]">
                 "{testimonial.text.length > 80 ? `${testimonial.text.slice(0, 80)}...` : testimonial.text}"
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="bg-white text-primary rounded-full p-2 shadow-md hover:bg-primary hover:text-white"
            onClick={prevCategory}
          >
            <FaAngleLeft size={18} />
          </button>
          <button
            className="bg-white text-primary rounded-full p-2 shadow-md hover:bg-primary hover:text-white"
            onClick={nextCategory}
          >
            <FaAngleRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
