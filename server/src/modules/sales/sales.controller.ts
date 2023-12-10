import { Body, Controller, Get, Param } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('/api/v1/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get('/:product_code')
  findOneYearSales(@Param('product_code') product_code: string) {
    return this.salesService.findOneYearSales(product_code);
  }
}
