import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { DepartmentsService } from './department.service';
import { JwtAuthGaurd } from '../auth/jwt-auth.gaurd';

@Controller('/api/v1/department')
export class DepartmentController {
  constructor(private readonly departmentsService: DepartmentsService) {}
  //HELPERS
  @Get('/list')
  @UseGuards(JwtAuthGaurd)
  findDepartments() {
    return this.departmentsService.listDepartments();
  }

  //FETCH All DEPARTMENTS
  @Get()
  @UseGuards(JwtAuthGaurd)
  findAll() {
    return this.departmentsService.findAll();
  }
  //FETCH A SINGLE DEPARTMENT USING department_code
  @Get('/:department_code')
  @UseGuards(JwtAuthGaurd)
  findByDepartmentCode(@Param('department_code') department_code: string) {
    return this.departmentsService.findByDepartmentCode(department_code);
  }

  //ADMIN ROUTES

  @Get('/admin/list')
  findDepartmentsForAdmin() {
    return this.departmentsService.listDepartmentsForAdmin();
  }
}
