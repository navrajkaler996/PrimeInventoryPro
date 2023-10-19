import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SubdepartmentService } from './subdepartment.service';
import { JwtAuthGaurd } from '../auth/jwt-auth.gaurd';

@Controller('/api/v1/subdepartment')
export class SubdepartmentController {
  constructor(private readonly subdepartmentService: SubdepartmentService) {}

  //HELPERS
  @Get('/list')
  @UseGuards(JwtAuthGaurd)
  listSubepartments() {
    return this.subdepartmentService.listSubDepartments();
  }

  //FETCH All DEPARTMENTS
  //////api/vi/subdepartment
  @Get()
  @UseGuards(JwtAuthGaurd)
  findAll() {
    return this.subdepartmentService.findAll();
  }
  //FETCH A SINGLE DEPARTMENT
  //////api/vi/subdepartment/:department_code
  @Get('/:department_code')
  @UseGuards(JwtAuthGaurd)
  findByDepartmentCode(@Param('department_code') department_code: String) {
    return this.subdepartmentService.findByDepartmentCode(department_code);
  }
}
