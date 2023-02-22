import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async login(loginDto: LoginDto): Promise<any> {
    const login = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });
    if (!login) throw new NotFoundException();
    const validPass = loginDto.password === login.password;
    //適切なexception-filters等に変更する
    if (login && !validPass) throw new BadRequestException();
    return login;
  }
}
