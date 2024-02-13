import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SalesService } from './sales.service';
import { JwtAuthGaurd } from '../auth/jwt-auth.gaurd';

@Controller('/api/v1/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get('/:product_code')
  findOneYearSales(@Param('product_code') product_code: string) {
    return this.salesService.findOneYearSales(product_code);
  }

  @Get('/monthly/:store_code')
  @UseGuards(JwtAuthGaurd)
  findMonthlySales(@Param('store_code') store_code: string) {
    return this.salesService.findMonthlySales(store_code);
  }

  @Get('/yearly/:store_code')
  @UseGuards(JwtAuthGaurd)
  findYearlySales(@Param('store_code') store_code: string) {
    return this.salesService.findYearlySales(store_code);
  }
}
