/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubDepartments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "SubDepartments";

-- CreateTable
CREATE TABLE "SubDepartment" (
    "sub_department_id" SERIAL NOT NULL,
    "sub_department_code" TEXT NOT NULL,
    "sub_department_name" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,
    "total_products" INTEGER NOT NULL,
    "total_products_quantity" INTEGER NOT NULL,
    "stock_alert" BOOLEAN NOT NULL,
    "sub_department_manager" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubDepartment_pkey" PRIMARY KEY ("sub_department_id")
);

-- CreateTable
CREATE TABLE "Product" (
    "product_id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total_quantity" INTEGER NOT NULL,
    "cap" INTEGER NOT NULL,
    "product_stock_alert" BOOLEAN NOT NULL DEFAULT false,
    "in_transit" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartment_sub_department_code_key" ON "SubDepartment"("sub_department_code");

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartment_sub_department_name_key" ON "SubDepartment"("sub_department_name");

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartment_department_id_key" ON "SubDepartment"("department_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_name_key" ON "Product"("product_name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_code_key" ON "Product"("product_code");
