'use client'
import React from "react"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"

const Quantity = (): React.JSX.Element => {
    return <>
        <div className="flex items-center">
            <Button variant="outline" className="rounded-none h-full font-bold border-none bg-f1 hover:text-d8"> - </Button>
            <Input value={0} className="rounded-none focus-visible:ring-0 h-full text-center border-none bg-f1 font-bold" />
            <Button variant="outline" className="rounded-none h-full font-bold border-none bg-f1 hover:text-d8"> + </Button>
        </div>
    </>
}
Quantity.displayName = "Quantity"
Quantity.whyDidYouRender = true;

export default Quantity
