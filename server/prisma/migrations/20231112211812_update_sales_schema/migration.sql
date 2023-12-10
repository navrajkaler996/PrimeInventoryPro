-- DropForeignKey
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_product_code_fkey";

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "Product"("product_code") ON DELETE CASCADE ON UPDATE CASCADE;
