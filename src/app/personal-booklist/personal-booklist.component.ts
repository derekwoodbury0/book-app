import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service'
import { IBook } from '../ibook';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ctac-personal-personal-booklist',
  templateUrl: './personal-booklist.component.html',
  styleUrls: ['./personal-booklist.component.css']
})
export class PersonalBooklistComponent implements OnInit {

  bookList: IBook[];

  constructor(private readonly bookService: BookService, private readonly router: Router) {
    this.bookService.getList().subscribe(data => {
      this.bookList = data
    })
  }

  ngOnInit() {}

  routeToBookDetail(): void {
    this.router.navigate(['/personal', 'detail'])
  }

  deleteBook(book) {

    this.bookService.deleteBook(book).subscribe()

      if (book.bestSeller === true) {
        if (book.genre === 'fiction') {
          this.bookService.getFictionBooks().toPromise().then(books => {
            let matches = books.filter(Returnedbook => book.id === +Returnedbook.id)
            let match = matches[0]
            match.inPersonalList = false
            this.bookService.updateListStatus(match).toPromise()
          })
        } else if (book.genre === 'nonfiction') {
          this.bookService.getNonfictionBooks().toPromise().then(books => {
            let matches = books.filter(Returnedbook => book.id === +Returnedbook.id)
            let match = matches[0]
            match.inPersonalList = false
            this.bookService.updateListStatus(match).toPromise()
          })
        }
      }
      let index = this.bookList.findIndex(books => +book.id === +books.id)
      this.bookList.splice(index, 1)
  }
}
