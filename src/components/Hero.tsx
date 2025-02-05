'use client'
import React from "react"
import { Button } from "./ui/button"

const Hero = React.memo((): React.JSX.Element => {

    return <>
        <section className="bg-[rgb(13,13,13)] relative overflow-hidden">
            <div className="container flex items-center justify-between relative z-10">
                <div className="w-1/3 flex flex-col gap-6">
                    <span className="over text-white/50">
                        NEW PRODUCT
                    </span>
                    <h1 className="text-white h1">XX99 Mark II
                        Headphones</h1>
                    <p className="body text-white/75">
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <Button className=" w-fit bg-d8 hover:bg-fb py-6 px-8 mt-10 rounded-none subtitle">
                         See Product
                    </Button>
                </div>
                <div className="w-1/2">
                    <img loading="lazy" src="./assets/home/desktop/hero.png" alt="hero" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>

    </>
})
Hero.displayName = "Hero"
export default Hero