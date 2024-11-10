interface Book {
  bookId: number;
  title: string;
  author: string;
  category: string;
  price: number;
  coverFileName: string;
}

export const mockBookData: Book[] = [
  {
    bookId: 5,
    title: "Harry Potter and the cats",
    author: "JKR",
    category: "Mystery",
    price: 432.0,
    coverFileName: "8f5f8b64-794c-4dbb-b369-6cc9cc762ce0HP5.jpg",
  },
];
