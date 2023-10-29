import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ChangeRequestStatusDto {
  @IsNotEmpty()
  @ApiProperty()
  request_id: string;

  @IsNotEmpty()
  @ApiProperty()
  decision: boolean;
}
