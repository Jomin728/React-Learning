import { createSlice,nanoid } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
    name:'cars',
    initialState:{
      searchTerm:'',
      data:[]
    },
    reducers:{
        changeSearchTerm(state,action){
         return {...state,searchTerm:action.payload}
        },
        addCar(state,action){
         return {...state,data:[...state.data,{name:action.payload.name,cost:action.payload.cost,id:nanoid()}]}
        },
        removeCar(state,action){
           const newCars = state.data.filter((car)=>{
            return car.id !== action.payload
           })
           return {...state,data:newCars}
        }
    }
})

export const {changeSearchTerm,addCar,removeCar} = carsSlice.actions
export const {carsReducer} = carsSlice.reducer