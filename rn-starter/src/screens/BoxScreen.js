import React from "react";
import {Text,StyleSheet,View} from 'react-native';

const BoxScreen = () => {
    // return <View style={styles.ViewStyle}>
    //      <Text style={styles.textOneStyle}>Child #1</Text>
    //      <Text style={styles.textTwoStyle}>Child #2</Text>
    //      <Text style={styles.textThreeStyle}>Child #3</Text>

    // </View>

    return <View style={styles.ViewParentStyle}>
        <View style={styles.ViewOneStyle}>

        </View>
        <View style={styles.ViewTwoStyle}>

        </View>
        <View  style={styles.ViewThreeStyle}>

        </View>
    </View>
}

const styles = StyleSheet.create({

ViewParentStyle:{
    height:200,
    borderColor:'black',
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-around'
},
ViewOneStyle:{
    height:50,
    width:50,
    backgroundColor:red
},
ViewTwoStyle:{
    height:50,
    width:50,
    backgroundColor:red,
    marginTop:50 // or alignSelf:'flex-end' or top:50
},
ViewThreeStyle:{
    height:50,
    width:50,
    backgroundColor:red
},
ViewStyle:{
    borderWidth:3,
    borderColor:'black',
    // alignItems:'flex-start'
    // alignItems:'flex-end'
    //alignItems:'center',
    flexDirection:'row',
    //justifyContent:'center', // 'space-around','space-between'
    height:200
    //position:'absolute'  , top,lef,bottom,right
    //...StyleSheet.absoluteFillObject

},
textOneStyle:{
    borderWidth:1,
    borderColor:'red',
    flex:1
    // marginVertical:20,
    // marginHorizontal:20
},
textTwoStyle:{
    borderWidth:1,
    borderColor:'red',
    flex:1
},
textThreeStyle:{
    borderWidth:1,
    borderColor:'red',
    flex:1
}
})

export default BoxScreen;