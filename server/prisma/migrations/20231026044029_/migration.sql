-- CreateTable
CREATE TABLE "InventoryRequest" (
    "request_id" SERIAL NOT NULL,
    "request_type" TEXT NOT NULL DEFAULT '',
    "request_by" TEXT NOT NULL,
    "request_by_email" TEXT NOT NULL,
    "request" TEXT NOT NULL,
    "request_department_code" TEXT NOT NULL,
    "request_sub_department_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryRequest_pkey" PRIMARY KEY ("request_id")
);

-- AddForeignKey
ALTER TABLE "InventoryRequest" ADD CONSTRAINT "InventoryRequest_request_department_code_fkey" FOREIGN KEY ("request_department_code") REFERENCES "Department"("department_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryRequest" ADD CONSTRAINT "InventoryRequest_request_sub_department_code_fkey" FOREIGN KEY ("request_sub_department_code") REFERENCES "SubDepartment"("sub_department_code") ON DELETE RESTRICT ON UPDATE CASCADE;
