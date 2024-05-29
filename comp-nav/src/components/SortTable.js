import { useState } from "react";
import Table from "./Table";
import { data } from "autoprefixer";
function SortTable(props)
{

    const [sortOrder,setSortOrder] = useState(null)
    const [sortBy,setSortBy] = useState(null)

    const handleClick = (label) =>{
      if(sortOrder === null)
      {
        setSortOrder('asc')
        setSortBy(label)
      }
      else if(sortOrder == 'asc'){
        setSortOrder('desc')
        setSortBy(label)
      }
      else if(sortOrder == 'desc'){
        setSortOrder(null)
        setSortBy(null)
      }
    }


    const {config,data} = props;

    const updatedConfig = config.map((column)=>{
        if(!column.sortValue)
        return column;
        
        return {...column,header:()=><th onClick={()=>{handleClick(column.label)}}>{column.label}</th>}

    })

    let sortedData = [...data]
    if(sortOrder && sortBy)
    {
        const {sortValue} = config.find((column)=> column.label == sortBy)
        sortedData.sort((a,b)=>{
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder == 'asc'? 1:-1;
            if(typeof valueA == 'string')
            return valueA.localeCompare(valueB) *  reverseOrder
            else{
                return (valueA-valueB)*reverseOrder;
            }
        })

    }

  return <Table {...props} data={sortedData} config={updatedConfig} />
}

export default SortTable