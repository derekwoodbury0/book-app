export interface IBook {
  id: number;
  title: string;
  author: string;

  book_image: string;
  description: string;
  inPersonalList: boolean;
  status: string;
  genre: string;
  bestSeller: boolean;
}
