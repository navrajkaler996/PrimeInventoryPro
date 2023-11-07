/*
  Warnings:

  - Added the required column `general_manager` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "general_manager" TEXT NOT NULL;
