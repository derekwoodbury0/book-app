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

  fromPersonalList: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
      this.genre = params.get("genre");

      this.bookService.getBookById(this.genre, this.id).subscribe(result => (this.book = result));

      if (window.history.state.fromPersonalList) {
        this.fromPersonalList = true;
      };
    })
  }

  addToPersonalBooklist(): void {
    this.bookService.updateListStatus(this.book).subscribe();
    this.bookService.addBook(this.book).subscribe();
  }

  nextBook(): void {
    let nextId = +this.id + 1;
    this.router.navigate([`/${this.genre}/${nextId}`])
  }

  previousBook(): void {
    let prevId = +this.id - 1;
    this.router.navigate([`/${this.genre}/${prevId}`])
  }
}


