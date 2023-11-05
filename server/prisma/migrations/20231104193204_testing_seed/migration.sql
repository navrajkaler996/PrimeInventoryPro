/*
  Warnings:

  - Added the required column `store_code` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "store_code" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Store" (
    "store_id" SERIAL NOT NULL,
    "store_code" TEXT NOT NULL,
    "total_departments" INTEGER NOT NULL,
    "total_sub_departments" INTEGER NOT NULL,
    "total_products" INTEGER NOT NULL,
    "total_products_quantity" INTEGER NOT NULL,
    "total_products_in_transit" INTEGER NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("store_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_store_code_key" ON "Store"("store_code");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_store_code_fkey" FOREIGN KEY ("store_code") REFERENCES "Store"("store_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubDepartment" ADD CONSTRAINT "SubDepartment_department_code_fkey" FOREIGN KEY ("department_code") REFERENCES "Department"("department_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sub_department_code_fkey" FOREIGN KEY ("sub_department_code") REFERENCES "SubDepartment"("sub_department_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_department_code_fkey" FOREIGN KEY ("department_code") REFERENCES "Department"("department_code") ON DELETE RESTRICT ON UPDATE CASCADE;
