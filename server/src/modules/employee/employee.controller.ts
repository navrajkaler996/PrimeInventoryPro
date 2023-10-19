import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { JwtAuthGaurd } from '../auth/jwt-auth.gaurd';

@Controller('/api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('/:id')
  @UseGuards(JwtAuthGaurd)
  findUserById(@Param('id') id: number) {
    return this.employeeService.findUserbyId(id);
  }
}
