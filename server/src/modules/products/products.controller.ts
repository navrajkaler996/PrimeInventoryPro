import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/api/v1/product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //FETCH All PRODUCTS IN THE DEPARTMENT WHERE stock_alert IS true USING department_code
  //////api/v1/product/stockalert/:department_code
  @Get('/stockalert/:department_code/:page')
  findByDepartmentCode(
    @Param('department_code') department_code: String,
    @Param('page') page: String,
  ) {
    return this.productsService.findByDepartmentCode(department_code, page);
  }

  @Get('/topsales/:department_code/:count')
  findTopSalesByDepartmentCode(
    @Param('department_code') department_code: String,
    @Param('count') count: any,
  ) {
    return this.productsService.findTopSalesByDepartmentCode(
      department_code,
      Number(count),
    );
  }
}
