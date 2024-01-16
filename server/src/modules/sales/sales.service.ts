import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async findOneYearSales(product_code: string) {
    try {
      const date = new Date();
      const month = date.getMonth();
      const year = date.getFullYear();

      let toDate = `${year}-${month + 1}-28`;
      let fromDate = `${year - 1}-${month + 1}-28`;

      const data = await this.prisma.sales.findMany({
        where: {
          product_code: product_code,
          sales_date: {
            gte: new Date(fromDate).toISOString(),
            lte: new Date(toDate).toISOString(),
          },
        },
        take: 12,
      });

      return {
        status: 'success',
        data: data,
      };
    } catch (error) {
      return {
        status: 'error',
        error: error,
      };
    }
  }
}
