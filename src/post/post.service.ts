import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PostService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createPost(
    title: string,
    content: string,
    categoryId: number,
  ): Promise<any> {
    const post = await this.prisma.post.create({
      data: {
        title,
        content,
        categoryId,
      },
    });
    return post;
  }

  getPost() {
    return this.prisma.post.findMany();
  }

  getPostById(id: number): Promise<any> {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });
  }

  //id以外を指定してPostを取得
  getPostOne(content: string): Promise<any> {
    return this.prisma.post.findMany({
      where: {
        title: {
          contains: content,
        },
      },
    });
  }
}
