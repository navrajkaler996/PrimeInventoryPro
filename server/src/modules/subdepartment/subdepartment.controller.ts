import { Controller, Get, Param } from '@nestjs/common';
import { SubdepartmentService } from './subdepartment.service';

@Controller('/api/v1/subdepartment')
export class SubdepartmentController {
  constructor(private readonly subdepartmentService: SubdepartmentService) {}

  //FETCH All DEPARTMENTS
  //////api/vi/subdepartment
  @Get()
  findAll() {
    return this.subdepartmentService.findAll();
  }

  @Get('/:department_code')
  findByDepartmentCode(@Param('department_code') department_code: String) {
    return this.subdepartmentService.findByDepartmentCode(department_code);
  }
}
