import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data : {
        title : "Why Prisma ORM",
        content : "fjdbfidshif fhisfbbs shishfhissf dfsdbifshf",
        published: true,
        author: {
            connect : {
                id : 1
            }
        }
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
