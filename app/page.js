import Image from "next/image";
import Link from "next/link";
import Header from '@/app/layout/header'
import Footer from '@/app/layout/footer'
import ProductCard from '@/app/utility/component/product-card'
import Testi from '@/app/utility/component/testi'
import Banner from '@/app/utility/component/banner'
import Faq from '@/app/utility/component/faq'
import Heading from '@/app/utility/Heading'
import SectionCard from '@/app/utility/component/section-card'
import WhyParadise from '@/app/utility/component/why-paradise'
import MonthOffer from '@/app/utility/component/month-offfer'
import OurClient from '@/app/utility/component/ourclient'


export default function Home() {
  return (
    <main className="bg-[#f3f3f3]">
      <Banner/>
      {/* section cards */}
      <Heading title={"Explore"} subtitle={"Our Category"}/>  
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-4 container mx-auto">
      <SectionCard/>
      <SectionCard/>
      <SectionCard/>
      <SectionCard/>
      </div>
      {/* Product cards */}
      <Heading title={"Anytime"} subtitle={"Featured Products"}/>  
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 py-4 container mx-auto">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
      <div className="py-10">
      <OurClient/>
      </div>
      {/* Why Paradise */}
      <WhyParadise/>
      <MonthOffer/>
      {/* Testimonial cards */}
      <Testi/>
      <Faq/>
    </main>
  );
}
