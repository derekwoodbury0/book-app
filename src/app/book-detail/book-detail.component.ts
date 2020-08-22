import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BookService } from '../book.service'
import { IBook } from '../ibook';

@Component({
  selector: 'ctac-personal-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number;
  genre: string;

  book: IBook;

  // fromPersonalList: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get("id");
      let genre = params.get("genre");

      this.bookService.getBookById(genre, id).subscribe(result => {
        this.book = result
      });
    })
  }

  addToPersonalBooklist(): void {
    this.book.inPersonalList = true;
    let newBook = {...this.book};
    delete newBook.id
    this.bookService.addBook(newBook).subscribe();
    this.bookService.updateListStatus(this.book).subscribe();
  }

  nextBook(): void {
    let { id, genre } = this.book
    let nextId = +id + 1;
    this.router.navigate([`/${genre}/${nextId}`])
  }

  previousBook(): void {
    let { id, genre } = this.book
    let prevId = +id - 1;
    this.router.navigate([`/${genre}/${prevId}`])
  }
}


