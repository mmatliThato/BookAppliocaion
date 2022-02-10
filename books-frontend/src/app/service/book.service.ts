
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from '../../interfaces/book.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  TokenAPI = environment.URL;
  constructor(private http :HttpClient) { }


  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.TokenAPI}/book`);
  }



  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.TokenAPI}/book/create`, book);
  }








 getBook(id: string): Observable<Book>{
    return this.http.get<Book>(`${this.TokenAPI}/book/${id}`);
  }



 update(id:any)

	{
		console.log(id)
		return this.http.put(`${this.TokenAPI}/book/`,id) ;
	}


  updateBook(id: any, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.TokenAPI}/book/update?BookID=${id}`, book);
  }


  deleteBook(id: any): Observable<Book> {
    console.log("Book ID ",id);
    return this.http.delete<Book>(`${this.TokenAPI}/book/delete?BookID=${id}`);
  }


}
