import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Posts } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Promise<Posts> {
    return this.postService.createPost(createPostDto);
  }

  @Get()
  getAllPost(): Promise<Posts[]> {
    return this.postService.getPost();
  }

  @Get('/category/:id')
  getCategoryPost(
    @Param('id', ParseIntPipe) categoryId: number,
  ): Promise<Posts[]> {
    return this.postService.getCategoryPost(categoryId);
  }

  @Get(':id')
  getPost(@Param('id', ParseIntPipe) id: number): Promise<Posts[]> {
    return this.postService.getPostById(id);
  }

  @Delete(':id')
  deletePost(@Param('id', ParseIntPipe) id: number): Promise<Posts> {
    return this.postService.deletePost(id);
  }

  @Patch(':id')
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPostDto: CreatePostDto,
  ): Promise<Posts> {
    return this.postService.updatePost(id, createPostDto);
  }
}
