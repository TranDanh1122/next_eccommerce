'use client'
import { useSearchParams } from "next/navigation";

export const useRoute = () => {
    const id = useSearchParams()
    return { id }
}