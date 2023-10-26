/*
  Warnings:

  - Changed the type of `request_by_email` on the `InventoryRequest` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "InventoryRequest" DROP COLUMN "request_by_email",
ADD COLUMN     "request_by_email" INTEGER NOT NULL;
