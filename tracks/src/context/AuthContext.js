import React from "react";
import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state,actions) =>{
    switch (actions.type) {
      case 'add_error':
        return {...state,message:actions.payload}
      
      case 'signin':
        return {message:'',token:actions.payload}

      case 'clear_error_message':
        return {...state,message:''}

      case 'signout':
        return {message:'',toke:null}

    
      default:
        return state;
    }
}

const clearErrorMessage = (dispatch) => {
 return () => {
   dispatch({type:'clear_error_message'})
 }
}

const tryLocalSignIn = (dispatch) =>{
return async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        dispatch({type:'signin',payload:token})
        navigate('TrackList')
    }
    else{
        navigate('loginFlow')
    }
}
}

const signUp = (dispatch) =>{
  return async ({email,password}) => {
   
    try{
      const response = await tracker.post('/signup',{email:email,password:password})
      await AsyncStorage.setItem('token',response.data.token)
      dispatch({type:'signin',payload:response.data.token})
      navigate('TrackList')
      console.log(response.data);
    }
    catch(err){
     console.log(err.message);
     dispatch({type:'add_error',payload:'Something went wrong with signup'})
    }
    


  }
}
const signIn = (dispatch) => {
    return async ({email,password}) => {
      try{
       const response = await tracker.post('/signin',{email,password})
       await AsyncStorage.setItem('token',response.data.token)
       dispatch({type:'signin',payload:response.data.token})
       navigate('TrackList')
      }
      catch(err)
      {
        dispatch({type:'add_error',payload:'Something went wrong with signin'})

      }
    }
}

const signOut = (dispatch) => {
    return async () => {
      await AsyncStorage.removeItem('token')
      dispatch({type:'signout'})
      navigate('loginFlow')
    }
}


export const {Context,Provider} = createDataContext(authReducer,{signUp,signIn,signOut,clearErrorMessage,tryLocalSignIn},{token:null,errorMessage:''})