import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentsModule } from './modules/department/department.module';
import { SubdepartmentModule } from './modules/subdepartment/subdepartment.module';

@Module({
  imports: [PrismaModule, DepartmentsModule, SubdepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
