import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { BookService } from '../book.service'

@Component({
  selector: 'ctac-personal-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number;
  genre: string;

  book: any;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) {
  }


  // ngOnInit(): void {
  //   this.id = this.route.snapshot.paramMap.get("id");
  //   this.genre = this.route.snapshot.paramMap.get("genre");
  // }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("id");
      this.genre = params.get("genre");

      this.bookService.getBookById(this.genre, this.id).subscribe(result => (this.book = result));

      })
      // this.genre = this.route.paramMap.subscribe(params => params.get("genre"));
      // this.bookService.getBookById(this.genre, this.id).subscribe(result => this.book = result);
      // console.log(this.id, this.genre)
       }

  addToPersonalBooklist(): void {
    this.bookService.addBook(this.book).subscribe()
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


