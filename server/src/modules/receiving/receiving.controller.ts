import { Body, Controller, Get, Param } from '@nestjs/common';
import { ReceivingService } from './receiving.service';

@Controller('/api/v1/receiving')
export class ReceivingController {
  constructor(private readonly receivingService: ReceivingService) {}

  //FETCH All RECEIVING REPORTS USING STORE CODE
  //////api/v1/receiving/:store_code/:cursor/:count
  @Get('/:store_code/:cursor/:count')
  findReceivingReportsByStoreCode(
    @Param('store_code') store_code: String,
    @Param('cursor') cursor: String | undefined,
    @Param('count') count: number,
    @Body() body: any,
  ) {
    return this.receivingService.findReceivingReportsByStoreCode(
      store_code,
      cursor,
      count,
      body,
    );
  }
}
