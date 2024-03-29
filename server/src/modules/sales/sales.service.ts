import { Injectable } from '@nestjs/common';
import { salesData } from 'prisma/data/data';
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

  async findMonthlySales(store_code: string) {
    // const month = new Date().getMonth();
    // const year = new Date().getFullYear();
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    let thisYear = `${year}-${(month + 1).toString().padStart(2, '0')}-28`;

    let lastYear = `${year - 1}-${(month + 1).toString().padStart(2, '0')}-28`;

    const monthlySales = await this.prisma.storeSales.findMany({
      where: {
        store_code: store_code,
        OR: [{ sales_date: thisYear }, { sales_date: lastYear }],
      },
    });

    return {
      status: 'success',
      data: monthlySales,
    };
  }

  async findYearlySales(store_code: string) {
    try {
      const date = new Date();
      const month = date.getMonth();
      const year = date.getFullYear();

      let toDate = `${year}-${month}-28`;
      let fromDate = `${year - 1}-${month}-28`;

      const data = await this.prisma.storeSales.findMany({
        where: {
          store_code: store_code,
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
