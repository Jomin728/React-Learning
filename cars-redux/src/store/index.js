import { configureStore } from "@reduxjs/toolkit";
import { changeSearchTerm,addCar,removeCar } from "./slices/carsSlice";
import { changeName,changeCost } from "./slices/formSlice";
import { carsReducer } from "./slices/carsSlice";
import { formReducer } from "./slices/formSlice";
import { carsSlice } from "./slices/carsSlice";
import { formSlice } from "./slices/formSlice";
const store = configureStore({
    reducer:{
        cars:carsSlice.reducer,
        forms:formSlice.reducer
    }
})

export {store,changeName,changeCost,changeSearchTerm,addCar,removeCar}