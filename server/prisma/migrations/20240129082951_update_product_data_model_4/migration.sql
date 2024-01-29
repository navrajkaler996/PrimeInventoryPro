-- DropForeignKey
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_product_code_fkey";

-- DropIndex
DROP INDEX "Product_product_code_key";

-- DropIndex
DROP INDEX "Product_product_name_key";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "store_code" TEXT NOT NULL DEFAULT 'XXXXXX';
