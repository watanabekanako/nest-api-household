import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
@Injectable()
export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  //email,name,tel
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const useItem: any = { ...createUserDto };
    const user = await this.prisma.user.create({
      data: {
        ...useItem,
      },
    });
    return user;
  }

  getUser() {
    return this.prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  }

  getUserById(id: number): Promise<any> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        posts: true,
      },
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async updateUser(id: number, createUserDto: CreateUserDto): Promise<any> {
    const updateItem: any = { ...createUserDto };
    const update = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateItem,
      },
    });
    return update;
  }
}
