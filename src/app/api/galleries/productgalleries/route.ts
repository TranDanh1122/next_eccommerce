import prisma from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "POST") {
        try {
            const galleries = await prisma.galleries.findMany({ where: req.body })
            return res.status(200).json(galleries)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }
}