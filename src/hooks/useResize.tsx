import React from "react";
export const useResize = (callback: (...args: unknown[]) => void, ...args: unknown[]) => {
    React.useEffect(() => {
        const handleCallBack = () => {
            callback(...args)
        }
        window.addEventListener("resize", () => handleCallBack)
        return () => window.removeEventListener("resize", () => handleCallBack)
    }, [])
}