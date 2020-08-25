import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { BookService } from '../book.service'

@Component({
  selector: 'ctac-personal-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  bookList: IBook[];
  constructor(public readonly bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getPersonalBookList().subscribe(data => {
      this.bookList = data;
      this.emitList()
    })
  }

  emitList(): void {
    this.bookService.emitList(this.bookList)
  }

  onChange(newBook) {
    newBook.inPersonalList = true;
    newBook.description='';
    newBook.bestSeller=false;
    newBook.book_image ? null : newBook.book_image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIM3fqvuBBZVd-tPsR1fgnUVEsPjVzk3iBtg&usqp=CAU'
    this.bookService.addBook(newBook).subscribe(data =>{
      this.bookList.push(data)
    });
    this.emitList();
  }
}
