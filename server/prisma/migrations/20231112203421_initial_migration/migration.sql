-- CreateTable
CREATE TABLE "Store" (
    "store_id" SERIAL NOT NULL,
    "store_code" TEXT NOT NULL,
    "store_name" TEXT NOT NULL,
    "general_manager" TEXT NOT NULL,
    "total_departments" INTEGER NOT NULL,
    "total_sub_departments" INTEGER NOT NULL,
    "total_products" INTEGER NOT NULL,
    "total_products_quantity" INTEGER NOT NULL,
    "total_products_in_transit" INTEGER NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("store_id")
);

-- CreateTable
CREATE TABLE "Department" (
    "department_id" SERIAL NOT NULL,
    "store_code" TEXT NOT NULL,
    "department_code" TEXT NOT NULL,
    "department_name" TEXT NOT NULL,
    "total_sub_departments" INTEGER NOT NULL DEFAULT 0,
    "total_products" INTEGER NOT NULL,
    "total_products_quantity" INTEGER NOT NULL,
    "total_products_in_transit" INTEGER NOT NULL DEFAULT 0,
    "stock_alert" BOOLEAN NOT NULL,
    "direct_supervisor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "SubDepartment" (
    "sub_department_id" SERIAL NOT NULL,
    "sub_department_code" TEXT NOT NULL,
    "sub_department_name" TEXT NOT NULL,
    "department_code" TEXT NOT NULL,
    "department_name" TEXT NOT NULL DEFAULT 'department',
    "total_products" INTEGER NOT NULL,
    "total_products_quantity" INTEGER NOT NULL,
    "total_products_in_transit" INTEGER NOT NULL DEFAULT 0,
    "stock_alert" BOOLEAN NOT NULL,
    "sub_department_manager" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubDepartment_pkey" PRIMARY KEY ("sub_department_id")
);

-- CreateTable
CREATE TABLE "Product" (
    "product_id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total_quantity" INTEGER NOT NULL DEFAULT 0,
    "cap" INTEGER NOT NULL,
    "product_stock_alert" BOOLEAN NOT NULL DEFAULT false,
    "in_transit" BOOLEAN NOT NULL DEFAULT false,
    "sub_department_code" TEXT NOT NULL DEFAULT 'XXXXXX',
    "department_code" TEXT NOT NULL DEFAULT 'XXXXXX',
    "total_sales" INTEGER NOT NULL DEFAULT 0,
    "base_price" INTEGER NOT NULL DEFAULT 0,
    "selling_price" INTEGER NOT NULL DEFAULT 0,
    "manufacturer" TEXT NOT NULL DEFAULT '',
    "brand" TEXT NOT NULL DEFAULT '',
    "case_pack" INTEGER NOT NULL DEFAULT 0,
    "pending_approval" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" SERIAL NOT NULL,
    "employee_name" TEXT NOT NULL DEFAULT '',
    "employee_email" TEXT NOT NULL,
    "employee_designation" TEXT NOT NULL DEFAULT '',
    "employee_role" TEXT NOT NULL DEFAULT '',
    "employee_department_code" TEXT NOT NULL DEFAULT '',
    "employee_password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "InventoryRequest" (
    "request_id" SERIAL NOT NULL,
    "request_type" TEXT NOT NULL DEFAULT '',
    "request_by_name" TEXT NOT NULL,
    "request_by_employee_id" INTEGER NOT NULL,
    "request_for_employee_id" INTEGER NOT NULL DEFAULT 7,
    "request_by_email" TEXT NOT NULL,
    "request" TEXT NOT NULL,
    "request_department_code" TEXT NOT NULL,
    "request_sub_department_code" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING APPROVAL',
    "product_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryRequest_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "Sales" (
    "sales_id" SERIAL NOT NULL,
    "product_code" TEXT NOT NULL,
    "sale_amount" INTEGER NOT NULL DEFAULT 0,
    "sale_month" INTEGER NOT NULL,
    "sale_year" INTEGER NOT NULL,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("sales_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Store_store_code_key" ON "Store"("store_code");

-- CreateIndex
CREATE UNIQUE INDEX "Department_department_code_key" ON "Department"("department_code");

-- CreateIndex
CREATE UNIQUE INDEX "Department_department_name_key" ON "Department"("department_name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_direct_supervisor_key" ON "Department"("direct_supervisor");

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartment_sub_department_code_key" ON "SubDepartment"("sub_department_code");

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartment_sub_department_name_key" ON "SubDepartment"("sub_department_name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_name_key" ON "Product"("product_name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_code_key" ON "Product"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employee_email_key" ON "Employee"("employee_email");

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

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "Product"("product_code") ON DELETE RESTRICT ON UPDATE CASCADE;
