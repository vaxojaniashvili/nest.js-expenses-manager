import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { DataTypes } from 'src/types/common';

@Controller('api')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}
  @Get('/users')
  getData() {
    return this.expensesService.getUsers();
  }
  @Get('/users/:id')
  getUserById(@Param('id') id) {
    return this.expensesService.getUsersById(id);
  }
  @Post('/post')
  postUser(@Body() Body) {
    return this.expensesService.postUser(Body);
  }
  @Put("/users/:id")
  updateUser(@Param("id")id, @Body()body) {
   return this.expensesService.updateUser(id,body)
  }
  @Delete("/users/delete/:id")
  deleteUser(@Param("id")id) {
    return this.expensesService.deleteUser(id)
  }
}
