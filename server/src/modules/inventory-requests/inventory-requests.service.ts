import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindByEmployeeIdDto } from './dto/find-by-employee-id.dto';
import { AddToInventoryDto } from './dto/add-request.dto';
import { FindByRequestIdDto } from './dto/find-by-request-id.dto';
import { ChangeRequestStatusDto } from './dto/change-request-status.dto';

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
          status: 'PENDING_APPROVAL',
        },
        orderBy: {
          updatedAt: 'desc',
        },
      });
    } else {
      return this.prisma.inventoryRequest.findMany({
        take: Number(count),
        where: {
          request_for_employee_id: Number(employee_id),
          status: 'PENDING_APPROVAL',
        },
        orderBy: {
          updatedAt: 'desc',
        },
      });
    }
  }

  async findByRequestId(request_id: FindByRequestIdDto) {
    try {
      const data = await this.prisma.inventoryRequest.findUnique({
        where: {
          request_id: Number(request_id),
        },
      });

      return {
        status: 'success',
        data: data,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error,
      };
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

  async changeRequestStatus(
    request_id: ChangeRequestStatusDto,
    decision: boolean,
  ) {
    try {
      const status = decision ? 'APPROVED' : 'REJECTED';

      const data = await this.prisma.inventoryRequest.update({
        where: {
          request_id: Number(request_id),
        },
        data: {
          status: status,
        },
      });

      return {
        status: 'success',
        data: data,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error,
      };
    }
  }
}
