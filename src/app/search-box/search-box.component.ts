import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { IBook } from '../ibook';

@Component({
  selector: 'ctac-personal-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  searchList: IBook[];

  constructor(
    private readonly dialogRef: MatDialogRef<SearchBoxComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.searchList = data.books
  }

  closeDialog(): void {
    this.dialogRef.close()
  }

  ngOnInit(): void {}

}
