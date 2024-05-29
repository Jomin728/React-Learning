import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/books";

import useBooksContext from "../hooks/useBooksContext";

function BookList({}){

    const {books}=useBooksContext()

    const renderedBooks = books.map((book)=>{
        return <BookShow key={book.id} book={book} />
    })

    return <div className="book-list">{renderedBooks}</div>
}

export default BookList;