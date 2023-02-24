import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() //email,password
  createUser(@Body() createUserDto: CreateUserDto): any {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getAllUser(): Promise<any> {
    return this.userService.getUser();
  }

  //リクエストパラメータから受け取る場合（例）
  // @Get(':id')
  // getUser(@Param('id', ParseIntPipe) id: number, @Req() req: any): any {
  //   return console.log(req.body.email);
  // }

  // @Get(':id')
  // getUser(@Param('id', ParseIntPipe) id: number): Promise<any> {
  //   return this.userService.getUserById(id);
  // }

  // @Delete(':id')
  // deleteUser(@Param('id', ParseIntPipe) id: number): any {
  //   return this.userService.deleteUser(id);
  // }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserDto: CreateUserDto,
  ): any {
    return this.userService.updateUser(id, createUserDto);
  }
}
