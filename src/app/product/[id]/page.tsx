'use client'
import Categories from "@/components/Categories"
import FooterInfo from "@/components/FooterInfo"
import Quantity from "@/components/Quantity"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"
export default function ProductDetail(): React.JSX.Element {
    return <>
        <main className="container max-w-[1110px] lg:px-0 px-10">
            <div className="pt-20 pb-14">
                <Link href={"/"} className="body text-black text-opacity-50 font-medium">Go Back</Link>
            </div>
            <section className="flex items-center flex-col gap-8 md:gap-0 md:flex-row justify-between">
                <picture className="md:w-5/12 w-full h-full">
                    <source media="(min-width: 1024px)" srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg" />
                    <source media="(min-width: 768px)" srcSet="/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg" />
                    <img src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="Speaker ZX9" className="w-full h-full object-cover lg:aspect-square md:aspect-auto" />
                </picture>
                <div className="md:w-5/12 w-full">
                    <span className="over block text-d8">
                        NEW PRODUCT
                    </span>
                    <h2 className="h2 mt-4 mb-8 w-full mx-auto"> XX99 Mark II Headphones</h2>
                    <p className="text-black text-opacity-50 body font-medium w-full mx-auto">
                        The new XX99 Mark II headphones is the pinnacle of pristine audio.
                        It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                    </p>
                    <span className="h6 my-10 block">$ 2,999</span>
                    <div className="flex items-stretch justify-start gap-4">
                        <Quantity />
                        <Button className=" w-fit bg-d8 hover:bg-fb py-6 px-8 rounded-none subtitle md:mx-0 mx-auto flex">
                            Add to card
                        </Button>
                    </div>

                </div>
            </section>
            <section className="flex lg:flex-row flex-col gap-24 md:gap-32 lg:gap-0 items-start justify-between md:mt-40 mt-24">
                <div className="lg:w-3/5 w-full">
                    <h2 className="h3 mb-8">FEATURES</h2>
                    <p className="body text-black text-opacity-50">
                        Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening.
                        It includes intuitive controls designed for any situation.
                        Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

                        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms.
                        It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to.
                        Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound,
                        cutting-edge technology, and a modern design aesthetic.
                    </p>
                </div>
                <div className="lg:w-1/5 w-full flex lg:flex-col md:flex-row flex-col gap-8">
                    <h2 className="h3 lg:w-full md:w-1/2 w-full">in the box</h2>
                    <div className="lg:w-full md:w-1/2 w-full">
                        <p className="body font-medium text-black text-opacity-50 flex items-center justify-start"><span className="text-d8 w-1/5">1x</span> Headphone Unit</p>
                        <p className="body font-medium text-black text-opacity-50 flex items-center justify-start"><span className="text-d8 w-1/5">2x</span> Headphone Unit</p>
                        <p className="body font-medium text-black text-opacity-50 flex items-center justify-start"><span className="text-d8 w-1/5">3x</span> Headphone Unit</p>
                    </div>
                </div>
            </section>
            <section className="grid md:grid-cols-5 md:grid-rows-2 grid-rows-4 grid-cols-1 md:gap-8 gap-0 md:gap-y-0 gap-y-8 md:mt-40 mt-24  md:max-h-[600px] max-h-[800px]">
                <div className="row-span-2 grid grid-cols-1 col-span-2 grid-rows-2 gap-8">
                    <picture className="w-full overflow-hidden rounded-xl">
                        <source media="(min-width: 1024px)" srcSet="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg" />
                        <img loading="lazy" src="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg" alt="gallery 1" className="object-cover hover:scale-110 w-full h-full" />
                    </picture>
                    <picture className="w-full overflow-hidden rounded-xl" >
                        <source media="(min-width: 1024px)" srcSet="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg" />
                        <source media="(min-width: 768px)" srcSet="/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg" />
                        <img loading="lazy" src="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg" alt="gallery 2" className="object-cover hover:scale-110 w-full h-full" />
                    </picture>
                </div>
                <picture className=" row-span-2 col-span-3 overflow-hidden rounded-xl">
                    <source media="(min-width: 1024px)" srcSet="/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg" />
                    <source media="(min-width: 768px)" srcSet="/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg" />
                    <img loading="lazy" src="/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg" alt="gallery 3" className="object-cover w-full hover:scale-110 h-full" />
                </picture>
            </section>
            <section className="py-40">
                <h2 className="h3 text-center mb-16">you may also like</h2>
                <div className="flex md:flex-row flex-col items-center justify-between md:gap-8 gap-3">
                    <div className="relative md:w-1/3 w-full py-8 ">
                        <div className="bg-f1 py-16 rounded-lg">
                            <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="category" loading="lazy" className="md:w-32 w-20 md:h-40 h-24 object-cover mx-auto" />
                        </div>
                        <h6 className="text-center lg:h6 py-8 text-[15px] tracking-[1.07px] font-bold">HEADPHONES</h6>
                        <Button className=" w-fit bg-d8 hover:bg-fb py-6 px-8 rounded-none subtitle mx-auto flex">
                            Add to card
                        </Button>
                    </div>
                    <div className="relative md:w-1/3 w-full py-8 ">
                        <div className="bg-f1 py-16 rounded-lg">
                            <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="category" loading="lazy" className="md:w-32 w-20 md:h-40 h-24 object-cover mx-auto" />
                        </div>
                        <h6 className="text-center lg:h6 py-8 text-[15px] tracking-[1.07px] font-bold">HEADPHONES</h6>
                        <Button className=" w-fit bg-d8 hover:bg-fb py-6 px-8 rounded-none subtitle mx-auto flex">
                            Add to card
                        </Button>
                    </div>
                    <div className="relative md:w-1/3 w-full py-8 ">
                        <div className="bg-f1 py-16 rounded-lg">
                            <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="category" loading="lazy" className="md:w-32 w-20 md:h-40 h-24 object-cover mx-auto" />
                        </div>
                        <h6 className="text-center lg:h6 py-8 text-[15px] tracking-[1.07px] font-bold">HEADPHONES</h6>
                        <Button className=" w-fit bg-d8 hover:bg-fb py-6 px-8 rounded-none subtitle mx-auto flex">
                            Add to card
                        </Button>
                    </div>
                </div>
            </section>
            <section>
                <Categories />
            </section>
            <section>
                <FooterInfo />
            </section>
        </main>
    </>
}