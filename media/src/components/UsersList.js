import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store"
import { addUser } from "../store/thunks/addUsers";
import Skeleton from "./Skeleton"
import Button from "./Button"
const UsersList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchUsers())
    },[dispatch])

    const handleClick = () =>
    {
        console.log("clicked")
        dispatch(addUser())
    }

    const {isLoading,data,error} = useSelector((state)=>{
        return state.users
    })

    const renderedUsers = data.map((user)=>{
        return <div key={user.id} className="mb-2 border rounded" >
           <div className="p-2 flex justify-between items-center cursor-pointer"> 
            {user.name}
           </div>
        </div>
    })

    if(isLoading)
        {
            return <div><Skeleton times={10} className="h-10 w-full" /></div>
        }
    if(error)
        {
            return <div>Error Fetching data ...</div>
        }


    return <div>
        <div className="flex flex-row justify-between m-3">
         <h1 className="m-2 text-xl" >Users</h1>
         <Button onClick={handleClick}>
            Add user
         </Button>
        </div>
        {renderedUsers}
    </div>
}

export default UsersList