/*
  Warnings:

  - You are about to drop the column `in_transit` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_stock_alert` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `total_quantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `total_sales` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "in_transit",
DROP COLUMN "product_stock_alert",
DROP COLUMN "total_quantity",
DROP COLUMN "total_sales";

-- CreateTable
CREATE TABLE "ProductData" (
    "product_data_id" SERIAL NOT NULL,
    "product_code" TEXT NOT NULL,
    "store_code" TEXT NOT NULL,
    "total_quantity" INTEGER NOT NULL DEFAULT 0,
    "product_stock_alert" BOOLEAN NOT NULL DEFAULT false,
    "in_transit" BOOLEAN NOT NULL DEFAULT false,
    "total_sales" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProductData_pkey" PRIMARY KEY ("product_data_id")
);

-- AddForeignKey
ALTER TABLE "ProductData" ADD CONSTRAINT "ProductData_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "Product"("product_code") ON DELETE RESTRICT ON UPDATE CASCADE;
