import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  findAll() {
    return this.prisma.department.findMany();
  }

  findByName(name: string) {
    console.log('----', name);
    return this.prisma.department.findFirst({
      where: { department_name: name },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
