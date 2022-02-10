import { BookService } from './book.service';
import { CreateBookDTO } from './../dto/book.dto';

import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  Query,
  Put,
  UseInterceptors,
} from '@nestjs/common';
@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}




  // Add Books
  @Post('/create')
  async createBook(@Res() res, @Body() createBookDTO: CreateBookDTO) {
    const book = await this.bookService.createBook(createBookDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Book Successfully Created',
      book,
    });
  }


 // Get Books
    // @Get('/list')
    @Get('/')
    async getBooks(@Res() res) {
        const books = await this.bookService.getbooks();
        return res.status(HttpStatus.OK).json(books);
    

    }


    @Put('/update')
    async updateBook(@Res() res, @Body() createBookDTO: CreateBookDTO, @Query('BookID') BookID) {
        const updatedBook = await this.bookService.updateBook(BookID, createBookDTO);
        if (!updatedBook) throw new NotFoundException('Book does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Book Updated Successfully',
            updatedBook 
        });
    }




 
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('BookID') BookID) {
        const bookDeleted = await this.bookService.deleteBook(BookID);
        if (!bookDeleted) throw new NotFoundException('Book does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Book Deleted Successfully',
            bookDeleted
        });
    }




    
    @Get('/:BookID')
    async getBook(@Res() res, @Param('BookID') BookID) {
        const book = await this.bookService.getBook(BookID);
        if (!book) throw new NotFoundException('Book does not exist!');
        return res.status(HttpStatus.OK).json(book);
    }

}
