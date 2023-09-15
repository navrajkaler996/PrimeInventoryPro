/*
  Warnings:

  - The primary key for the `Department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `department_id` on the `Department` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Department_department_code_key";

-- AlterTable
ALTER TABLE "Department" DROP CONSTRAINT "Department_pkey",
DROP COLUMN "department_id",
ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("department_code");
