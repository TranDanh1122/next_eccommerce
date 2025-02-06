'use client'
import React from "react"
import { Button } from "./ui/button"

const Hero = React.memo((): React.JSX.Element => {

    return <>
        <section className="lg:bg-[rgb(13,13,13)] lg:p-0 pt-32 pb-44 relative overflow-hidden">
            <div className="container flex items-center justify-between">
                <div className="lg:w-1/3 w-2/3 mx-auto flex flex-col gap-6">
                    <span className="over text-white/50 lg:text-left text-center">
                        NEW PRODUCT
                    </span>
                    <h1 className="text-white h1 lg:text-left text-center">XX99 Mark II
                        Headphones</h1>
                    <p className="body text-white/75 lg:text-left text-center">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <Button className=" w-fit bg-d8 hover:bg-fb py-6 px-8 mt-10 rounded-none subtitle lg:mx-0 mx-auto">
                        See Product
                    </Button>
                </div>
                <div className="lg:w-1/2 md:bg-[rgb(13,13,13)] lg:bg-transparent w-screen absolute lg:static -z-10 lg:z-0 top-0 left-0 h-full">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/hero.png" />
                        <source media="(min-width: 768px)" srcSet="/assets/home/tablet/image-header.jpg" />
                        <img src="/assets/home/mobile/image-header.jpg" alt="hero" className="w-full max-w-[750px] mx-auto object-cover object-center" style={{ aspectRatio: "7/6" }} />
                    </picture>
                </div>
            </div>
        </section>

    </>
})
Hero.displayName = "Hero"
export default Hero