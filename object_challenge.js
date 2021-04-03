class Book {
  constructor(name, totalPages) {
    this.name = name;
    this.totalPages = totalPages;
    this.pagesLeft = totalPages;
  }
  pagesRead(pages) {
    this.pagesLeft = this.totalPages - pages;
  }
}

export default Book;

const book1 = new Book("Automate Boring Stuff with Python", 300);
const book2 = new Book("Make It Stick", 250);
const book3 = new Book("Promise Land", 500);
const book4 = new Book("Power of Habit", 200);
const book5 = new Book("Becoming", 350);

console.log("1st Book:", book1.name);
console.log("2nd Book:", book2.name);
console.log("3rd Book:", book3.name);
console.log("4th Book:", book4.name);
console.log("5th Book:", book5.name);

console.log(book1.name, "pages left before:", book1.pagesLeft);

book1.pagesRead(50);

console.log(book1.name, "pages left after:", book1.pagesLeft);
