import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddToInventoryDto {
  @IsNotEmpty()
  @ApiProperty()
  request_type: string;

  @IsNotEmpty()
  @ApiProperty()
  request_by_name: string;

  @IsNotEmpty()
  @ApiProperty()
  request_by_employee_id: number;

  @IsNotEmpty()
  @ApiProperty()
  request_for_employee_id: number;

  @IsNotEmpty()
  @ApiProperty()
  request_by_email: string;

  @IsNotEmpty()
  @ApiProperty()
  request: string;

  @IsNotEmpty()
  @ApiProperty()
  request_department_code: string;

  @IsNotEmpty()
  @ApiProperty()
  request_sub_department_code: string;

  @IsNotEmpty()
  @ApiProperty()
  product_code: string;
}
