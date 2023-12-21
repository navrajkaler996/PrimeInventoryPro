import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReceivingService {
  constructor(private prisma: PrismaService) {}

  findReceivingReportsByStoreCode(
    store_code: String,
    cursor: any | undefined,
    count: number,
    body: any,
  ) {
    //If cursor is available.
    //It won't be available for the first API call.
    if (cursor != 'undefined') {
      return this.prisma.receivingReports.findMany({
        take: Number(count),
        skip: 1,
        cursor: {
          report_id: Number(cursor),
        },
        where: {
          store_code: store_code?.toUpperCase(),
          ...body,
        },
      });
    }
    //If cursor is not available.
    else {
      return this.prisma.receivingReports.findMany({
        where: {
          store_code: store_code?.toUpperCase(),
        },
        take: Number(count),
      });
    }
  }
}
