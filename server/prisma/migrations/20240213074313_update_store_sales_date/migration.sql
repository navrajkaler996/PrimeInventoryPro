/*
  Warnings:

  - You are about to drop the column `month` on the `StoreSales` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `StoreSales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StoreSales" DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "sales_date" TEXT NOT NULL DEFAULT '';
