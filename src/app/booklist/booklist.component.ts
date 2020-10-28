import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../book.service'
import { IBook } from '../ibook';
import { BookAdapter } from '../book.model'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'ctac-personal-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  fictionBooks: IBook[];

  nonfictionBooks: IBook[];

  constructor(
    private readonly bookService: BookService,
    private readonly bookAdapter: BookAdapter,
    private readonly dialog: MatDialog
  ) {
    this.bookService.getSearch().subscribe(searchTerm => {
      this.searchBooks(searchTerm)
    })
   }

  ngOnInit() {
    this.bookService.getFictionBooks().subscribe(data => {
      if(data[0]) {
        this.fictionBooks = data;
        this.bookService.getNonfictionBooks().subscribe(data => this.nonfictionBooks = data)
      } else {
        this.initializeFictionBooks();
        this.initializeNonFictionBooks();
      }
    })
  }

  initializeFictionBooks() {
    let books;
    return this.bookService.apiFictionBooks().toPromise().then(data => {
      books = data
      let bookList = books.results.books.map(book => this.bookAdapter.adaptFiction(book))
      this.bookService.initializeFictionBooks(bookList).subscribe(data => this.fictionBooks = data)
    })
  }

  initializeNonFictionBooks() {
    let books;
    return this.bookService.apiNonFictionBooks().toPromise().then(data => {
      books = data
      let bookList = books.results.books.map(book => this.bookAdapter.adaptNonFiction(book))
      this.bookService.initializeNonFictionBooks(bookList).subscribe(data => this.nonfictionBooks = data)
    })
  }

  searchBooks(searchTerm) {
    let searchList = this.fictionBooks.concat(this.nonfictionBooks).filter(book => {
      return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
    })


    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.width = "65%"
    dialogConfig.data = {
      books: searchList
    };

    this.dialog.open(SearchBoxComponent, dialogConfig)
  }
}
