import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = React.memo((): React.JSX.Element => {
    return <>
        <footer className="bg-black">
            <div className="container pb-12 pt-20 md:px-0 px-8">
                <div className="flex flex-col justify-between gap-10">
                    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center md:items-start lg:items-center">
                        <Link href={"/"}>
                            <Image loading="lazy" objectFit="cover" src="./assets/shared/desktop/logo.svg" alt="logo" className="py-10" width={143} height={25} />
                        </Link>
                        <ul className="text-[13px]  leading-loose tracking-[2px] font-bold uppercase text-white flex items-center md:flex-row flex-col  gap-9">
                            <li ><Link href={"/"} >Home</Link></li>
                            <li ><Link href={"/"} >HEADPHONES</Link></li>
                            <li ><Link href={"/"} >SPEAKERS</Link></li>
                            <li ><Link href={"/"} >EARPHONES</Link></li>
                        </ul>

                    </div>
                    <div className="w-full flex flex-wrap justify-between items-end">
                        <p className="body text-white text-opacity-50 lg:w-1/2 w-full order-1">
                            Audiophile is an all in one stop to fulfill your audio needs.
                            We’re a small team of music lovers and sound specialists who are devoted
                            to helping you get the most out of personal audio. Come and visit our demo facility -
                            we’re open 7 days a week.
                        </p>
                        <ul className="flex items-center md:justify-end justify-center gap-6 order-3 w-full md:w-fit">
                            <li >
                                <Link href={"/"} >
                                    <i className="w-6 h-6 block bg-white hover:bg-d8" style={{
                                        mask: "url(./assets/shared/desktop/icon-facebook.svg) center / cover no-repeat",
                                        WebkitMask: "url(./assets/shared/desktop/icon-facebook.svg) center / cover no-repeat",
                                    }}></i>
                                </Link>
                            </li>
                            <li >
                                <Link href={"/"} >
                                    <i className="w-6 h-6 block bg-white hover:bg-d8" style={{
                                        mask: "url(./assets/shared/desktop/icon-twitter.svg) center / cover no-repeat",
                                        WebkitMask: "url(./assets/shared/desktop/icon-twitter.svg) center / cover no-repeat",
                                    }}></i>
                                </Link>
                            </li>
                            <li >
                                <Link href={"/"} >
                                    <i className="w-6 h-6 block bg-white hover:bg-d8" style={{
                                        mask: "url(./assets/shared/desktop/icon-instagram.svg) center / cover no-repeat",
                                        WebkitMask: "url(./assets/shared/desktop/icon-instagram.svg) center / cover no-repeat",
                                    }}></i>
                                </Link>
                            </li>
                        </ul>
                        <span className="body text-white text-opacity-50 block mt-14 lg:w-full md:w-fit w-full mb-8 md:mb-0 lg:order-3 order-2 text-center md:text-left"> Copyright 2025. Tran Thanh Danh</span>
                    </div>
                </div>
            </div>
        </footer>
    </>
})
Footer.displayName = "Footer"
export default Footer