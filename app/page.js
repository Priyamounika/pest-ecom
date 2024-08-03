import Image from "next/image";
import Link from "next/link";
import Header from '@/app/layout/header'
import Footer from '@/app/layout/footer'
import ProductCard from '@/app/utility/component/product-card'
import TestimonialCard from '@/app/utility/component/testimonial-card'
import Test from '@/app/utility/component/test'


export default function Home() {
  return (
    <main className="bg-[#f3f3f3] flex min-h-screen flex-col items-center justify-between">
      <Header/>
      {/* Product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
      {/* Testimonial cards */}
      {/* <TestimonialCard/> */}
      <Test/>
      <Footer/>
    </main>
  );
}
