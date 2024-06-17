import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUsers";
const usersSlice = createSlice({
   name:'users',
   initialState:{
    data:[],
    isLoading:false,
    error:null
   },
   reducers:{

   },
   extraReducers(builder){
   builder.addCase(fetchUsers.pending,(state,action)=>{
    return {...state,isLoading:true}
   })
   builder.addCase(fetchUsers.fulfilled,(state,action)=>{
      return {...state,isLoading:false,data:action.payload}
   })
   builder.addCase(fetchUsers.rejected,(state,action)=>{
      return {...state,isLoading:false,error:action.error}
   })
   builder.addCase(addUser.pending,(state,action)=>{
      return {...state,isLoading:false
      }
   })
   builder.addCase(addUser.fulfilled,(state,action)=>{
      return {...state,data:[...state.data,action.payload]}
   })
   }
})

export const usersReducer = usersSlice.reducer