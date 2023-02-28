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
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getLoginUser(@Req() req: Request): Omit<User, 'password'> {
    return req.user;
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): any {
    return this.userService.deleteUser(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserDto: CreateUserDto,
  ): any {
    return this.userService.updateUser(id, createUserDto);
  }
}
