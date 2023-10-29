import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindByRequestIdDto {
  @IsNotEmpty()
  @ApiProperty()
  request_id: string;
}
