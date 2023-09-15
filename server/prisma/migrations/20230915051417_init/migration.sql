-- CreateTable
CREATE TABLE "Department" (
    "department_id" SERIAL NOT NULL,
    "department_code" TEXT NOT NULL,
    "department_name" TEXT NOT NULL,
    "total_sub_departments" TEXT NOT NULL,
    "total_products" INTEGER NOT NULL,
    "total_products_quantity" INTEGER NOT NULL,
    "stock_alerts" INTEGER NOT NULL,
    "direct_supervisor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "SubDepartments" (
    "sub_department_id" SERIAL NOT NULL,
    "sub_department_code" TEXT NOT NULL,
    "sub_department_name" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,
    "total_products" INTEGER NOT NULL,
    "total_products_quantity" INTEGER NOT NULL,
    "stock_alerts" INTEGER NOT NULL,
    "sub_department_manager" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubDepartments_pkey" PRIMARY KEY ("sub_department_id")
);

-- CreateTable
CREATE TABLE "Products" (
    "product_id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "total_quantity" INTEGER NOT NULL,
    "cap" INTEGER NOT NULL,
    "product_stock_alert" BOOLEAN NOT NULL DEFAULT false,
    "in_transit" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_department_code_key" ON "Department"("department_code");

-- CreateIndex
CREATE UNIQUE INDEX "Department_department_name_key" ON "Department"("department_name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_total_sub_departments_key" ON "Department"("total_sub_departments");

-- CreateIndex
CREATE UNIQUE INDEX "Department_direct_supervisor_key" ON "Department"("direct_supervisor");

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartments_sub_department_code_key" ON "SubDepartments"("sub_department_code");

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartments_sub_department_name_key" ON "SubDepartments"("sub_department_name");

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartments_department_id_key" ON "SubDepartments"("department_id");

-- CreateIndex
CREATE UNIQUE INDEX "Products_product_name_key" ON "Products"("product_name");

-- CreateIndex
CREATE UNIQUE INDEX "Products_product_code_key" ON "Products"("product_code");
