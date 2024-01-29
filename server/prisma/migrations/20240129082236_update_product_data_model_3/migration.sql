/*
  Warnings:

  - You are about to drop the `ProductData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductData" DROP CONSTRAINT "ProductData_product_code_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "in_transit" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "product_stock_alert" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "total_quantity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "total_sales" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "ProductData";
