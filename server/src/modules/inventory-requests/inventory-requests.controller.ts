import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { InventoryRequestsService } from './inventory-requests.service';
import { FindByEmployeeIdDto } from './dto/find-by-employee-id.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGaurd } from '../auth/jwt-auth.gaurd';

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
}
