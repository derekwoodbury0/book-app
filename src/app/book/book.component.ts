import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ctac-personal-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  book: any;

  constructor() { }

  ngOnInit(): void {
  }

}
