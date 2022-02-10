import { CreateBookDTO } from './../dto/book.dto';
import { Book } from './../interfaces/book.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()


export class BookService {




    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}



  // Post a single book
  async createBook(createBookDTO: CreateBookDTO): Promise<Book> {
    const newBook = new this.bookModel(createBookDTO);
    return newBook.save();
  }





   // Get all books
    async getbooks(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
  }


// Put a single Book
    async updateBook(BookID: any, createBookDTO: CreateBookDTO): Promise<Book> {
        const updatedBook = await this.bookModel
                            .findByIdAndUpdate(BookID, createBookDTO, {new: true});
        return updatedBook;
    }

 // Delete Book
    async deleteBook(BookID: any): Promise<any> {
        const deletedBook = await this.bookModel.findByIdAndDelete(BookID);
        return deletedBook;
    }



// Get a single Book
    async getBook(BookID: string): Promise<Book> {
        const book = await this.bookModel.findById(BookID); 
        return book;
    }

}



