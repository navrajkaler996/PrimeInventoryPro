/*
  Warnings:

  - You are about to drop the column `stock_alerts` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `stock_alerts` on the `SubDepartments` table. All the data in the column will be lost.
  - Added the required column `stock_alert` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock_alert` to the `SubDepartments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Department" DROP COLUMN "stock_alerts",
ADD COLUMN     "stock_alert" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "SubDepartments" DROP COLUMN "stock_alerts",
ADD COLUMN     "stock_alert" BOOLEAN NOT NULL;
