import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsInt()
  @IsNotEmpty()
  categoryId: number;
}
