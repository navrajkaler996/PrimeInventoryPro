/*
  Warnings:

  - A unique constraint covering the columns `[request_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_request_id_key" ON "Product"("request_id");
