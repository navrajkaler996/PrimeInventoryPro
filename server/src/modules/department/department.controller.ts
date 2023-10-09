import { Controller, Get, Param } from '@nestjs/common';
import { DepartmentsService } from './department.service';

@Controller('/api/v1/department')
export class DepartmentController {
  constructor(private readonly departmentsService: DepartmentsService) {}
  //HELPERS
  @Get('/list')
  findDepartments() {
    return this.departmentsService.listDepartments();
  }
  //FETCH All DEPARTMENTS
  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }
  //FETCH A SINGLE DEPARTMENT USING department_code
  @Get('/:department_code')
  findByDepartmentCode(@Param('department_code') department_code: string) {
    return this.departmentsService.findByDepartmentCode(department_code);
  }
}
