import { useState } from "react"



function SearchBar({onSubmit})
{
    const [term,setTerm] = useState('');
    const handleClick = (event) =>
    {
        event.preventDefault()
        onSubmit(term)
    }
    const handleChange = (event) =>{
        setTerm(event.target.value)
    }
  return (<div>
    <form onSubmit={handleClick}>
    <input value={term} onChange={handleChange} />
    <button >Search</button>
    </form>
    </div>
  )
}

export default SearchBar