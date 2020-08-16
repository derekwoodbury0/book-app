import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'
import { IBook } from '../ibook';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ctac-personal-personal-booklist',
  templateUrl: './personal-booklist.component.html',
  styleUrls: ['./personal-booklist.component.css']
})
export class PersonalBooklistComponent implements OnInit {

  bookList: IBook[]

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookService.getPersonalBookList().subscribe(result => (this.bookList = result))
  }

  deleteBook(book): void {
    let deletedId = book.id;
    this.bookService.deleteBook(deletedId).subscribe();

    let foundNumber = this.bookList.findIndex(book => book.id === deletedId);

    this.bookList.splice(foundNumber, 1);

  }
}
