import { useEffect ,useContext} from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import BookContext from "./context/books"
const App = () =>{

 
    const {fetchBooks} = useContext(BookContext)
    useEffect(()=>{fetchBooks()},[fetchBooks])


  

  return (
    <div>
  <BookList/> 
   <BookCreate/>
  </div>
  )
}
export default App