import { PrismaClient } from '@prisma/client'

//const prisma = new PrismaClient({log : ['info','query']}) to get sql queries log 
const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
        email: "vctanis@gmail.com",
        name : "Tanishqqqqq"
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
