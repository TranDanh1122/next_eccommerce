'use client'
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Header = React.memo((): React.JSX.Element => {
    return <>
        <header className="bg-black relative z-10">
            <nav className="container flex justify-between items-center border-b-[1px] border-solid border-white/20">
                <Link href={"/"}>
                    <Image priority objectFit="cover" src="./assets/shared/desktop/logo.svg" alt="logo" className="py-10" width={143} height={25} />
                </Link>
                <ul className="text-[13px] leading-loose tracking-[2px] font-bold uppercase text-white flex items-center justify-start gap-9">
                    <li ><Link href={"/"} >Home</Link></li>
                    <li ><Link href={"/"} >HEADPHONES</Link></li>
                    <li ><Link href={"/"} >SPEAKERS</Link></li>
                    <li ><Link href={"/"} >EARPHONES</Link></li>
                </ul>
                <i className="w-6 h-5 block bg-white" style={{
                    mask: "url(./assets/shared/desktop/icon-cart.svg) center / cover no-repeat",
                    WebkitMask: "url(./assets/shared/desktop/icon-cart.svg) center / cover no-repeat",
                }}>
                </i>
            </nav>
        </header>
    </>
})
Header.displayName = "Header"
export default Header