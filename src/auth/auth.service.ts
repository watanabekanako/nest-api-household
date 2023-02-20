import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async login(email: string, name: string): Promise<any> {
    const loginItem = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!loginItem) throw new NotFoundException();
    const validName = name === loginItem.name;
    //エラーステータスorメッセージを変えた方が良い？
    if (loginItem && !validName) throw new NotFoundException();
    return loginItem;
  }
}
