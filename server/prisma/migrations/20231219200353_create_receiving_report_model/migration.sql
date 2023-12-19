-- CreateTable
CREATE TABLE "ReceivingReports" (
    "required_id" SERIAL NOT NULL,
    "truck_number" TEXT NOT NULL,
    "trucking_company" TEXT NOT NULL,
    "received" BOOLEAN NOT NULL,
    "unloaded" BOOLEAN NOT NULL,
    "received_at" TEXT NOT NULL,
    "total_products_quantity_expected" INTEGER NOT NULL DEFAULT 0,
    "total_products_quantity_received" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ReceivingReports_pkey" PRIMARY KEY ("required_id")
);
