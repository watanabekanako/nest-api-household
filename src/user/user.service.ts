import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(email: string, name: string, tel: string): Promise<any> {
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        tel,
      },
    });
    return user;
  }

  getUser() {
    return this.prisma.user.findMany();
  }

  getUserById(id: number): Promise<any> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
