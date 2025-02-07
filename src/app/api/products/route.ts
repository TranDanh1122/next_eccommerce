import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/utils/prisma";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        try {
            const products = await prisma.product.findMany()
            return res.status(200).json(products)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
    if (req.method == "POST") {
        try {
            const newProduct = await prisma.product.create({ data: req.body })
            return res.status(201).json(newProduct)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
} 