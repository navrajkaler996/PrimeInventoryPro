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

  //FETCH THE LOST OF SUBDEPARTMENTS
  listSubDepartments() {
    return this.prisma.subDepartment.findMany({
      select: {
        sub_department_name: true,
        sub_department_code: true,
        department_code: true,
      },
    });
  }

  findBySubDepartmentCode(sub_department_code: String) {
    return this.prisma.subDepartment.findUnique({
      where: { sub_department_code: sub_department_code?.toUpperCase() },
    });
  }

  listSubdepartmentsForAdmin() {
    return this.prisma.subDepartment.findMany();
  }

  async addSubdepartment(store_code: string, body: any) {
    try {
      const initials = body?.department_name?.slice(0, 3);
      const response = await this.findLastSubdepartmentCode(initials);

      let lastSubdepartmentCode;
      if (response?.length > 0) {
        lastSubdepartmentCode = response[0].sub_department_code;

        let temp = '';
        for (let i = lastSubdepartmentCode.length - 1; i >= 0; i--) {
          if (lastSubdepartmentCode[i] !== '0') {
            temp = temp + lastSubdepartmentCode[i];
          } else break;
        }

        temp = temp.split('').reverse().join('');

        temp = String(Number(temp) + 1);

        let newSubdepartmentCode =
          lastSubdepartmentCode.slice(
            0,
            lastSubdepartmentCode.length - temp.length,
          ) + temp;

        console.log(newSubdepartmentCode);

        body.sub_department_code = newSubdepartmentCode;

        // body.store_code = store_code;

        body.total_products = 0;
        body.total_products_quantity = 0;
        body.total_products_in_transit = 0;
        body.stock_alert = false;

        const createdSubdepartment = await this.prisma.subDepartment.create({
          data: body,
        });
        console.log(createdSubdepartment);

        // return createdProduct;
      }
    } catch (error) {
      console.log(error);
    }
  }

  //HELPERS

  async findLastSubdepartmentCode(initials: string) {
    const data = await this.prisma.subDepartment.findMany({
      where: {
        sub_department_code: {
          startsWith: initials?.toUpperCase(),
        },
      },
      orderBy: {
        sub_department_id: 'desc',
      },

      take: 1,
    });

    return data;
  }
}
