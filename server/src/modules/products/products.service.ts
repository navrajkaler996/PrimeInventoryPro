import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  DEPARTMENT_CODES_STARTING,
  SUBDEPARTMENT_CODES_STARTINGS,
} from 'src/utils/constants';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  //FETCH All PRODUCTS IN THE DEPARTMENT WHERE stock_alert IS true USING department_code OR sub_department_code
  //////api/v1/stockalert/product/:department_code
  findByDepartmentCode(department_code: String) {
    //Fetching data for a department.
    if (department_code?.startsWith(DEPARTMENT_CODES_STARTING)) {
      return this.prisma.product.findMany({
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
        where: {
          sub_department_code: department_code?.toUpperCase(),
          product_stock_alert: true,
        },
      });
    }
  }
}