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
  @Get('list/:department_code')
  @UseGuards(JwtAuthGaurd)
  findByDepartmentCode(@Param('department_code') department_code: String) {
    return this.subdepartmentService.findByDepartmentCode(department_code);
  }

  @Get('/:sub_department_code')
  @UseGuards(JwtAuthGaurd)
  findBySubDepartmentCode(
    @Param('sub_department_code') sub_department_code: String,
  ) {
    return this.subdepartmentService.findBySubDepartmentCode(
      sub_department_code,
    );
  }

  //ADMIN ROUTES

  @Get('/admin/list')
  findSubdepartmentsForAdmin() {
    return this.subdepartmentService.listSubdepartmentsForAdmin();
  }
}
