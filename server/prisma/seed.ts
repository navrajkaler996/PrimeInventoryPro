// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const department1 = await prisma.department.upsert({
    where: { department_name: 'fresh' },
    update: {},
    create: {
      department_name: 'fresh',
    },
  });

  const department2 = await prisma.department.upsert({
    where: { department_name: 'general merchandise' },
    update: {},
    create: {
      department_name: 'general merchandise',
    },
  });

  console.log({ department1, department2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
