import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IBook } from '../ibook'
import { BookService } from '../book.service'

@Component({
  selector: 'ctac-personal-add-book-component',
  templateUrl: './add-book-component.component.html',
  styleUrls: ['./add-book-component.component.css']
})
export class AddBookComponentComponent implements OnInit {

  @Output() bookOutput = new EventEmitter<IBook>();
  bookForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly bookService: BookService) { }

  ngOnInit() {
    this.newForm()
  }


  save() {
    let newBook = this.bookForm.value;
    // newBook.inPersonalList = true;
    // newBook.description='';
    // newBook.bestSeller=false;
    // newBook.book_image ? null : newBook.book_image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIM3fqvuBBZVd-tPsR1fgnUVEsPjVzk3iBtg&usqp=CAU'
    // this.bookService.addBook(newBook).subscribe();
    // this.newForm()
    this.bookOutput.emit(newBook)
  }

  newForm() {
    this.bookForm = this.fb.group ({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      author: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      book_image: [''],
      genre: ['fiction', [Validators.required]],
      status: ['', [Validators.required]]
    })
  }

}
