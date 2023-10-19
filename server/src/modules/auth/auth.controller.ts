import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthEntity } from './entities/auth.entity';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authsService: AuthService) {}

  @Post('/login')
  @ApiOkResponse({ type: AuthEntity })
  loginUser(@Body() { email, password }: LoginDto) {
    return this.authsService.loginUser(email, password);
  }
}
