-- CreateTable
CREATE TABLE "StoreSales" (
    "store_sales_id" SERIAL NOT NULL,
    "store_code" TEXT NOT NULL,
    "total_sales" INTEGER NOT NULL DEFAULT 0,
    "total_expenses" INTEGER NOT NULL DEFAULT 0,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "StoreSales_pkey" PRIMARY KEY ("store_sales_id")
);
