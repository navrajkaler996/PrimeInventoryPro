import { Controller, Get, Param } from '@nestjs/common';
import { DepartmentsService } from './departments.service';

@Controller('/api/v1/department')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  //FETCH All DEPARTMENTS
  @Get()
  findAllDepartments() {
    console.log('sasas');
    return this.departmentsService.findAllDepartments();
  }
  //FETCH A SINGLE DEPARTMENT USING department_code
  @Get('/:department_code')
  findDepartmentByCode(@Param('department_code') department_code: string) {
    return this.departmentsService.findDepartmentByCode(department_code);
  }
}
