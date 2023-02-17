import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

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
