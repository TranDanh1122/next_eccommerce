'use client'
import React from "react"
const FooterInfo = React.memo((): React.JSX.Element => {
    return <section className="container max-w-[1110px] lg:px-0 px-10 flex items-center justify-between lg:gap-32 gap-16 py-52 lg:flex-row flex-col-reverse">
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
            <img src="/assets/shared/mobile/image-best-gear.jpg" alt="YX1 EARPHONES" className="w-full lg:aspect-square md:aspect-video  aspect-square object-cover rounded-xl" />
        </picture>
    </section>
})
FooterInfo.displayName = "FooterInfo"
FooterInfo.whyDidYouRender = true;

export default FooterInfo