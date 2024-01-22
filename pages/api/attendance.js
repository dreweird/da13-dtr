// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function handler(req, res) {
  const allUsers = await prisma.attendance.findMany()
  console.log(allUsers)
}
