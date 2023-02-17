import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PostService } from './post.service';

const prisma = new PrismaClient();
@Controller('post')
export class PostController {
  // http://localhost:3005/post にてreturnのなかが返却される
  @Get()
  async findMany() {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        category: true,

        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    return { posts };
  }

  @Get(':id')
  async getPost(@Param('id') id: number) {
    // const { postId } = param;
    const postId = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      // relationのときはinclude使用して取得
      include: {
        category: true,
      },
    });
    return { postId };
  }
}
