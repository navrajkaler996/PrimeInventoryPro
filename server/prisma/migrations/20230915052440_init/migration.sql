/*
  Warnings:

  - You are about to drop the column `department_id` on the `SubDepartment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[department_code]` on the table `SubDepartment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `department_code` to the `SubDepartment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SubDepartment_department_id_key";

-- AlterTable
ALTER TABLE "SubDepartment" DROP COLUMN "department_id",
ADD COLUMN     "department_code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartment_department_code_key" ON "SubDepartment"("department_code");
