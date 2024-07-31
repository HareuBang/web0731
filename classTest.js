function Book(title, author, price) {
  this.title =title;
  this.author = author;
  this.price = price;
}

Book.prototype = {
  toString: function() {
    return `(title${this.title} author${this.author} price${this.price})`
  }
}

let book = new Book('자바스크립트 프로그래밍','전병선', 28000)
console.log(book.toString());