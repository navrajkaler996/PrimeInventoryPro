-- AlterTable
ALTER TABLE "InventoryRequest" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING APPROVAL';

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "pending_approval" BOOLEAN NOT NULL DEFAULT true;
