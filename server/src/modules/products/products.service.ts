import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import {
  DEPARTMENT_CODES_STARTING,
  SEARCH_BY_PRODUCT_CODE_REGEX,
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

  //FETCH PRODUCTS BY TYPING A keyword IN THE SEARCH BAR.
  //////api/v1/product/search/:keyword
  /////Search is performed either by product_name or product_code.
  /////To search with product_code, entire value of the product_code is needed.
  /////To search with product_name, at least one character is needed
  findProductsByKeyword(keyword: string, department_code: string) {
    //When searching using a department code
    if (department_code?.startsWith(DEPARTMENT_CODES_STARTING)) {
      if (SEARCH_BY_PRODUCT_CODE_REGEX.test(keyword)) {
        return this.prisma.product.findMany({
          where: {
            department_code: department_code.toUpperCase(),
            product_code: keyword,
          },
        });
      } else {
        return this.prisma.product.findMany({
          where: {
            department_code: department_code.toUpperCase(),
            product_name: {
              contains: keyword?.toLowerCase(),
            },
          },
        });
      }
    }
    //When search using a subdepartment's code
    else if (
      department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.MEATS) ||
      department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.PRODUCE) ||
      department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.BAKERY) ||
      department_code?.startsWith(SUBDEPARTMENT_CODES_STARTINGS.DIARY_FROZEN)
    ) {
      if (SEARCH_BY_PRODUCT_CODE_REGEX.test(keyword)) {
        return this.prisma.product.findMany({
          where: {
            sub_department_code: department_code,
            product_code: keyword,
          },
        });
      } else {
        return this.prisma.product.findMany({
          where: {
            sub_department_code: department_code,
            product_name: {
              contains: keyword?.toLowerCase(),
            },
          },
        });
      }
    }
  }

  async add(data: any) {
    try {
      const response = await this.findLastProductCode(data.sub_department_code);
      let lastProductCode;
      if (response?.length > 0) {
        lastProductCode = response[0].product_code;
        console.log(lastProductCode);
        let newProductCode =
          lastProductCode.slice(0, 6) + (Number(lastProductCode.slice(-3)) + 1);
        console.log(newProductCode);
        if (newProductCode.length < 9) {
          newProductCode =
            newProductCode.slice(0, 6) + 0 + newProductCode.slice(-2);
        }

        data.product_code = newProductCode;

        const createdProduct = await this.prisma.product.create({
          data: data,
        });

        console.log(createdProduct);
        return createdProduct;
      }
    } catch (e) {
      // return e;
      console.log(e);
      return e;
    }
  }

  findProductByProductCode(product_code: string) {
    console.log(product_code);
    return this.prisma.product.findFirst({
      where: {
        product_code: product_code.toUpperCase(),
      },
    });
  }

  //helpers
  async findLastProductCode(sub_department_code: string) {
    const data = await this.prisma.product.findMany({
      where: {
        sub_department_code: sub_department_code,
      },
      orderBy: {
        product_code: 'desc',
      },
      take: 1,
    });

    return data;
  }
}
