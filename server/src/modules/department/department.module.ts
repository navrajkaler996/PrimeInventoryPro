import { Module } from '@nestjs/common';
import { DepartmentsService } from './department.service';
import { DepartmentController } from './department.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DepartmentController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}
