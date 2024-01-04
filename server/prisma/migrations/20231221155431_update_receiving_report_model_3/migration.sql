/*
  Warnings:

  - You are about to drop the column `store_id` on the `ReceivingReports` table. All the data in the column will be lost.
  - Added the required column `store_code` to the `ReceivingReports` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ReceivingReports" DROP CONSTRAINT "ReceivingReports_store_id_fkey";

-- AlterTable
ALTER TABLE "ReceivingReports" DROP COLUMN "store_id",
ADD COLUMN     "store_code" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ReceivingReports" ADD CONSTRAINT "ReceivingReports_store_code_fkey" FOREIGN KEY ("store_code") REFERENCES "Store"("store_code") ON DELETE CASCADE ON UPDATE CASCADE;
