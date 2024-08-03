"use client";
import { useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import 'tailwindcss/tailwind.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Yeseva_One } from 'next/font/google';

const TestimonialCard = () => {
    const categorySplide = useRef(null);

    const prevCategory = () => {
        if (categorySplide.current) {
            categorySplide.current.splide.go('<'); // Use '<' for previous slide
        }
    };

    const nextCategory = () => {
        if (categorySplide.current) {
            categorySplide.current.splide.go('>'); // Use '>' for next slide
        }
    };

    return (
        <div className="relative container mx-auto py-8 bg-cover bg-center" style={{ backgroundImage: 'url(/Testi/testi-bg.png)' }}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className="relative z-10 text-center mb-8">
                <div className="flex justify-center mb-4">
                    <div className="px-3 py-2 border w-fit rounded-full bg-white flex items-center justify-center gap-2">
                        <img src="/Testi/star.png" alt="star" className="w-[17px] h-[17px] object-cover" />
                        <p className="text-sm text-black">Testimonials</p>
                    </div>
                </div>
                <h2 className="text-3xl font-semibold text-white mb-2">
                    What our <span className="text-red-600">customers</span> say about us.
                </h2>
                <p className="text-gray-300 py-2">
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                </p>
            </div>
            <Splide
                ref={categorySplide}
                options={{
                    type: 'loop',
                    perPage: 2,
                    perMove: 1,
                    autoplay: true,
                    interval: 3000,
                    gap: '2rem',
                    pagination: false,
                    speed: 2000,
                    arrows: false,
                    easing: 'linear',
                    height: "280px",

                    breakpoints: {
                        1024: {
                            perPage: 1,
                            gap: '1rem',
                        },
                        768: {
                            perPage: 1,
                            gap: '0.5rem',
                        },
                        640: {
                            perPage: 1,
                            gap: '0.5rem',
                        },
                    },
                }}
            >
                {/* Add your slides here */}
                <SplideSlide>
                    <div className="relative p-8 rounded shadow-md px-16">
                        <div className="flex items-center">
                            <img src="/Testi/testi.png" alt="Jack Brown" className="w-[150px] h-[180px] mr-4 object-cover" />
                            <div>
                                <h3 className="text-xl font-semibold">Jack Brown</h3>
                                <p className="text-sm text-[#FF3F35]">Business Owner</p>
                                <div className="flex mt-1">
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="text-yellow-400">&#9733;</span>
                                </div>
                            </div>
                        </div>
                        <p className="absolute -bottom-6 right-12 mt-4 text-gray-600 bg-white rounded-lg w-[400px] p-4">
                            "Vitae tempus mattis gravida habitant nunc sociosqu fringilla pulvinar nisi cum suspendisse maecenas bibendum faucibus, per duis primis."
                        </p>
                    </div>
                </SplideSlide>
            </Splide>

            {/* Buttons */}
            <div className="mt-8 justify-center transform flex gap-4 z-20">
                <div className="flex justify-center items-center">
                    <button
                        className="bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200"
                        onClick={prevCategory}
                    >
                        <FaArrowLeft size={22} />
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className="bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200"
                        onClick={nextCategory}
                    >
                        <FaArrowRight size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
