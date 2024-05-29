import { useState,useContext } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/books";

function BookShow({book}){

    const {deleteBooks,editBookById}=useContext(BookContext)

    const [showEdit,setEdit] = useState(false)
   
   function handleDeleteClick()
    {
        deleteBooks(book.id)
    }
    function handleEditClick()
    {
       setEdit(!showEdit)
    }
    const handleSubmit = (id,title) =>{
     setEdit(false)
     editBookById(id,title);
    }
    let content = <h3>{book.title}</h3>
    if(showEdit)
    {
        content = <BookEdit book={book} onEdit={handleSubmit}/>
    }
    return (<div className="book-show">
        <img
        alt="books"
        src="https://picsum.photos/200/300"
        
        />
         <div>{content}</div>
         <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
           <button className="delete" onClick={handleDeleteClick}>
            delete
           </button>
         </div>

    </div>)
}

export default BookShow;