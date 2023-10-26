import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventoryRequestsService {
  constructor(private prisma: PrismaService) {}

  findByEmployeeId(employee_id: string) {
    return this.prisma.inventoryRequest.findMany({
      where: {
        request_by_employee_id: employee_id,
      },
    });
  }
}
