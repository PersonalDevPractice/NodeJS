import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSingleBook(): string {
    return 'Book';
  }

  getAllBooks(): string {
    return 'books';
  }

  // Post Single Book

  // Post List of Books

  // Find Book
}
