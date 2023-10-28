-- AlterTable
ALTER TABLE "InventoryRequest" ADD COLUMN     "request_for_employee_id" INTEGER NOT NULL DEFAULT 7;

-- AddForeignKey
ALTER TABLE "InventoryRequest" ADD CONSTRAINT "InventoryRequest_request_for_employee_id_fkey" FOREIGN KEY ("request_for_employee_id") REFERENCES "Employee"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;
