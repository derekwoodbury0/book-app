import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service'
import { IBook } from '../ibook';

@Component({
  selector: 'ctac-personal-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  fictionBooks: IBook[];

  nonfictionBooks: IBook[];

  constructor(private readonly bookService: BookService) { }

  async ngOnInit() {

    await this.bookService.getFictionBooks().subscribe(data => {
      if(data[0]) {
        this.fictionBooks = data;
        this.bookService.getNonfictionBooks().subscribe(data => this.nonfictionBooks = data)
      } else {
        this.initializeFictionBooks();
        this.initializeNonFictionBooks();
      }
    })
  }

  async initializeFictionBooks() {
    await this.bookService.apiFictionBooks().subscribe(data => {
      this.fictionBooks = data
      this.bookService.initializeFictionBooks(data).subscribe()
    })
  }

  async initializeNonFictionBooks() {
    await this.bookService.apiNonFictionBooks().subscribe(data => {
      this.nonfictionBooks = data
      this.bookService.initializeNonFictionBooks(data).subscribe()
    })
  }
}
