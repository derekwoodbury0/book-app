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
import { BookDetailGuard } from './book-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookComponent,
    BookDetailComponent,
    HeaderComponent,
    PersonalBooklistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'books', component: BooklistComponent },
      {
        path: ':genre/:id',
        canActivate: [BookDetailGuard],
        component: BookDetailComponent
      },
      { path: 'personal', component: PersonalBooklistComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'books', pathMatch: 'full' }
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
