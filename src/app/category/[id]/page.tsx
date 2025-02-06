'use client'
import Categories from "@/components/Categories"
import FooterInfo from "@/components/FooterInfo"
import ProductItem from "@/components/ProductItem"
import { useRoute } from "@/hooks/useRouter"
import React from "react"
export default function CategoryDetail() {
    const { id } = useRoute()
    return <>
        <main>
            <div className="py-28 bg-black">
                <h1 className="text-white h2 text-center">HEADPHONES</h1>
            </div>
            <section className="container flex flex-col gap-40 py-40">
                <ProductItem isNew={true} />
                <ProductItem isNew={false} type="reverse" />
                <ProductItem isNew={false} />

            </section>
            <section className="container">
                <Categories />
            </section>
            <FooterInfo />
        </main>
    </>
}
