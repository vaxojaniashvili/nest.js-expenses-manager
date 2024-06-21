import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('/api')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post('/posts')
  postUsers(@Body() body) {
    return this.postsService.postUsers(body);
  }
  @Get('/posts')
  getUser() {
    return this.postsService.getUser();
  }
  @Get("/posts/:id")
  getUserById(@Param("id")id) {
    return this.postsService.getUserById(id);
  }
}
