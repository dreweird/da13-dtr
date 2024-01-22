import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const handler = async (req, res)=>{
    const pip = await prisma.attendance.findMany()
        res.status(200).json(pip)
    
}

export default handler
