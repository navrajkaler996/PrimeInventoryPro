import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubdepartmentService {
  constructor(private prisma: PrismaService) {}

  //FETCH All SUBDEPARTMENTS
  //////api/v1/subdepartment
  findAll() {
    return this.prisma.subDepartment.findMany();
  }

  //FETCH A SINGLE SUBDEPARTMENT USING department_code
  //////api/v1/subdepartment/:department_code
  findByDepartmentCode(department_code: String) {
    return this.prisma.subDepartment.findMany({
      where: { department_code: department_code?.toUpperCase() },
    });
  }
}
