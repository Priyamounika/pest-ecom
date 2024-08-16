import React from 'react'
import Image from 'next/image';
import Marquee from 'react-fast-marquee'
import img1 from '/public/clients/1.png';
import img2 from '/public/clients/2.png';
import img3 from '/public/clients/3.png';
import img4 from '/public/clients/4.png';
import img5 from '/public/clients/5.png';
import img6 from '/public/clients/6.png';
import img7 from '/public/clients/7.png';

const ourclient = () => {
  return (
    <div className='flex flex-col space-y-4 items-center justify-center'>
                <div className="px-3 py-2 border rounded-full w-fit bg-white flex items-center justify-center gap-2">
          <img src="/Testi/star.png" alt="star" className="w-[17px] h-[17px] object-cover animate-pulse" />
          <p className="text-sm text-black">Our Clients</p>
        </div>
        <h3 className='text-black text-4xl font-bold'>
            Our Happy <span className="text-primary">Clients</span>{" "}
          </h3>
          <p className="text-black text-sm text-center xl:w-3/4">
            Paradise Pest Control India Pvt.Ltd is leading pest control services
            in coimbatore with 10 years of experience in the field. And we have
            a valuable client profile who are strength of our business.
          </p>
          <div className='py-5 container mx-auto'>
            <Marquee direction='left' speed={50} delay={2} gradientColor=''>
                <div className='image_wrapper'>
                    <Image src={img1} alt='ddd'/>
                </div>
                <div className='image_wrapper'>
                    <Image src={img2} alt='ddd'/>
                </div>
                <div className='image_wrapper'>
                    <Image src={img3} alt='ddd'/>
                </div>
                <div className='image_wrapper'>
                    <Image src={img4} alt='ddd'/>
                </div>
                <div className='image_wrapper'>
                    <Image src={img5} alt='ddd'/>
                </div>
                <div className='image_wrapper'>
                    <Image src={img6} alt='ddd'/>
                </div>
                <div className='image_wrapper'>
                    <Image src={img7} alt='ddd'/>
                </div>
            </Marquee>
          </div>
    </div>
  )
}

export default ourclient