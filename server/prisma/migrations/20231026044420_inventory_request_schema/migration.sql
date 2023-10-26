/*
  Warnings:

  - You are about to drop the column `request_by_employee_code` on the `InventoryRequest` table. All the data in the column will be lost.
  - Added the required column `request_by_employee_id` to the `InventoryRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InventoryRequest" DROP COLUMN "request_by_employee_code",
ADD COLUMN     "request_by_employee_id" TEXT NOT NULL;
