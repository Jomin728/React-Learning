import { render } from "@testing-library/react"
import Table from "../components/Table"
import SortTable from "../components/SortTable"
function TablePage()
{
    const data = [
        {
        name:'Orange', color:'bg-orange-500',score:5 },
        {name:'Apple', color:'bg-red-500',score:3},
        {name:'Banana', color:'bg-yellow-500',score:1},
        {name:'Lime', color:'bg-green-500',score:4}
    ]

    const config = [
        {label:'Name',
        render:(fruit)=>{return fruit.name},
        sortValue:(fruit)=> fruit.name
    },    
        {label:'Color',
        render:(fruit)=>{return <div className={`p-3 m-2 ${fruit.color}`}></div>}},
        {label:'Score',
        render:(fruit)=> fruit.score,
        sortValue:(fruit)=> fruit.score,
        header:()=>{return <th className="bg-red-500" >Score</th>}}

 ]
    return <div>
        {/* <Table data={data} config={config} /> */}
        <SortTable data={data} config={config}  />
    </div>
}

export default TablePage