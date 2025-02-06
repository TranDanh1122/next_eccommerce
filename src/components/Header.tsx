'use client'
import { useToggle } from "@/hooks/useToogle"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Categories from "./Categories"

const Header = React.memo((): React.JSX.Element => {
    const { open, toogle } = useToggle()

    return <>
        <header className="bg-black relative z-10">
            <nav className="container flex justify-between items-center border-b-[1px] border-solid border-white/20">
                <i onClick={() => toogle(!open)} className="block lg:hidden w-4 h-4 bg-white" style={{
                    mask: "url(/assets/shared/tablet/icon-hamburger.svg) center / cover no-repeat",
                    WebkitMask: "url(/assets/shared/tablet/icon-hamburger.svg) center / cover no-repeat",
                }}></i>
                <Link href={"/"}>
                    <Image priority objectFit="cover" src="./assets/shared/desktop/logo.svg" alt="logo" className="py-10" width={143} height={25} />
                </Link>
                <ul className="text-[13px] hidden lg:flex leading-loose tracking-[2px] font-bold uppercase text-white items-center justify-start gap-9">
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
                {open && <div className="h-fit absolute w-full top-full left-0 z-20 bg-white px-10 py-16 ">
                    <Categories />
                </div>}
                {open && <div onClick={() => toogle(false)} className="absolute w-screen h-screen bg-black/40 left-0 top-full"></div>}
            </nav>
        </header>
    </>
})
Header.displayName = "Header"
export default Header