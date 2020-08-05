import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'
import { IBook } from '../ibook';

@Component({
  selector: 'ctac-personal-personal-booklist',
  templateUrl: './personal-booklist.component.html',
  styleUrls: ['./personal-booklist.component.css']
})
export class PersonalBooklistComponent implements OnInit {

  bookList: IBook[]

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getPersonalBookList().subscribe(result => (this.bookList = result))
  }

  deleteBook(deletedId: number): void {
  this.bookService.deleteBook(deletedId).subscribe();

  let foundNumber = this.bookList.findIndex(book => book.id === deletedId);

  this.bookList.splice(foundNumber, 1);

  }
}
