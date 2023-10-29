/*
  Warnings:

  - You are about to drop the column `request_id` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_id]` on the table `InventoryRequest` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `product_id` to the `InventoryRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InventoryRequest" ADD COLUMN     "product_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "request_id";

-- CreateIndex
CREATE UNIQUE INDEX "InventoryRequest_product_id_key" ON "InventoryRequest"("product_id");
