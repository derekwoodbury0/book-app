import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { IBook } from './ibook'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject = new Subject<any>();
  private searchSubject = new Subject<string>();

  emitSearch(search) {
    this.searchSubject.next(search)
  }

  getSearch(){
    return this.searchSubject.asObservable();
  }

  emitList(list) {
    this.bookSubject.next(list)
  }

  getList(): Observable<any> {
    return this.bookSubject.asObservable();
  }

  // count: number = 1;
  apiFictionUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH';

  apiNonFictionUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=ltq5v5nWenzDUaX0TGpRNvO5IFkshMcH';

  baseUrl = 'http://localhost:3000'

  constructor(private readonly http: HttpClient) { }

  apiFictionBooks() {
    return this.http.get(this.apiFictionUrl)
  }

  apiNonFictionBooks() {
    return this.http.get(this.apiNonFictionUrl)
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

  getBookById(genre: string, id: number): Observable<any> {
    return this.http.get<IBook>(`${this.baseUrl}/${genre}Books/${id}`)
  }

  getPersonalBookList(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.baseUrl}/personalBookList`)
  }

  addBook(newBook): Observable<IBook> {
    return this.http.post<IBook>(`${this.baseUrl}/personalBookList`, newBook)
  }

  deleteBook(book): Observable<any> {
    return this.http.delete<IBook>(`${this.baseUrl}/personalBookList/${book.id}`);
  }

  updateReadStatus(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.baseUrl}/personalBookList/${book.id}`, book)
  }

  updateListStatus(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.baseUrl}/${book.genre}books/${book.id}`, book)
  }
}
