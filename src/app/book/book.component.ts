import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../ibook';

@Component({
  selector: 'ctac-personal-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()

  book: IBook;

  constructor() { }

  ngOnInit(): void {
  }

}
