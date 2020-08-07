import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../ibook';
import { BookService } from '../book.service';

@Component({
  selector: 'ctac-personal-personal-booklist-detail',
  templateUrl: './personal-booklist-detail.component.html',
  styleUrls: ['./personal-booklist-detail.component.css']
})
export class PersonalBooklistDetailComponent implements OnInit {

  book: IBook;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  updateStatus (clickedStatus): void {
    this.book.status = clickedStatus
    this.bookService.updateReadStatus(this.book).subscribe()
  }

  ngOnInit(): void {
    this.book = window.history.state.book
  }

}
