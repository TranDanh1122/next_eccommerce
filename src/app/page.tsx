import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="pt-28 pb-40 container">
          <Categories />
        </section>
        <section className="container flex flex-col gap-12">
          <div className="flex items-center justify-around py-8 px-24 bg-d8 overflow-hidden rounded-xl
                bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-left ">
            <div className="w-1/3 translate-y-[8%]">
              <img loading="lazy" src="./assets/home/desktop/image-speaker-zx9.png" alt="speaker" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/3">
              <h2 className="text-white h1">ZX9 SPEAKER</h2>
              <p className="body text-white text-opacity-75 mt-6 mt-32">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Button className=" w-fit bg-black hover:bg-[#4C4C4C] py-6 px-8 mt-10 rounded-none subtitle">
                See Product
              </Button>
            </div>
          </div>
          <div className="bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]  px-24 py-28 bg-no-repeat bg-cover bg-center rounded-xl">
            <h2 className="h4 ">ZX7 SPEAKER</h2>
            <Button className=" w-fit bg-black hover:bg-[#4C4C4C] py-6 px-8 mt-10 rounded-none subtitle">
              See Product
            </Button>
          </div>
          <div className="flex items-stretch gap-8">
            <img loading="lazy" src="./assets/home/desktop/image-earphones-yx1.jpg" alt="earphone" className="w-1/2 h-full object- rounded-xl" />
            <div className="bg-f1 p-24 w-1/2 flex justify-center flex-col gap-10 rounded-xl">
              <h2 className="h4 ">YX1 EARPHONES</h2>
              <Button className=" w-fit bg-black hover:bg-[#4C4C4C] py-6 px-8  rounded-none subtitle ">
                See Product
              </Button>
            </div>
          </div>
        </section>
        <section className="container flex items-center justify-between gap-32 py-52">
          <div className="w-1/2">
            <h2 className="h2 uppercase">Bringing you the <span className="text-d8">best</span> audio gear</h2>
            <p className="body text-black text-opacity-50 mt-8">Located at the heart of New York City,
              Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
              We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
              Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
          <img loading="lazy" src="./assets/shared/desktop/image-best-gear.jpg" alt="" className="w-1/2 h-full object-cover" />
        </section>
      </main>
    </>
  );
}
