import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createOneUser(
    @Body('name') name: string,
    @Body('surname') surname: string,
    @Body('points') points: string,
  ) {
    const generatedId = await this.usersService.create(name, surname, points);
    return { id: generatedId };
  }

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }
}
