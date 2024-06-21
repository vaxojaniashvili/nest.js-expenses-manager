import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataTypes } from 'src/types/common';

@Injectable()
export class ExpensesService {
  private readonly data = [
    {
      id: 1,
      name: 'vaxo',
      email: 'vaxo@gmail.com',
      created: '6/21/2024, 12:28:20 PM',
    },
  ];
  getUsers() {
    return this.data;
  }
  getUsersById(id: string) {
    const user = this.data.find((u) => u.id === parseInt(id));
    return user;
  }
  postUser(body: DataTypes) {
    const { name, email } = body;
    const createdAt = new Date().toLocaleString();
    const newUser = {
      id: this.data.length + 1,
      name: name,
      email: email,
      created: createdAt,
    };
    this.data.push(newUser);
    return this.data;
  }
  updateUser(id: string, body: DataTypes) {
    const { name, email } = body;
    const findUserIndex = this.data.findIndex((u) => u.id === parseInt(id));
    if (findUserIndex < 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      this.data[findUserIndex] = { ...this.data[findUserIndex], name, email };
      return this.data;
    }
  }
  deleteUser(id: string) {
    const findUserIndex = this.data.findIndex((u) => u.id === parseInt(id));
    if (findUserIndex < 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      this.data.splice(findUserIndex, 1);
      return this.data;
    }
  }
}
