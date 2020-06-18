import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'

@Component({
  selector: 'ctac-personal-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  fictionBooks: any[]

  nonfictionBooks: any[]
  constructor(private bookService: BookService) {
   }

  ngOnInit(): void {
    this.bookService.getFictionBooks().subscribe(result => (this.fictionBooks = result));
    this.bookService.getNonfictionBooks().subscribe(result => (this.nonfictionBooks = result))
  }
}
