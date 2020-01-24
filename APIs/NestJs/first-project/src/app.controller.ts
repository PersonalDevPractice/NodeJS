import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Book')
  getBooks(): string {
    return this.appService.getSingleBook();
  }

  @Get('AllBooks')
  getAllBooks(): string {
    return this.appService.getAllBooks();
  }
}
