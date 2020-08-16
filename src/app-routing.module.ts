import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPageComponent } from './app/personal-page/personal-page.component';
import { PersonalBooklistDetailComponent } from './app/personal-booklist-detail/personal-booklist-detail.component';
import { PersonalBooklistComponent } from './app/personal-booklist/personal-booklist.component';
import { BooklistComponent } from './app/booklist/booklist.component';
import { BookDetailGuard } from './app/book-detail.guard';
import { BookDetailComponent } from './app/book-detail/book-detail.component';
import { AboutComponent } from './app/about/about.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
