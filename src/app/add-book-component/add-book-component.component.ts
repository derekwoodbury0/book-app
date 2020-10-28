import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IBook } from '../ibook'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'ctac-personal-add-book-component',
  templateUrl: './add-book-component.component.html',
  styleUrls: ['./add-book-component.component.css']
})
export class AddBookComponentComponent implements OnInit {

  @Output() bookOutput = new EventEmitter<IBook>();
  bookForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly snackBar: MatSnackBar) { }

  ngOnInit() {
    this.newForm()
  }


  save(): void {
    let newBook = this.bookForm.value;
    this.bookOutput.emit(newBook);
    this.newForm();
    this.snackBar.open("Book Added!", "Dismiss", {
      duration: 2000
    })
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
