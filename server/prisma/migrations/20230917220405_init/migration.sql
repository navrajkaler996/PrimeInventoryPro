-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "total_products_in_transit" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "SubDepartment" ADD COLUMN     "total_products_in_transit" INTEGER NOT NULL DEFAULT 0;
