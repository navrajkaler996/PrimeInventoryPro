import { Module } from '@nestjs/common';
import { SubdepartmentService } from './subdepartment.service';
import { SubdepartmentController } from './subdepartment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SubdepartmentController],
  providers: [SubdepartmentService],
})
export class SubdepartmentModule {}
