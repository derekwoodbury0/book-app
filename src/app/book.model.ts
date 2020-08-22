import { Injectable } from '@angular/core';

export class Book {
  constructor (
    public title: string,
    public author: string,
    public book_image: string,
    public description: string,
    public status: string = 'Unread',
    public inPersonalList: boolean = false,
    public genre: string,
    public id: number,
    public bestSeller: boolean = true
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class BookAdapter {
  adaptFiction(item: any): Book {
    item.genre = 'fiction'
    let { title, author, book_image, description, status, inPersonalList, genre, rank:id, bestSeller } = item

    return new Book(title, author, book_image, description, status, inPersonalList, genre, id, bestSeller);
  }

  adaptNonFiction(item: any): Book {
    item.genre = 'nonfiction'
    let { title, author, book_image, description, status, inPersonalList, genre, rank:id, bestSeller } = item

    return new Book(title, author, book_image, description, status, inPersonalList, genre, id, bestSeller);
  }
}
