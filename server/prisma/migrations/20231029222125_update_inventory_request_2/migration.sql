/*
  Warnings:

  - You are about to drop the column `product_id` on the `InventoryRequest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_code]` on the table `InventoryRequest` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `product_code` to the `InventoryRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "InventoryRequest_product_id_key";

-- AlterTable
ALTER TABLE "InventoryRequest" DROP COLUMN "product_id",
ADD COLUMN     "product_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "InventoryRequest_product_code_key" ON "InventoryRequest"("product_code");
