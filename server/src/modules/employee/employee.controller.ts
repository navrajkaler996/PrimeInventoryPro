import { Controller } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('/api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
}
