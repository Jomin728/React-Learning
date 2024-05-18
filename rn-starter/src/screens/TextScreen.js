import React,{useState} from "react";
import {Text, StyleSheet,View,TextInput} from "react-native";

const TextScreen = () => {

    const [name,setName] = useState("")
  return ( <View>
    <Text>Enter Password:</Text>

         <TextInput 
         autoCapitalize="none"
         autoCorrect={false}
         style={styles.input}
         value={name}
         onChangeText={(newValue)=>{
           setName(newValue)
         }}
         />
         {name.length<4? <Text>Name must be more than 4 characters</Text> : null}
         </View> 
         
         );
};

const styles = StyleSheet.create({
  input:{
    margin:10,
    borderColor:'black',
    borderWidth:1
  }
})

export default TextScreen;