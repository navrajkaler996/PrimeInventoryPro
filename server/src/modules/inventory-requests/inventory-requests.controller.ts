import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { InventoryRequestsService } from './inventory-requests.service';

import { JwtAuthGaurd } from '../auth/jwt-auth.gaurd';
import { AddToInventoryDto } from './dto/add-request.dto';
import { FindByRequestIdDto } from './dto/find-by-request-id.dto';

@Controller('/api/v1/inventory-request')
export class InventoryRequestsController {
  constructor(
    private readonly inventoryRequestsService: InventoryRequestsService,
  ) {}

  @Get('/list/:employee_id/:cursor/:count')
  @UseGuards(JwtAuthGaurd)
  findByEmployeeId(
    @Param('employee_id') employee_id: string,
    @Param('cursor') cursor: string | undefined,
    @Param('count') count: number,
  ) {
    return this.inventoryRequestsService.findByEmployeeId(
      employee_id,
      cursor,
      count,
    );
  }

  @Get('/:request_id')
  findByRequestId(@Param('request_id') request_id: FindByRequestIdDto) {
    return this.inventoryRequestsService.findByRequestId(request_id);
  }

  @Post('/add')
  @UseGuards(JwtAuthGaurd)
  addRequest(@Body() body: AddToInventoryDto) {
    return this.inventoryRequestsService.addRequest(body);
  }
}
