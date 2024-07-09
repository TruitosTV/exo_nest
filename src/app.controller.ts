import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.model';
import { FilterService } from './filter/filter.service';

@Controller('/hello')
export class AppController {
  constructor(private readonly filterService: FilterService) {}

  @Post()
  getHello(@Body() body: User[], @Query('name') name: string): User[] {
    return this.filterService.filterUsers(body, name);
  }
}
