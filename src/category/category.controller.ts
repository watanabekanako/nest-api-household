import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Controller('category')
export class CategoryController {
  @Get()
  async findMany() {
    const categories = await prisma.category.findMany({
      orderBy: {
        id: 'asc',
      },
      // includeはrelationを取得
      include: {
        _count: {
          // _countは紐づく投稿の数
          select: {
            // postsはCategoryテーブルのposts
            posts: true,
          },
        },
      },
    });
    return { categories };
  }
}
