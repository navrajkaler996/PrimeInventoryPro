// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import {
  departmentData,
  subDepartmentData,
  productsData,
  employeeData,
  inventoryRequestData,
} from './data/data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  //deleting all the records
  const deleteInventoryRequests = await prisma.inventoryRequest.deleteMany();
  const deleteEmployee = await prisma.employee.deleteMany();

  const deleteDepartments = await prisma.department.deleteMany({});
  const deleteSubDepartments = await prisma.subDepartment.deleteMany({});
  const deleteProducts = await prisma.product.deleteMany({});

  // create two dummy departments
  const departments = await prisma.department.createMany({
    data: departmentData,
  });

  const subDepartments = await prisma.subDepartment.createMany({
    data: subDepartmentData,
  });

  const updateDepartment1 = await prisma.department.update({
    where: { department_code: 'DEP001' },
    data: {
      total_sub_departments: await prisma.subDepartment.count({
        where: { department_code: 'DEP001' },
      }),
    },
  });

  const updateDepartment2 = await prisma.department.update({
    where: { department_code: 'DEP002' },
    data: {
      total_sub_departments: await prisma.subDepartment.count({
        where: { department_code: 'DEP002' },
      }),
    },
  });

  const productDataLowerCase = productsData?.map((product) => {
    return {
      ...product,
      product_name: product.product_name?.toLowerCase(),
    };
  });
  const freshProducts = await prisma.product.createMany({
    data: productDataLowerCase,
  });

  const employees = await prisma.employee.createMany({
    data: employeeData,
  });

  const inventoryRequests = await prisma.inventoryRequest.createMany({
    data: inventoryRequestData,
  });

  console.log({ deleteDepartments });
  console.log({ deleteSubDepartments });
  console.log({ deleteProducts });
  console.log({ deleteEmployee });
  console.log({ deleteInventoryRequests });
  console.log({ departments });
  console.log({ subDepartments });
  console.log({ updateDepartment1 });
  console.log({ updateDepartment2 });
  console.log({ freshProducts });
  console.log({ employees });
  console.log({ inventoryRequests });
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
