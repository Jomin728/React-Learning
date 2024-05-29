import { Fragment } from "react"

function Table({data,config})
{
    console.log(data)
    const renderedRows = data.map((fruit,index)=>{
        const renderedCells = config.map((col)=>{
          return <td key={col.label}>{col.render(fruit)}</td>
        })
       return( <tr className="border-b" key={index}>
         {renderedCells}
       </tr>)
    })
    const renderedHeaders = config.map((column)=>{
        if(column.header)
        {
            return  <Fragment key={column.label} >{column.header()}</Fragment> 
        }
        return <th  key={column.label} >{column.label}</th>
    })
    return (
        <table className="table-auto border-spacing-2">
            <thead>
               <tr className="border-b-2">
                {renderedHeaders}
               </tr>
            </thead>
            <tbody>
             {renderedRows}
            </tbody>
        </table>
    )
}

export default Table