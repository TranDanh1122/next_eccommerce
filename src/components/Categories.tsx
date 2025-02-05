import React from "react";
const Categories = React.memo((): React.JSX.Element => {
    return <>
        <div className="flex items-center justify-between gap-8">
            <div className="relative w-1/3 py-8">
                <img src="./assets/shared/desktop/image-category-thumbnail-headphones.png" alt="category" loading="lazy" className="w-32 h-40 object-cover mx-auto" />
                <h6 className="text-center h6 py-4">HEADPHONES</h6>
                <span className="text-black hover:text-d8 text-opacity-50 subtitle text-center flex items-center justify-center gap-4">
                    SHOP
                    <i className="block bg-d8 w-1.5 h-2.5" style={{
                        mask: "url('/assets/shared/desktop/icon-arrow-right.svg') center / cover no-repeat",
                        WebkitMask: "url('/assets/shared/desktop/icon-arrow-right.svg') center / cover no-repeat",
                    }}></i>

                </span>
                <div className="w-full h-2/3 bg-f1 absolute bottom-0 left-0 -z-10 rounded-xl"></div>
            </div>
            <div className="relative w-1/3 py-8">
                <img src="./assets/shared/desktop/image-category-thumbnail-headphones.png" alt="category" loading="lazy" className="w-32 h-40 object-cover mx-auto" />
                <h6 className="text-center h6 py-4">HEADPHONES</h6>
                <span className="text-black hover:text-d8 text-opacity-50 subtitle flex items-center justify-center text-center gap-4">SHOP
                    <i className="block bg-d8 w-1.5 h-2.5" style={{
                        mask: "url('/assets/shared/desktop/icon-arrow-right.svg') center / cover no-repeat",
                        WebkitMask: "url('/assets/shared/desktop/icon-arrow-right.svg') center / cover no-repeat",
                    }}></i>
                </span>
                <div className="w-full h-2/3 bg-f1 absolute bottom-0 left-0 -z-10 rounded-xl"></div>
            </div>
            <div className="relative w-1/3 py-8">
                <img src="./assets/shared/desktop/image-category-thumbnail-headphones.png" alt="category" loading="lazy" className="w-32 h-40 object-cover mx-auto" />
                <h6 className="text-center h6 py-4">HEADPHONES</h6>
                <span className="text-black hover:text-d8 text-opacity-50 subtitle flex items-center justify-center text-center gap-4">SHOP
                    <i className="block bg-d8 w-1.5 h-2.5" style={{
                        mask: "url('/assets/shared/desktop/icon-arrow-right.svg') center / cover no-repeat",
                        WebkitMask: "url('/assets/shared/desktop/icon-arrow-right.svg') center / cover no-repeat",
                    }}></i>
                </span>
                <div className="w-full h-2/3 bg-f1 absolute bottom-0 left-0 -z-10 rounded-xl"></div>
            </div>
        </div>
    </>
})
Categories.displayName = "Category"
export default Categories