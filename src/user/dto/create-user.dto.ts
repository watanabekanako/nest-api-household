import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number) //プロパティをNumber型と認識されるようにする
  // @Length(10, 11, {
  //   message: '$constraint1~$constraint2桁の数値で入力してください',
  // })
  tel: number;
}
