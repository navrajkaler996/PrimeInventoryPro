import { Controller, Get, Param } from '@nestjs/common';
import { StoreService } from './store.service';
import { FindByStoreCode } from './dto/find-by-store-code';

@Controller('/api/v1/store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('/:store_code')
  findByStoreCode(@Param('store_code') store_code: string) {
    return this.storeService.findByStoreCode(store_code);
  }
}
