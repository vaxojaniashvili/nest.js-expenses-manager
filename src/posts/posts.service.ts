import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private readonly data = [{ id: 1, name: 'vaxo', email: 'vaxo@gmail.com' }];
  postUsers(body) {
    const { name, email } = body;
    const createdUserTime = new Date().toLocaleString();
    if (!body) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const user = {
      id: this.data.length + 1,
      name: name,
      email: email,
      createdTime: createdUserTime,
    };
    this.data.push(user);
    return this.data;
  }
  getUser() {
    return this.data;
  }
  getUserById(id: string) {
    const user = this.data.find((u) => u.id === parseInt(id));
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
