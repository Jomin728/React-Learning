import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
const trackReducer = (state,actions) => {

    switch(actions.type)
    {
        case 'fetch_tracks':
            return actions.payload;
        default:
            return state;
    }
}

const fetchTracks = (dispatch) =>{
    return async () => {
      const response = tracker.get('/tracks')
      dispatch({type:'fetch_tracks',payload:response.data})
    }
}
const createTrack = (dispatch) =>{
    return async(name,locations) => {
    await tracker.post('/tracks',{name,locations})

    }
}

export const {Context,Provider} = createDataContext(trackReducer,{fetchTracks,createTrack},[]);