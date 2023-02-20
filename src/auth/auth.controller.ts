import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  loginUser(@Body('email') email: string, @Body('name') name: string): any {
    return this.authService.login(email, name);
  }
}
