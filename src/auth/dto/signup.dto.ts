import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class SignUpDto {
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
  @IsString()
  name?: string;
}
