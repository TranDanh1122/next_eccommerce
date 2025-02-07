import prisma from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        try {
            const categories = await prisma.category.findMany()
            return res.status(200).json(categories)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
    if (req.method == "POST") {
        try {
            const category = await prisma.category.create({ data: req.body })
            return res.status(200).json(category)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
}