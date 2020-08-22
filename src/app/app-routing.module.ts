import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { PersonalBooklistDetailComponent } from './personal-booklist-detail/personal-booklist-detail.component';
import { PersonalBooklistComponent } from './personal-booklist/personal-booklist.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookDetailGuard } from './book-detail.guard';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AboutComponent } from './about/about.component';

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
