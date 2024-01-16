import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  findUserbyId(id: number) {
    const user = this.prisma.employee.findUnique({
      where: { employee_id: Number(id) },
    });

    if (user) return user;
    else throw new NotFoundException();
  }

  listEmployeesForAdmin() {
    return this.prisma.employee.findMany();
  }
}
