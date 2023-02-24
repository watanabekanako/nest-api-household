import { Contains, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @Contains('@')
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
