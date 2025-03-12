import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const pip = await prisma.$queryRaw`SELECT distinct(name) from inoutdata2`
    res.status(200).json(pip);
};

export default handler;
