import React,{useState,useContext} from "react";
import { View,StyleSheet,Button,TextInput,TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { Input,Text } from "react-native-elements";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";
const SignupScreen = ({navigation}) => {

    const {state,signUp,clearErrorMessage} = useContext(AuthContext)

    

    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');

    return (
    <View style={styles.container}>
              <NavigationEvents 
      onWillBlur={clearErrorMessage}
      />
       <AuthForm headerText="Sign up forTracker"
       errorMessage={state.message}
       submitButtonText="Sign Up"
       callback={signUp} />
       <NavLink text="Already Have an Account ? Sign in instead" routeName="Signin" />
     </View>
   
    );
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
 container:{
//    borderColor:'red',
//    borderWidth:10,
   flex:1,
   justifyContent:'center',
   marginBottom:200
 },
 errormessage:{
    color:'red'
 },
 link:{
    color:'blue'
 }
})

export default SignupScreen