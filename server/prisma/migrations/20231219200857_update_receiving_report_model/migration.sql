/*
  Warnings:

  - The primary key for the `ReceivingReports` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `required_id` on the `ReceivingReports` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ReceivingReports" DROP CONSTRAINT "ReceivingReports_pkey",
DROP COLUMN "required_id",
ADD COLUMN     "report_id" SERIAL NOT NULL,
ADD CONSTRAINT "ReceivingReports_pkey" PRIMARY KEY ("report_id");
