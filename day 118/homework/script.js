class LibraryItem {
    constructor(title, year) {
      this.title = title;
      this.year = year;
      this.isAvailable = true; 
    }
  
    borrowItem() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`'${this.title}' Somebody other has it`);
      } else {
        console.log(`'${this.title}' Book isnt in store`);
      }
    }
  
    returnItem() {
      if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`'${this.title}' is turned in`);
      } else {
        console.log(`nobody got '${this.title}' `);
      }
    }
  }



class Book extends LibraryItem {
    constructor(title, year, author, genre) {
      super(title, year);
      this.author = author;
      this.genre = genre;
    }
  
    getSummary() {
      return `
        Book: ${this.title}
        Author: ${this.author}
        Year: ${this.year}
        Genre: ${this.genre}
        Available: ${this.isAvailable ? "Yes" : "No"}
      `;
    }
  }
  

class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
      super(title, year);
      this.issueNumber = issueNumber;
    }
  
    getSummary() {
      return `
        Magazine: ${this.title}
        Year: ${this.year}
        Issue Number: ${this.issueNumber}
        Available: ${this.isAvailable ? "Yes" : "No"}
      `;
    }
  }
  