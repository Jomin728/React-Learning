import { useState,useEffect, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel"
import { produce } from "immer";
function useSomething (initialCount) {
    const [count,setCount] = useState(initialCount);
    const handleClick = () =>{
       setCount(count+1);
    }

    return {count,handleClick}
}

const reducer = (state,action) => {
  switch(action.type)
  {
    case 'increment_count':
        return {...state,count:state.count+1}
    case 'decrement_count':
            return {...state,count:state.count-1}

    case 'update_count':
        return {count:state.count+state.valueToAdd,valueToAdd:0}
    
    case 'update_valueToAdd':
        return {...state,valueToAdd:action.payload}
    default:
        return state;
  }
}

function CounterPage({initialCount})
{

    // const [count,setCount] = useState(10);
    // const [valueToAdd,setValueToAdd] = useState(0);
    // const {count,handleClick} = useSomething(initialCount);
    // const [state,dispatch] = useReducer(produce(reducer),{count:initialCount,valueToAdd:0})    //using immer
    const [state,dispatch] = useReducer(reducer,{count:initialCount,valueToAdd:0})
    const increment = () => {

        dispatch({type:'increment_count',payload:1})

    //  setCount(count+1)
    }
    const decrement = () => {
        dispatch({type:'decrement_count',payload:1})

    //  setCount(count-1)
    }
    const handleChange = (event) =>{
        dispatch({type:'update_valueToAdd',payload:(parseInt(event.target.value)||0)})
        // setValueToAdd(parseInt(event.target.value)||0);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({type:'update_count'})
        // setCount(count+valueToAdd);
        // setValueToAdd(0);
    }
    return <Panel>
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button> 
        <Button onClick={decrement}>Decrement</Button> 
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input value={state.valueToAdd || ''} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
            <Button>Add it</Button>
        </form>
    </Panel>
}
export default CounterPage