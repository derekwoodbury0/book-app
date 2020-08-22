import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service'

@Component({
  selector: 'ctac-personal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly bookService: BookService) { }

  @Input() search: string;

  ngOnInit(): void {
  }

  searchBooks(value) {
    this.bookService.emitSearch(this.search)
    // console.log(value)
  }

}
