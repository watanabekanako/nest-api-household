import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PostService } from './post.service';

// const prisma = new PrismaClient();
// @Controller('post')
// export class PostController {
//   // http://localhost:3005/post にてreturnのなかが返却される
//   @Get(':id')
//   async getPost(@Param('id') id): string {
//     const { postId } = param;
//     const postId = await prisma.post.findUnique({
//       where: {
//         id: Number(req.params.id),
//       },
//       // relationのときはinclude使用して取得
//       include: {
//         category: true,
//       },
//     });
//     return postId;
//   }
// }

// @Controller('post')
// export class PostController {
//   constructor(private postService: PostService) {}
//   // 利用する Service が inject される
//   @Get()
//   async findMany(): Promise<> {
//     return this.postService.findMany();
//   }
// }

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(
    @Body('title') title: string,
    @Body('content') content: string,
    @Body('categoryId') categoryId: number,
  ): any {
    return this.postService.createPost(title, content, categoryId);
  }

  @Get()
  getAllPost(): Promise<any> {
    return this.postService.getPost();
  }

  @Get('find')
  getPostCategory(@Body('content') content: string): any {
    return this.postService.getPostOne(content);
  }

  @Get(':id')
  getPost(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.postService.getPostById(id);
  }
}
