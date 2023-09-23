import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  DEPARTMENT_CODES_STARTING,
  STOCK_ALERT_TAKE,
  SUBDEPARTMENT_CODES_STARTINGS,
} from 'src/utils/constants';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  //FETCH All PRODUCTS IN THE DEPARTMENT WHERE stock_alert IS true USING department_code OR sub_department_code
  //////api/v1/product/stockalert/:department_code/:cursor
  findByDepartmentCode(department_code: String, cursor: any | undefined) {
    //If cursor is available.
    //It won't be available for the first API call.
    if (cursor != 'undefined') {
      //Fetching data for a department.
      if (department_code?.startsWith(DEPARTMENT_CODES_STARTING)) {
        return this.prisma.product.findMany({
          take: STOCK_ALERT_TAKE,
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
          take: STOCK_ALERT_TAKE,
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
          take: STOCK_ALERT_TAKE,
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
          take: STOCK_ALERT_TAKE,
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
}
