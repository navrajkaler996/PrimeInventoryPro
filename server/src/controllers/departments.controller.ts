import { Controller, Get } from '@nestjs/common';

//Route for departments
@Controller('/v1/departments')
export class DepartmentController {
  @Get()
  getDepartments(): any {
    return [];
  }
}
