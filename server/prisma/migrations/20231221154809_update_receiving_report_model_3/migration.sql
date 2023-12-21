/*
  Warnings:

  - You are about to drop the column `store_code` on the `ReceivingReports` table. All the data in the column will be lost.
  - Added the required column `store_id` to the `ReceivingReports` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ReceivingReports" DROP CONSTRAINT "ReceivingReports_store_code_fkey";

-- AlterTable
ALTER TABLE "ReceivingReports" DROP COLUMN "store_code",
ADD COLUMN     "store_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ReceivingReports" ADD CONSTRAINT "ReceivingReports_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "Store"("store_id") ON DELETE CASCADE ON UPDATE CASCADE;
