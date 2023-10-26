import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindByEmployeeIdDto {
  @IsNotEmpty()
  @ApiProperty()
  employee_id: string;
}
