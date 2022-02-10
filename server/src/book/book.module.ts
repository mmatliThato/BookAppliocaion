import { BookSchema } from './../schemas/book.schema';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { MorganModule } from 'nest-morgan';
@Module({

  imports: [

    
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
