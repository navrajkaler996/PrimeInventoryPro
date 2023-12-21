/*
  Warnings:

  - Added the required column `store_code` to the `ReceivingReports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReceivingReports" ADD COLUMN     "store_code" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ReceivingReports" ADD CONSTRAINT "ReceivingReports_store_code_fkey" FOREIGN KEY ("store_code") REFERENCES "Store"("store_code") ON DELETE CASCADE ON UPDATE CASCADE;
