import React,{useState} from "react";
import { Text,Button,Input } from "react-native-elements";
import { View,StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AuthForm = ({headerText,errorMessage,callback,submitButtonText}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
        <>
         <Spacer><Text h3>{headerText}</Text></Spacer>
        <Spacer/>

       <Input label = "Email" value={email} onChangeText = {setEmail} autoCapitalize="none" autoCorrect={false} />

       <Input label = "Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry />
       <Spacer>

        { errorMessage ?  <Text style={styles.errormessage}>{errorMessage}</Text> : null }
        
       <Button title={submitButtonText} onPress={()=>{
        callback({email,password})
       }} />
       </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errormessage:{
        color:'red'
     },


})

export default AuthForm;