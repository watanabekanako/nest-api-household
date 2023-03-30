import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  content: string;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  authorId: number;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  categoryId: number;

  @IsDateString()
  @IsNotEmpty()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;

  // @IsInt()
  // @IsNotEmpty()
  // @IsPositive()
  @Type(() => Number)
  expence: number;

  // @IsInt()
  // @IsNotEmpty()
  @Type(() => Number)
  income: number;
}
