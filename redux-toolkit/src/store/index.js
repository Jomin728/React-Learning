import { configureStore,createSlice,createAction } from "@reduxjs/toolkit";

export const reset = createAction('app/reset')

const songsSlice = createSlice({
    name:'song',
    initialState:[],
    reducers:{
        addSong(state,action)
        {
           state.push(action.payload)
        },
        removeSong(state,action)
        {
         const index = state.indexOf(action.payload)
        state.splice(index,1)
        }

    },
    extraReducers(builder){
        builder.addCase(reset,(state,action)=>{
            return []
        })
    //  builder.addCase('movie/reset',(state,action)=>{
    //    return [];
    //  })
    }
})

const moviesSlice = createSlice({
    name:'movie',
    initialState:[],
    reducers:{
        addMovie(state,action){
            state.push(action.payload)
        },
        removeMovie(state,action)
        {
         const index = state.indexOf(action.payload)
        state.splice(index,1)
        }
    },
    extraReducers(builder){
        builder.addCase(reset,(state,action)=>{
            return []
        })
    }
})

const store = configureStore({
    reducer:{
        songs:songsSlice.reducer,
        movies:moviesSlice.reducer  
    }
})
// console.log(store)
const startingState = store.getState()
// console.log(startingState)

store.dispatch({
    type:'song/addSong',
    payload: 'New Song !!!'
})

const finalState = store.getState();
export {store}
export const {addSong,removeSong} = songsSlice.actions
export const {addMovie,removeMovie} = moviesSlice.actions



// console.log(finalState);

// console.log(songsSlice.actions.addSong())