import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataTypes } from 'src/types/common';

@Injectable()
export class UsersService {
  private readonly data = [];
  getUsers() {
    if (!this.data) {
      throw new HttpException('No data found', HttpStatus.NOT_FOUND);
    } else if (this.data.length < 1) {
      throw new HttpException('UNAUTHORIZED users', HttpStatus.UNAUTHORIZED);
    } else {
      return this.data;
    }
  }
  getUserById(id: string) {
    const user = this.data.find((u) => u.id === parseInt(id));
    if (!user || typeof user === 'string') {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    } else {
      return user;
    }
  }
  authUsers(body: DataTypes) {
    const { name, email } = body;
    const newUser = {
      id: this.data.length + 1,
      name,
      email,
    };
    if (!name || !email) {
      throw new HttpException(
        'Please fill email valley',
        HttpStatus.NON_AUTHORITATIVE_INFORMATION,
      );
    } else {
      this.data.push(newUser);
      return newUser;
    }
  }
  putUsers(body: DataTypes) {
    const { name, email } = body;
    const userId = parseInt(body.id);
    const findUser = this.data.findIndex((u) => u.id === userId);
    const updatedUser = {
      id: userId,
      name,
      email,
    };
    this.data[findUser] = updatedUser;
    return updatedUser;
  }
  patchUsers(body: DataTypes) {
    const { name, email } = body;
    const userId = parseInt(body.id);
    const userIndex = this.data.findIndex((u) => u.id === userId);
    if (!name) {
      throw new HttpException('Please update email', HttpStatus.BAD_REQUEST);
    } else {
      this.data[userIndex].name = name;
    }
    if (email) {
      this.data[userIndex].email = email;
    }
    return this.data[userIndex];
  }
  deleteUser(body: DataTypes) {
    const id = parseInt(body.id);
    const findUserIndex = this.data.findIndex((u) => u.id === id);
    if (findUserIndex === -1) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    } else {
      this.data.splice(findUserIndex, 1);
      return this.data;
    }
  }
}
