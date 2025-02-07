import prisma from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    if (req.method == "GET") {
        try {
            const product = await prisma.product.findUniqueOrThrow({ where: { id: id as string } })
            return res.status(200).json(product)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
    if (req.method == "PUT") {
        try {
            const product = await prisma.product.update({ where: { id: id as string }, data: req.body })
            return res.status(200).json(product)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
    if (req.method == "DELETE") {
        try {
            const product = await prisma.product.delete({ where: { id: id as string } })
            return res.status(200).json(product)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }

}