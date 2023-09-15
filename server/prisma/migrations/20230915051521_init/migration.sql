/*
  Warnings:

  - The `total_sub_departments` column on the `Department` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Department_total_sub_departments_key";

-- AlterTable
ALTER TABLE "Department" DROP COLUMN "total_sub_departments",
ADD COLUMN     "total_sub_departments" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "SubDepartments" ALTER COLUMN "sub_department_manager" SET DATA TYPE TEXT;
