import { Module } from '@nestjs/common';
import { TagsOnPostsController } from './tags-on-posts.controller';
import { TagsOnPostsService } from './tags-on-posts.service';

@Module({
  controllers: [TagsOnPostsController],
  providers: [TagsOnPostsService]
})
export class TagsOnPostsModule {}
