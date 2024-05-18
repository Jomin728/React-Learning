import React from "react";
import {Text, StyleSheet,View} from "react-native";
// const greeting = <Text style={styles.subHeaderStyle}>My name is jomin</Text>;
const name = 'jomin'
const ComponentsScreen = () => {
  return ( <View><Text style={styles.textStyle}>Getting Started with React Native!</Text>
  <Text style={styles.subHeaderStyle}>My name is {name}</Text>
            {/* {greeting} */}
         </View> );
};

const styles = StyleSheet.create({
    textStyle:{
     fontSize:45
    },
    subHeaderStyle:{
        fontSize:20
    }
})

export default ComponentsScreen;