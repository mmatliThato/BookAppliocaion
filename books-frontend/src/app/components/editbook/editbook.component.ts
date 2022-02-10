import { Book } from './../../../interfaces/book.interface';

import { Component, OnInit } from '@angular/core';
import { BookService } from './../../service/book.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
public successMsg:any;
  public errorMsg:any;

  
 book: Book = {
    Title: '',
    description: '',
    imageURL: '',
    Author:'',
  };


  edit: boolean = false;
BookID :any



  constructor(private bookservice:BookService,


   private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.bookservice.getBook(params.id)
        .subscribe(
          res => {
            console.log("hey clicked book",res);
            this.book = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }



  }






updateBook() {

    this.bookservice.updateBook(this.book._id, this.book)
      .subscribe(
        res => {
          console.log(res);
          this.successMsg = `Book updated Successfully`;

          this.router.navigate(['/'])
        },
        err => console.log(err)
      )
  }




submitBook() {
    this.bookservice.createBook(this.book)
      .subscribe(
        res => {
          console.log("Hey",res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }


}
