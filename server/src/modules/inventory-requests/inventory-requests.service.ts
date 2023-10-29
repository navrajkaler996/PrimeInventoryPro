import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindByEmployeeIdDto } from './dto/find-by-employee-id.dto';
import { AddToInventoryDto } from './dto/add-request.dto';

@Injectable()
export class InventoryRequestsService {
  constructor(private prisma: PrismaService) {}

  findByEmployeeId(
    employee_id: string,
    cursor: string | undefined,
    count: number,
  ) {
    if (cursor != 'undefined') {
      return this.prisma.inventoryRequest.findMany({
        take: Number(count),
        skip: 1,
        cursor: {
          request_id: Number(cursor),
        },
        where: {
          request_for_employee_id: Number(employee_id),
        },
      });
    } else {
      return this.prisma.inventoryRequest.findMany({
        take: Number(count),
        where: {
          request_for_employee_id: Number(employee_id),
        },
      });
    }
  }

  async addRequest(data: AddToInventoryDto) {
    try {
      const response = await this.prisma.inventoryRequest.create({
        data: data,
      });

      return response;
    } catch (error) {
      return error;
    }
  }
}
