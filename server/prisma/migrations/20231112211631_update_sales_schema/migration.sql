/*
  Warnings:

  - You are about to drop the column `sale_amount` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `sale_month` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `sale_year` on the `Sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "sale_amount",
DROP COLUMN "sale_month",
DROP COLUMN "sale_year",
ADD COLUMN     "sales_amount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "sales_date" TEXT NOT NULL DEFAULT '';
