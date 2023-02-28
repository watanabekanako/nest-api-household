import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

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
