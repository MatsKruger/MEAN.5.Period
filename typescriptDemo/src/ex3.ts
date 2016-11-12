// Duck typing er at hvis det objekt der kommer ind ligner det objekt som vi skal bruge er det nok det rigtige.
// If it talks like a duck, walk like a duck, flyes like a duck. Then it must be a duck.

interface IBook {
  title: string;
  readonly author: string;
  published?: Date;
  pages?: number;
}

class createBook implements IBook {
  constructor(public title: string, public author: string, public published: Date, public number: number) {}
}

new createBook('Test', 'mk', new Date(), 10);

// function createBook(book: IBook) {
//   console.log(book);
// }

// new createBook({
//   title: 'Test',
//   author: 'mk',
//   published: new Date(),
//   pages: 10
// })


// new createBook({
//   title: 'Test2',
//   author: 'mk'
// })
