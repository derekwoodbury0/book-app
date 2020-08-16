import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable, forkJoin } from 'rxjs'
import { IBook } from './ibook'
import { Book, BookAdapter } from './book.model'
import { map,  } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  count: number = 1;
  apiFictionUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH';

  apiNonFictionUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH';

  baseUrl = 'http://localhost:3000'

  constructor(private readonly http: HttpClient, private readonly adapter: BookAdapter) { }

  apiFictionBooks() {
      return this.http
        .get(this.apiFictionUrl)
        .pipe(map((data: any[]) => data.results.books.map((item: any) => this.adapter.adaptFiction(item))));
  }

  apiNonFictionBooks() {
    return this.http
      .get(this.apiNonFictionUrl)
      .pipe(map((data: any[]) => data.results.books.map((item: any) => this.adapter.adaptNonFiction(item))));
  }

  initializeFictionBooks(books): Observable<IBook[]> {

    return this.http.post<IBook[]>(`${this.baseUrl}/fictionBooks`, books)
  };

  initializeNonFictionBooks(books): Observable<IBook[]> {

    return this.http.post<IBook[]>(`${this.baseUrl}/nonFictionBooks`, books)
  };

  getFictionBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}/fictionBooks`)
  }

  getNonfictionBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}/nonfictionBooks`)
  }

  getBookById(genre: string, id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.baseUrl}/${genre}Books/${id}`)
  }

  getPersonalBookList(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}/personalBookList`)
  }

  addBook(newBook): Observable<IBook[]> {
    return this.http.post<IBook[]>(`${this.baseUrl}/personalBookList`, newBook)
  }

  deleteBook(id: number): Observable<{}> {
    return this.http.delete<IBook>(`${this.baseUrl}/personalBookList/${id}`);
  }

  updateReadStatus(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.baseUrl}/personalBookList/${book.id}`, book)
  }

  updateListStatus(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.baseUrl}/${book.genre}books/${book.id}`, book)
  }



  // list() {
  //   return this.http
  //     .get(this.apiFictionUrl)
  //     .pipe(map((data: any[]) => data.results.books.map((item: any) => this.adapter.adaptFiction(item))));
  // }
}
