import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/api/v1/product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //FETCH All PRODUCTS IN THE DEPARTMENT WHERE stock_alert IS true USING department_code
  //////api/v1/product/stockalert/:department_code
  @Get('/stockalert/:department_code/:cursor/:count')
  findStockAlertByDepartmentCode(
    @Param('department_code') department_code: String,
    @Param('cursor') cursor: String | undefined,
    @Param('count') count: number,
  ) {
    return this.productsService.findStockAlertByDepartmentCode(
      department_code,
      cursor,
      count,
    );
  }

  //FETCH PRODUCTS WITH MOST SALES using department_code/sub_department_code AND count
  //////api/v1/product/topsales/:department_code/:count
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

  @Get('/:department_code/:cursor/:count')
  findProductsByDepartmentCode(
    @Param('department_code') department_code: String,
    @Param('cursor') cursor: String | undefined,
    @Param('count') count: String,
  ) {
    return this.productsService.findProductsByDepartmentCode(
      department_code,
      cursor,
      Number(count),
    );
  }

  @Get('/:keyword')
  findProductsByKeyword(@Param('keyword') keyword: string) {
    return this.productsService.findProductsByKeyword(keyword);
  }
}
