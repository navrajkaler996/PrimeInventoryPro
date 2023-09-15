/*
  Warnings:

  - The primary key for the `Department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[department_code]` on the table `Department` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Department" DROP CONSTRAINT "Department_pkey",
ADD COLUMN     "department_id" SERIAL NOT NULL,
ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id");

-- CreateIndex
CREATE UNIQUE INDEX "Department_department_code_key" ON "Department"("department_code");
