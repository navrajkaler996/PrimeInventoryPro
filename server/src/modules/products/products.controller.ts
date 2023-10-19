import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGaurd } from '../auth/jwt-auth.gaurd';

@Controller('/api/v1/product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //FETCH All PRODUCTS IN THE DEPARTMENT WHERE stock_alert IS true USING department_code
  //////api/v1/product/stockalert/:department_code
  @Get('/stockalert/:department_code/:cursor/:count')
  @UseGuards(JwtAuthGaurd)
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
  @UseGuards(JwtAuthGaurd)
  findTopSalesByDepartmentCode(
    @Param('department_code') department_code: String,
    @Param('count') count: any,
  ) {
    return this.productsService.findTopSalesByDepartmentCode(
      department_code,
      Number(count),
    );
  }

  //FETCH PRODUCTS BY TYPING A keyword IN THE SEARCH BAR.
  //////api/v1/product/search/:keyword
  @Get('/search/:keyword/:department_code/')
  @UseGuards(JwtAuthGaurd)
  findProductsByKeyword(
    @Param('keyword') keyword: string,
    @Param('department_code') department_code: string,
  ) {
    return this.productsService.findProductsByKeyword(keyword, department_code);
  }

  //FETCH PRODUCTS BY USING department_code, cursor, AND count
  /////api/v1/product/:department_code/:cursor/:count
  /////Used for infinite scroll
  @Get('/:department_code/:cursor/:count')
  @UseGuards(JwtAuthGaurd)
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

  //FETCH A SINGLE PRODUCT USING product_code
  /////api/v1/product/:product_code
  @Get('/:product_code')
  @UseGuards(JwtAuthGaurd)
  findProductByProductCode(@Param('product_code') product_code: string) {
    return this.productsService.findProductByProductCode(product_code);
  }

  //INSERT A SINGLE PRODUCT
  /////api/v1/product/add
  @Post('/add')
  @UseGuards(JwtAuthGaurd)
  addProduct(@Body() body: any) {
    return this.productsService.addProduct(body);
  }

  //UPDATE A SINGLE PRODUCT
  /////api/v1/product/update
  @Put('/update')
  @UseGuards(JwtAuthGaurd)
  updateProductByProductCode(@Body() body: any) {
    return this.productsService.updateProductByProductCode(body);
  }

  //DELETE A SINGLE PRODUCT USING product_code
  /////api/v1/product/delete/:product_code
  @Delete('/delete/:product_code')
  @UseGuards(JwtAuthGaurd)
  deleteProductByProductCode(@Param('product_code') product_code: string) {
    return this.productsService.deleteProductByProductCode(product_code);
  }
}
