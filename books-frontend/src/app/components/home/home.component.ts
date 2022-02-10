import { EditbookComponent } from './../editbook/editbook.component';

import { Book } from './../../../interfaces/book.interface';
import { BookService } from './../../service/book.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public successMsg:any;
  public errorMsg:any;
id :any

  books:any = [];
  constructor(private bookservice:BookService,
  private router:Router


  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {

    this.bookservice.getBooks()
      .subscribe(
        res => this.books = res,

        err => console.log(err)
      )
  }


goToProfile(id :any) {

  this.router.navigate(['/book/edit/', id]);
localStorage.setItem('id',id )


}

deleteBook(id: any): void {
    this.bookservice.deleteBook(id)
      .subscribe(
        res => {
          console.log(res);
          
          this.getBooks();
        },
        err => console.log(err)
      )
  }




}
