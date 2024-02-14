import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthEntity } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async loginUser(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.employee.findUnique({
      where: {
        employee_email: email,
      },
    });

    if (!user) {
      throw new UnauthorizedException(`No user found with email: ${email}`);
    }

    if (password !== user.employee_password) {
      throw new UnauthorizedException('Wrong password. Please try again!');
    }

    delete user.employee_password;

    return {
      user,
      accessToken: this.jwtService.sign({ userId: user.employee_id }),
    };
  }
}
