/*
  Warnings:

  - You are about to drop the column `request_by` on the `InventoryRequest` table. All the data in the column will be lost.
  - Added the required column `request_by_employee_code` to the `InventoryRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `request_by_name` to the `InventoryRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InventoryRequest" DROP COLUMN "request_by",
ADD COLUMN     "request_by_employee_code" TEXT NOT NULL,
ADD COLUMN     "request_by_name" TEXT NOT NULL;
