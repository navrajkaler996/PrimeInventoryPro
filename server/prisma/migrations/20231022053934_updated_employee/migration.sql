/*
  Warnings:

  - You are about to drop the column `employee_department` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "employee_department",
ADD COLUMN     "employee_department_code" TEXT NOT NULL DEFAULT '';
