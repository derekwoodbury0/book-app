import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IBook } from './ibook'
import { BookDetailGuard } from './book-detail.guard';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiFictionUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH'

  apiNonFictionUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH'

  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getFictionBooks2() {
    this.http.get(this.apiFictionUrl)
  }

  getNonFictionBooks2() {
    return this.http.get(this.apiNonFictionUrl)
  }

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
    newBook.inPersonalList = true;
    newBook.status = "Unread";

    return this.http.post<IBook[]>(`${this.baseUrl}/personalBookList`, newBook)
  }

  deleteBook(id: number): Observable<{}> {
    return this.http.delete<IBook>(`${this.baseUrl}/personalBookList/${id}`);
  }

  updateListStatus(book: IBook): Observable<IBook> {
    if (book.inPersonalList) {
      book.inPersonalList = false
    } else {book.inPersonalList = true}
    return this.http.put<IBook>(`${this.baseUrl}/${book.genre}Books/${book.id}`, book )
  }

  updateReadStatus(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.baseUrl}/personalBookList/${book.id}`, book)
  }
}
