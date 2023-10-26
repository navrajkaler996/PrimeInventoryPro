/*
  Warnings:

  - Changed the type of `request_by_employee_id` on the `InventoryRequest` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "InventoryRequest" DROP COLUMN "request_by_employee_id",
ADD COLUMN     "request_by_employee_id" INTEGER NOT NULL,
ALTER COLUMN "request_by_email" SET DATA TYPE TEXT;
