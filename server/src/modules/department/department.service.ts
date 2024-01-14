import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  //FETCH All DEPARTMENTS
  //////api/vi/department
  findAll() {
    return this.prisma.department.findMany();
  }

  //FETCH A SINGLE DEPARTMENT using department_code
  //////api/vi/department/:department_code
  findByDepartmentCode(department_code: string) {
    return this.prisma.department.findFirst({
      where: { department_code: department_code?.toUpperCase() },
    });
  }

  //FETCH A LIST OF DEPARTMENTS
  listDepartments() {
    return this.prisma.department.findMany({
      select: {
        department_code: true,
        department_name: true,
      },
    });
  }

  //ADMIN SERVICE
  listDepartmentsForAdmin() {
    return this.prisma.department.findMany({
      orderBy: {
        department_id: 'asc',
      },
    });
  }

  async addDepartment(store_code: string, body: any) {
    try {
      const response = await this.findLastDepartmentCode();

      let lastDepartmentCode;
      if (response?.length > 0) {
        lastDepartmentCode = response[0].department_code;

        let temp = '';
        for (let i = lastDepartmentCode.length - 1; i >= 0; i--) {
          if (lastDepartmentCode[i] !== '0') {
            temp = temp + lastDepartmentCode[i];
          } else break;
        }

        temp = temp.split('').reverse().join('');

        temp = String(Number(temp) + 1);

        let newDepartmentCode =
          lastDepartmentCode.slice(0, lastDepartmentCode.length - temp.length) +
          temp;

        body.department_code = newDepartmentCode;

        body.store_code = store_code;

        body.total_sub_departments = 0;
        body.total_products = 0;
        body.total_products_quantity = 0;
        body.total_products_in_transit = 0;
        body.stock_alert = false;

        const createdDepartment = await this.prisma.department.create({
          data: body,
        });

        // return createdProduct;
      }
    } catch (error) {}
  }

  //HELPERS

  async findLastDepartmentCode() {
    const data = await this.prisma.department.findMany({
      orderBy: {
        department_id: 'desc',
      },
      take: 1,
    });

    return data;
  }
}
