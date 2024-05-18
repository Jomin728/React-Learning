import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return  <View>
<Text style={styles.text}>Hi there !</Text>
<Button title="Go to Components Demo"
onPress={()=>{props.navigation.navigate('Components')}}
></Button>
<Button title="Go to Lists Demo"
onPress={()=>{props.navigation.navigate('List')}}
></Button>
<Button title="Go to Images Demo"
onPress={()=>{props.navigation.navigate('Image')}}
></Button>
<Button title="Go to Counter Demo"
onPress={()=>{props.navigation.navigate('Counter')}}
></Button>
<Button title="Go to Colors Demo"
onPress={()=>{props.navigation.navigate('Colors')}}
></Button>
<Button title="Go to Squares Demo"
onPress={()=>{props.navigation.navigate('Square')}}
></Button>
<Button title="Go to Text Demo"
onPress={()=>{props.navigation.navigate('Text')}}
></Button>
<Button title="Go to Box Demo"
onPress={()=>{props.navigation.navigate('Box')}}
></Button>
{/* <TouchableOpacity onPress={()=>{props.navigation.navigate('List')}}>
  <Text>Go to list Demo</Text>
  <Text>Go to list Demo</Text>
  <Text>Go to list Demo</Text>

</TouchableOpacity> */}
</View>
};
   

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
