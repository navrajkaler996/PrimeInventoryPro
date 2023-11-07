import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindByStoreCode {
  @IsNotEmpty()
  @ApiProperty()
  store_code: string;
}
