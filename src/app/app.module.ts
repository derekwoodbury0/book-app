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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalBooklistDetailComponent } from './personal-booklist-detail/personal-booklist-detail.component';
import { AddBookComponentComponent } from './add-book-component/add-book-component.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';

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
    PersonalPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'personal',
        component: PersonalPageComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'detail',
            component: PersonalBooklistDetailComponent
          },
          {
            path: 'list',
            component: PersonalBooklistComponent
          }
        ]
      },
      { path: 'books', component: BooklistComponent },
      {
        path: ':genre/:id',
        canActivate: [BookDetailGuard],
        component: BookDetailComponent
      },
      { path: '', redirectTo: 'books', pathMatch: 'full' }
    ]),
    NgbModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
