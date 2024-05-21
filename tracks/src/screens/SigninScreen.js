import React,{useContext} from "react";
import { View,StyleSheet,Text } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
const SigninScreen = () => {
    const {state,signIn,clearErrorMessage} = useContext(AuthContext);
    return (
    <View style={styles.container}>
      <NavigationEvents 
      onWillBlur={clearErrorMessage}
      />
      <AuthForm headerText="Sign in to your Account"
       errorMessage={state.message}
       submitButtonText="Sign In"
       callback={signIn}/>
      <NavLink text="Dont have an Account?, Sign Up instead" routeName="Signup"/>
    </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container:{

           flex:1,
           justifyContent:'center',
           marginBottom:200
         },
})

export default SigninScreen;