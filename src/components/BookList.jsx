import Book from "./Book";
import books from "../books";
import Greeting from "./Greeting";
//rendering all the books available:

function BookList() {
  return (
    <div>
      <Greeting greetingText={"Welcome to best book finds!"} />

      <div className="book-list">
        {books.map((book, index) => {
          return (
            <Book
              number={index}
              key={index}
              id={book.id}
              title={book.title}
              author={book.author}
              src={book.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
