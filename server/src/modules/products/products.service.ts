import { Injectable } from '@nestjs/common';
import { take } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  DEPARTMENT_CODES_STARTING,
  STOCK_ALERT_TAKE,
  SUBDEPARTMENT_CODES_STARTINGS,
} from 'src/utils/constants';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  //FETCH PRODUCTS IN THE DEPARTMENT WHERE stock_alert IS true USING department_code OR sub_department_code AND count
  //////api/v1/product/stockalert/:department_code/:cursor/:count
  findStockAlertByDepartmentCode(
    department_code: String,
    cursor: any | undefined,
    count: number,
  ) {
    //If cursor is available.
    //It won't be available for the first API call.
    if (cursor != 'undefined') {
      //Fetching data for a department.
      if (department_code?.startsWith(DEPARTMENT_CODES_STARTING)) {
        return this.prisma.product.findMany({
          take: Number(count),
          skip: 1,
          cursor: {
            product_id: Number(cursor),
          },
          where: {
            department_code: department_code?.toUpperCase(),
            product_stock_alert: true,
          },
        });
      }

      //Fetching data for a subdepartment.
      if (
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.MEATS) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.PRODUCE) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.BAKERY) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.DIARY_FROZEN)
      ) {
        return this.prisma.product.findMany({
          take: Number(count),
          skip: 1,
          cursor: {
            product_id: Number(cursor),
          },
          where: {
            sub_department_code: department_code?.toUpperCase(),
            product_stock_alert: true,
          },
        });
      }
    }
    //If cursor is not available.
    else {
      //Fetching data for a department.
      if (department_code?.startsWith(DEPARTMENT_CODES_STARTING)) {
        return this.prisma.product.findMany({
          where: {
            department_code: department_code?.toUpperCase(),
            product_stock_alert: true,
          },
          take: Number(count),
        });
      }

      //Fetching data for a subdepartment.
      if (
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.MEATS) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.PRODUCE) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.BAKERY) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.DIARY_FROZEN)
      ) {
        return this.prisma.product.findMany({
          where: {
            sub_department_code: department_code?.toUpperCase(),
            product_stock_alert: true,
          },
          take: Number(count),
        });
      }
    }
  }

  //FETCH PRODUCTS WITH TOP SALES using department_code/sub_department_code and count
  //////api/v1/product/topsales/:department_code/:count
  findTopSalesByDepartmentCode(department_code: String, count: number) {
    //Fetching data for a department.
    if (department_code?.startsWith(DEPARTMENT_CODES_STARTING)) {
      return this.prisma.product.findMany({
        where: {
          department_code: department_code?.toUpperCase(),
        },
        orderBy: [
          {
            total_sales: 'desc',
          },
        ],
        take: Number(count),
      });
    }

    //Fetching data for a subdepartment.
    if (
      department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.MEATS) ||
      department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.PRODUCE) ||
      department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.BAKERY) ||
      department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.DIARY_FROZEN)
    ) {
      return this.prisma.product.findMany({
        where: {
          sub_department_code: department_code?.toUpperCase(),
        },
        orderBy: [
          {
            total_sales: 'desc',
          },
        ],
        take: 10,
      });
    }
  }

  findProductsByDepartmentCode(
    department_code: String,
    cursor: any | undefined,
    count: Number,
  ) {
    if (cursor != 'undefined') {
      if (department_code?.startsWith(DEPARTMENT_CODES_STARTING)) {
        return this.prisma.product.findMany({
          where: {
            department_code: department_code?.toUpperCase(),
          },
          skip: 1,
          take: Number(count),
          cursor: {
            product_id: Number(cursor),
          },
        });
      } else if (
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.MEATS) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.PRODUCE) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.BAKERY) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.DIARY_FROZEN)
      ) {
        return this.prisma.product.findMany({
          where: {
            sub_department_code: department_code?.toUpperCase(),
          },
          skip: 1,
          take: Number(count),
          cursor: {
            product_id: Number(cursor),
          },
        });
      }
    } else {
      if (department_code?.startsWith(DEPARTMENT_CODES_STARTING)) {
        return this.prisma.product.findMany({
          where: {
            department_code: department_code?.toUpperCase(),
          },
          take: Number(count),
        });
      } else if (
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.MEATS) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.PRODUCE) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.BAKERY) ||
        department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.DIARY_FROZEN)
      ) {
        return this.prisma.product.findMany({
          where: {
            sub_department_code: department_code?.toUpperCase(),
          },
          take: Number(count),
        });
      }
    }
  }

  findProductsByKeyword(keyword: string) {
    return this.prisma.product.findMany({
      where: {
        product_name: {
          contains: keyword?.toLowerCase(),
        },
      },
    });
  }
}
