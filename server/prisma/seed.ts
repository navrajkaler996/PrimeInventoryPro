// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import {
  departmentData,
  subDepartmentData,
  productsData,
  employeeData,
  inventoryRequestData,
  storeData,
  salesData,
  receivingReportsData,
} from './data/data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function updateSubDepartments(data: any, sub_department_code: string) {
  try {
    const update = await prisma.subDepartment.update({
      where: {
        sub_department_code: sub_department_code,
      },
      data: {
        total_products: data.total_products,
        total_products_quantity: data.total_products_quantity,
        total_products_in_transit: data.total_products_in_transit,
      },
    });

    return update;
  } catch (error) {
    // Handle the error, log it, or throw a custom error as needed.
    console.error('Error updating sub-department:', error);
    throw error; // You can choose to rethrow the error or handle it differently.
  }
}

async function main() {
  //deleting all the records
  const deleteInventoryRequests = await prisma.inventoryRequest.deleteMany();
  const deleteEmployee = await prisma.employee.deleteMany();
  const deleteSubDepartments = await prisma.subDepartment.deleteMany();
  const deleteDepartments = await prisma.department.deleteMany();
  const deleteReceivingReports = await prisma.receivingReports.deleteMany();

  const deleteProducts = await prisma.product.deleteMany();
  const deleteStores = await prisma.store.deleteMany();

  const deleteSales = await prisma.sales.deleteMany();

  const stores = await prisma.store.createMany({
    data: storeData,
  });
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

  const products = await prisma.product.createMany({
    data: productDataLowerCase,
  });

  let freshProducts = productDataLowerCase.filter(
    (product) => product.department_code === 'DEP001',
  );

  const freshProductsCount = freshProducts.length;

  const freshProductsQuantity = freshProducts.reduce(
    (total, product) => product.total_quantity + total,
    0,
  );

  const freshProductsInTransit = freshProducts.reduce((total, product) => {
    if (product.in_transit) return total + 1;
    return total;
  }, 0);

  //Updating total products in fresh
  const updateFresh = await prisma.department.update({
    where: { department_code: 'DEP001' },
    data: {
      total_products: freshProductsCount,
      total_products_quantity: freshProductsQuantity,
      total_products_in_transit: freshProductsInTransit,
      total_sub_departments: 4,
    },
  });

  //Total products count in fresh sub departments
  const meatsProducts = freshProducts.filter(
    (product) => product.sub_department_code === 'FRE001',
  );

  const produceProducts = freshProducts.filter(
    (product) => product.sub_department_code === 'FRE002',
  );

  const dairyProducts = freshProducts.filter(
    (product) => product.sub_department_code === 'FRE003',
  );

  const bakeryProducts = freshProducts.filter(
    (product) => product.sub_department_code === 'FRE004',
  );

  const meatsProductCount = meatsProducts.length;
  const produceProductCount = produceProducts.length;
  const dairyProductCount = dairyProducts.length;
  const bakeryProductCount = bakeryProducts.length;

  const meatsProductQuantity = meatsProducts.reduce(
    (total, product) => total + product.total_quantity,
    0,
  );
  const produceProductQuantity = produceProducts.reduce(
    (total, product) => total + product.total_quantity,
    0,
  );
  const dairyProductQuantity = dairyProducts.reduce(
    (total, product) => total + product.total_quantity,
    0,
  );
  const bakeryProductQuantity = bakeryProducts.reduce(
    (total, product) => total + product.total_quantity,
    0,
  );

  const meatsProductsInTransit = meatsProducts.reduce((total, product) => {
    if (product.in_transit) return total + 1;
    return total;
  }, 0);

  const produceProductsInTransit = produceProducts.reduce((total, product) => {
    if (product.in_transit) return total + 1;
    return total;
  }, 0);

  const dairyProductsInTransit = dairyProducts.reduce((total, product) => {
    if (product.in_transit) return total + 1;
    return total;
  }, 0);

  const bakeryProductsInTransit = bakeryProducts.reduce((total, product) => {
    if (product.in_transit) return total + 1;
    return total;
  }, 0);

  const updateMeats = await updateSubDepartments(
    {
      total_products: meatsProductCount,
      total_products_quantity: meatsProductQuantity,
      total_products_in_transit: meatsProductsInTransit,
    },
    'FRE001',
  );

  const updateProduce = await updateSubDepartments(
    {
      total_products: produceProductCount,
      total_products_quantity: produceProductQuantity,
      total_products_in_transit: produceProductsInTransit,
    },
    'FRE002',
  );

  const updateDairy = await updateSubDepartments(
    {
      total_products: dairyProductCount,
      total_products_quantity: dairyProductQuantity,
      total_products_in_transit: dairyProductsInTransit,
    },
    'FRE003',
  );

  const updateBakery = await updateSubDepartments(
    {
      total_products: bakeryProductCount,
      total_products_quantity: bakeryProductQuantity,
      total_products_in_transit: bakeryProductsInTransit,
    },
    'FRE004',
  );

  // const generalMerchandiseProducts = productDataLowerCase.filter(
  //   (product) => product.department_code === 'DEP002',
  // ).length;

  // const generalMerchandiseProductsQuantity = freshProducts.reduce(
  //   (total, product) => product.total_quantity + total,
  //   0,
  // );

  const updateStore = await prisma.store.update({
    where: {
      store_code: 'STORE001',
    },
    data: {
      total_products: freshProductsCount,
      total_products_quantity: freshProductsQuantity,
      total_products_in_transit: freshProductsInTransit,
    },
  });

  const employees = await prisma.employee.createMany({
    data: employeeData,
  });

  const inventoryRequests = await prisma.inventoryRequest.createMany({
    data: inventoryRequestData,
  });

  const sales = await prisma.sales.createMany({
    data: salesData,
  });

  const receivingReports = await prisma.receivingReports.createMany({
    data: receivingReportsData,
  });

  console.log({ deleteDepartments });
  console.log({ deleteSubDepartments });
  console.log({ deleteProducts });
  console.log({ deleteEmployee });
  console.log({ deleteInventoryRequests });
  console.log({ deleteReceivingReports });
  console.log({ departments });
  console.log({ subDepartments });
  console.log({ updateDepartment1 });
  console.log({ updateDepartment2 });
  // console.log({ freshProducts });
  console.log({ employees });
  console.log({ inventoryRequests });
  console.log({ sales });
  console.log({ receivingReports });

  console.log({ updateFresh });
  console.log({ updateMeats });
  console.log({ updateProduce });
  console.log({ updateDairy });
  console.log({ updateBakery });
  console.log({ updateStore });
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
