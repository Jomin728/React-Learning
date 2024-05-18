import React,{useState,useReducer} from "react";
import {Text, StyleSheet,View,Button} from "react-native";

reducer = (state,action) =>{
  if(action.type == 'increase')
   return {count:state.count + 1 };
  else
   return {count:state.count - 1};
}

const CounterScreen = () => {
    // let counter = 0; // not proper to intitalize state as screen wont refresh

    const [state,dispatch] = useReducer(reducer,{count:0});

  return ( <View>
          <Button title="Increase" onPress={()=>{
            // counter++
            dispatch({type:'increase'})
            }}/>
          <Button title="Decrease" onPress={()=>{
            // counter--
            dispatch({type:'decrease'})
            }}/>
          <Text>Current Count : {state.count} </Text>
         </View> );
};

const styles = StyleSheet.create({

})

export default CounterScreen;