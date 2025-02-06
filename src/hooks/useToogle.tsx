'use client'
import React from "react"
export const useToggle = () => {
    const [open, toogle] = React.useState<boolean>(false)

    return { open, toogle }
}