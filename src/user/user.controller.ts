import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('tel') tel: string,
  ): any {
    return this.userService.createUser(email, name, tel);
  }

  @Get()
  getAllUser(): Promise<any> {
    return this.userService.getUser();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.userService.getUserById(id);
  }
}
