var createBook = (function () {
    function createBook(title, author, published, number) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.number = number;
    }
    return createBook;
}());
new createBook('Test', 'mk', new Date(), 10);
//# sourceMappingURL=ex3.js.map