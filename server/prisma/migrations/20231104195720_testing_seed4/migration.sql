-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_store_code_fkey";

-- DropForeignKey
ALTER TABLE "InventoryRequest" DROP CONSTRAINT "InventoryRequest_request_department_code_fkey";

-- DropForeignKey
ALTER TABLE "InventoryRequest" DROP CONSTRAINT "InventoryRequest_request_for_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "InventoryRequest" DROP CONSTRAINT "InventoryRequest_request_sub_department_code_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_department_code_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_sub_department_code_fkey";

-- DropForeignKey
ALTER TABLE "SubDepartment" DROP CONSTRAINT "SubDepartment_department_code_fkey";

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_store_code_fkey" FOREIGN KEY ("store_code") REFERENCES "Store"("store_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubDepartment" ADD CONSTRAINT "SubDepartment_department_code_fkey" FOREIGN KEY ("department_code") REFERENCES "Department"("department_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sub_department_code_fkey" FOREIGN KEY ("sub_department_code") REFERENCES "SubDepartment"("sub_department_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_department_code_fkey" FOREIGN KEY ("department_code") REFERENCES "Department"("department_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryRequest" ADD CONSTRAINT "InventoryRequest_request_department_code_fkey" FOREIGN KEY ("request_department_code") REFERENCES "Department"("department_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryRequest" ADD CONSTRAINT "InventoryRequest_request_sub_department_code_fkey" FOREIGN KEY ("request_sub_department_code") REFERENCES "SubDepartment"("sub_department_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryRequest" ADD CONSTRAINT "InventoryRequest_request_for_employee_id_fkey" FOREIGN KEY ("request_for_employee_id") REFERENCES "Employee"("employee_id") ON DELETE CASCADE ON UPDATE CASCADE;
