import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentsModule } from './departments/departments.module';
import { DepartmentController } from './controllers/departments.controller';

@Module({
  imports: [PrismaModule, DepartmentsModule],
  controllers: [AppController, DepartmentController],
  providers: [AppService],
})
export class AppModule {}
