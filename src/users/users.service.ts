import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly data = [{ id: 1, name: 'vaxo', email: 'vaxo@gmail.com' }];
  getUsers() {
    if (!this.data) {
      throw new HttpException('No data found', HttpStatus.NOT_FOUND);
    } else {
        return this.data;
    }
  }
}
