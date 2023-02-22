import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  content: string;

  logoImg: string;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  authorId: number;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  categoryId: number;

  @IsDateString()
  createdAt: string;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  price: number;
}
