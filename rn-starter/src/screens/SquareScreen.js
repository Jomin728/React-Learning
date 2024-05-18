import React,{useState,useReducer} from "react";
import {Text, StyleSheet,View,Button} from "react-native";
import ColorCounter from "../components/colorCounter";

const reducer = (state,action) => {
    let val;
    switch(action.colorToChange){
        case 'red':
            val =  (state.red+action.amount >255 || state.red+action.amount <0) ?  state : {...state,red:state.red+action.amount}
            return val;
    
        case 'blue':
            val = (state.blue+action.amount >255 || state.blue+action.amount <0) ? state : {...state,blue:state.blue+action.amount}
            return val;
    
        case 'green':
            val = (state.green+action.amount >255 || state.green+action.amount <0) ? state : {...state,green:state.green+action.amount}
            return val;
    
    
    }
} 

const SquareScreen = () => {
//    const [red,setRed] = useState(0)
//    const [green,setGreen] = useState(0)
//    const [blue,setBlue] = useState(0)



const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});

const setColor=(color,change)=>{

switch(color){
    case 'red':
        (red+change >255 || red+change <0) ? '' : setRed(red+change)
        break;

    case 'blue':
        (blue+change >255 || blue+change <0) ? '' : setBlue(blue+change)
        break;

    case 'green':
        (green+change >255 || green+change <0) ? '' : setGreen(green+change)
        break;


}
}


  return (<View>
          <ColorCounter onIncrease={()=> dispatch({colorToChange:'red',amount:10})} onDecrease={()=> dispatch({colorToChange:'red',amount:-1*10})} color = "Red"></ColorCounter>
          <ColorCounter onIncrease={()=> dispatch({colorToChange:'green',amount:10})} onDecrease={()=> dispatch({colorToChange:'green',amount:-1*10})}  color = "Green"></ColorCounter>
          <ColorCounter onIncrease={()=> dispatch({colorToChange:'blue',amount:10})} onDecrease={()=> dispatch({colorToChange:'blue',amount:-1*10})}  color = "Blue"></ColorCounter>
          <View style={{height:100,width:100,backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}>
            
          </View>

         </View> );
};

const styles = StyleSheet.create({

})

export default SquareScreen;