import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IBook } from '../ibook';

@Component({
  selector: 'ctac-personal-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: IBook;

  @Output() closeDialog: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick (): void {
    this.closeDialog.emit()
  }

}
