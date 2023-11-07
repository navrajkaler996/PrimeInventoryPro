import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentsModule } from './modules/department/department.module';
import { SubdepartmentModule } from './modules/subdepartment/subdepartment.module';
import { ProductsModule } from './modules/products/products.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { AuthModule } from './modules/auth/auth.module';
import { InventoryRequestsModule } from './modules/inventory-requests/inventory-requests.module';
import { StoreModule } from './modules/store/store.module';

@Module({
  imports: [
    PrismaModule,
    DepartmentsModule,
    SubdepartmentModule,
    ProductsModule,
    EmployeeModule,
    AuthModule,
    InventoryRequestsModule,
    StoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
