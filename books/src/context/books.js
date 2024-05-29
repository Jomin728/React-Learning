import { createContext, useState,useCallback } from "react";
import axios from "axios"

const BookContext = createContext()

function Provider({children}) {
    const [books,setBooks] = useState([])

    const fetchBooks = useCallback(async() =>{
        const response = await axios.get("http://localhost:3001/books")
         console.log(response) 
         setBooks(response.data)
    },[])

    

    const createBook = async(title) =>{
        const response = await axios.post("http://localhost:3001/books",{
           title:title
        })
        console.log(response)
        setBooks([...books,response.data])

    }

    const deleteBooks = async(id) =>{
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
         console.log(response)
        const updatedBooks = books.filter((book)=>{
            return book.id !== id
        })
        setBooks(updatedBooks)
    }

    const editBookById = async(id,newTitle) =>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
         })
         console.log(response)
       const updatedBooks = books.map((book)=>{
        if(book.id === id)
        {
            // return {...book,title:newTitle}
            return {...book,...response.data}


        }
        return book
       })
       setBooks(updatedBooks);
    }

    const valueToShare = {
        books,
        deleteBooks,
        editBookById,
        createBook,
        fetchBooks
    }
  
  return <BookContext.Provider value={valueToShare}>
    {children}
  </BookContext.Provider>
}

export {Provider}
export default BookContext