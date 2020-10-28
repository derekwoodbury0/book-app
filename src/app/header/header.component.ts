import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service'

@Component({
  selector: 'ctac-personal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly bookService: BookService) { }

  ngOnInit(){}

  @Input() homePage: boolean;

  @Input() search: string;

  searchBooks(value): void {
    this.bookService.emitSearch(this.search)
  }
}
