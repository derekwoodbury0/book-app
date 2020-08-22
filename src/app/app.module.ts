import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HeaderComponent } from './header/header.component';
import { PersonalBooklistComponent } from './personal-booklist/personal-booklist.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalBooklistDetailComponent } from './personal-booklist-detail/personal-booklist-detail.component';
import { AddBookComponentComponent } from './add-book-component/add-book-component.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './search-box/search-box.component'

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookComponent,
    BookDetailComponent,
    HeaderComponent,
    PersonalBooklistComponent,
    AboutComponent,
    PersonalBooklistDetailComponent,
    AddBookComponentComponent,
    PersonalPageComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [SearchBoxComponent]
})
export class AppModule { }
