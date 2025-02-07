import React from "react";
import { Button } from "./ui/button";
const ProductItem = React.memo(({ type, isNew }: { type?: string, isNew: boolean }) => {
    return <>
        <div className={`flex items-center flex-col gap-8 md:gap-0 lg:flex-row justify-between ${type == "reverse" ? "lg:flex-row-reverse" : "flex-row"}`}>
            <picture className="lg:w-5/12 w-full">
                <source media="(min-width: 1024px)" srcSet="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg" />
                <source media="(min-width: 768px)" srcSet="/assets/shared/mobile/image-xx99-mark-two-headphones.jpg" />
                <img src="/assets/shared/mobile/image-xx99-mark-two-headphones.jpg" alt="Speaker ZX9" className="w-full h-full object-cover lg:aspect-square md:aspect-video" />
            </picture>
            <div className="lg:w-5/12 w-full">
                {isNew && <span className="over block lg:text-left text-center text-d8">
                    NEW PRODUCT
                </span>}
                <h2 className="h2 mt-4 mb-8 w-1/2 lg:w-full lg:text-left text-center mx-auto"> XX99 Mark II Headphones</h2>
                <p className="text-black text-opacity-50 body font-medium w-4/5 lg:w-full text-center lg:text-left mx-auto">
                    The new XX99 Mark II headphones is the pinnacle of pristine audio.
                    It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
                </p>
                <Button className=" w-fit bg-d8 hover:bg-fb py-6 px-8 mt-10 rounded-none subtitle lg:mx-0 mx-auto flex">
                    See Product
                </Button>
            </div>
        </div>
    </>
})
ProductItem.displayName = "ProductItem"
ProductItem.whyDidYouRender = true;

export default ProductItem