import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  //FETCH All PRODUCTS IN THE DEPARTMENT WHERE stock_alert IS true USING department_code
  //////api/v1/stockalert/product/:department_code
  findByDepartmentCode(department_code: String) {
    return this.prisma.product.findMany({
      where: {
        department_code: department_code?.toUpperCase(),
        product_stock_alert: true,
      },
    });
  }
}
