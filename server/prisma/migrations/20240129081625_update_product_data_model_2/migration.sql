-- DropForeignKey
ALTER TABLE "ProductData" DROP CONSTRAINT "ProductData_product_code_fkey";

-- AddForeignKey
ALTER TABLE "ProductData" ADD CONSTRAINT "ProductData_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "Product"("product_code") ON DELETE CASCADE ON UPDATE CASCADE;
