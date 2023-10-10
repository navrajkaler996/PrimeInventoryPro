-- CreateTable
CREATE TABLE "Department" (
    "department_id" SERIAL NOT NULL,
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
    "total_quantity" INTEGER NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

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
