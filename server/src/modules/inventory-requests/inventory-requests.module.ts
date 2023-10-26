import { Module } from '@nestjs/common';
import { InventoryRequestsService } from './inventory-requests.service';
import { InventoryRequestsController } from './inventory-requests.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InventoryRequestsController],
  providers: [InventoryRequestsService],
})
export class InventoryRequestsModule {}
