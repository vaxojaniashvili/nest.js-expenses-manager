import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { DataTypes } from 'src/types/common';

@Controller('/api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get('/users/:id')
  getUserById(@Param('id') id) {
    return this.usersService.getUserById(id);
  }
  @Post('/users/auth')
  authUsers(@Body() body: DataTypes) {
    return this.usersService.authUsers(body);
  }
  @Put('/users/update')
  putUsers(@Body() body: DataTypes) {
    return this.usersService.putUsers(body);
  }
  @Patch('/users/update')
  patchUsers(@Body() body) {
    return this.usersService.patchUsers(body);
  }
  @Delete('/users/delete')
  deleteUser(@Body() body) {
    return this.usersService.deleteUser(body);
  }
}
