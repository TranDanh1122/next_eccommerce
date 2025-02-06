'use client'
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import React from "react";


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="pt-28 pb-40 container px-4">
          <Categories />
        </section>
        <section className="container flex flex-col gap-12 overflow-hidden px-4">
          <div className="flex items-center lg:justify-around gap-16 lg:gap-0 lg:flex-row 
                flex-col lg:py-8 py-16 md:px-24 px-8 bg-d8 overflow-hidden rounded-xl
                bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-left ">
            <div className="md:w-1/3 w-4/5 lg:translate-y-[8%] translate-x-0 ">
              <picture>
                <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/image-speaker-zx9.png" />
                <source media="(min-width: 768px)" srcSet="/assets/home/tablet/image-speaker-zx9.png" />
                <img src="/assets/home/mobile/image-speaker-zx9.png" alt="Speaker ZX9" className="w-full h-full object-cover" />
              </picture>
            </div>
            <div className="lg:w-1/3 w-2/3">
              <h2 className="text-white md:h1 uppercase text-[36px] leading-[40px] tracking-[1.29px] lg:text-left text-center">ZX9 SPEAKER</h2>
              <p className="body text-white text-opacity-75 mt-6 lg:text-left text-center">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Button className=" w-fit bg-black hover:bg-[#4C4C4C] py-6 px-8 mt-10 rounded-none subtitle flex lg:mx-0 mx-auto">
                See Product
              </Button>
            </div>
          </div>
          <div className="
          lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]
          md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] 
          bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] 
          md:px-24 px-8 py-28 bg-no-repeat bg-cover bg-center rounded-xl">
            <h2 className="h4 ">ZX7 SPEAKER</h2>
            <Button className=" w-fit bg-black hover:bg-[#4C4C4C] py-6 px-8 mt-10 rounded-none subtitle">
              See Product
            </Button>
          </div>
          <div className="flex items-stretch lg:gap-8 gap-3 md:flex-row flex-col">
            <picture className="md:w-1/2 w-full">
              <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/image-earphones-yx1.jpg" />
              <source media="(min-width: 768px)" srcSet="/assets/home/tablet/image-earphones-yx1.jpg" />
              <img src="/assets/home/mobile/image-earphones-yx1.jpg" alt="YX1 EARPHONES" className="w-full h-full object-cover rounded-xl" />
            </picture>
            <div className="bg-f1 lg:p-24 p-8 md:w-1/2 w-full flex justify-center flex-col gap-10 rounded-xl">
              <h2 className="h4 ">YX1 EARPHONES</h2>
              <Button className=" w-fit bg-black hover:bg-[#4C4C4C] py-6 px-8  rounded-none subtitle ">
                See Product
              </Button>
            </div>
          </div>
        </section>
        <section className="container flex items-center justify-between lg:gap-32 gap-16 py-52 lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2 w-full">
            <h2 className="md:h2 h4 uppercase lg:text-left text-center">Bringing you the <span className="text-d8">best</span> audio gear</h2>
            <p className="body text-black text-opacity-50 mt-8 lg:text-left text-center">Located at the heart of New York City,
              Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
              We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
              Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
          <picture className="lg:w-1/2 w-full">
            <source media="(min-width: 1024px)" srcSet="/assets/shared/desktop/image-best-gear.jpg" />
            <source media="(min-width: 768px)" srcSet="/assets/shared/tablet/image-best-gear.jpg" />
            <img src="/assets/shared/mobile/image-best-gear.jpg" alt="YX1 EARPHONES" className="w-full lg:aspect-square md:aspect-video  aspect-square object-cover" />
          </picture>
        </section>
      </main>
    </>
  );
}
