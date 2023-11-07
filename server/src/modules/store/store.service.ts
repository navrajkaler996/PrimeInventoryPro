import { Injectable } from '@nestjs/common';
import { FindByStoreCode } from './dto/find-by-store-code';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

  async findByStoreCode(store_code: string) {
    try {
      
      const storeData = await this.prisma.store.findUnique({
        where: {
          store_code: store_code,
        },
      });

      return storeData;
    } catch (error) {}
  }
}
