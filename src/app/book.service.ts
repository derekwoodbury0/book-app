import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IBook } from './ibook'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

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

  idCount: number = 2

  addBook(newBook): Observable<IBook[]> {
    newBook.id = this.idCount;
    this.idCount = this.idCount + 1;
    return this.http.post<IBook[]>(`${this.baseUrl}/personalBookList`, newBook)
  }

  deleteBook(id: number): Observable<{}> {
    return this.http.delete<IBook>(`${this.baseUrl}/personalBookList/${id}`);
  }

}
