import { useState } from "react";

function BookEdit({book,onEdit}){


    const [value,setValue] =useState(book.title)

    const handleChange = (event) =>{
      setValue(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        onEdit(book.id,value)

    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={value} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
        </div>
    )
}

export default BookEdit;