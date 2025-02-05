import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = React.memo((): React.JSX.Element => {
    return <>
        <footer className="bg-black">
            <div className="container pb-12 pt-20 ">
                <div className="flex justify-between">
                    <div className="w-1/2 flex flex-col justify-between">
                        <Link href={"/"}>
                            <Image loading="lazy" objectFit="cover" src="./assets/shared/desktop/logo.svg" alt="logo" className="py-10" width={143} height={25} />
                        </Link>
                        <p className="body text-white text-opacity-50">
                            Audiophile is an all in one stop to fulfill your audio needs.
                            We’re a small team of music lovers and sound specialists who are devoted
                            to helping you get the most out of personal audio. Come and visit our demo facility -
                            we’re open 7 days a week.
                        </p>
                    </div>
                    <div className="w-1/2 flex flex-col justify-between">
                        <ul className="text-[13px] leading-loose tracking-[2px] font-bold uppercase text-white flex items-center justify-end gap-9">
                            <li ><Link href={"/"} >Home</Link></li>
                            <li ><Link href={"/"} >HEADPHONES</Link></li>
                            <li ><Link href={"/"} >SPEAKERS</Link></li>
                            <li ><Link href={"/"} >EARPHONES</Link></li>
                        </ul>
                        <ul className="flex items-center justify-end gap-6">
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
                    </div>
                </div>
                <span className="body text-white text-opacity-50 block mt-14"> Copyright 2025. Tran Thanh Danh</span>
            </div>
        </footer>
    </>
})
Footer.displayName = "Footer"
export default Footer