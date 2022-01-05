import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createOneUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const generatedId: User = await this.usersService.create(
      name,
      email,
      password,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }
}
