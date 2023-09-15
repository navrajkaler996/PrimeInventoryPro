/*
  Warnings:

  - Changed the type of `sub_department_manager` on the `SubDepartments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SubDepartments" DROP COLUMN "sub_department_manager",
ADD COLUMN     "sub_department_manager" INTEGER NOT NULL;
