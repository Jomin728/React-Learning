import React from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";
import { AntDesign,Feather,FontAwesome } from '@expo/vector-icons';
const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <AntDesign name="search1" style={styles.iconStyle} color="black" />
            <TextInput style={styles.inputStyle} placeholder="Search" value={term} onChangeText={newTerm => onTermChange(newTerm)} onEndEditing={()=> {onTermSubmit()}} />
        </View>
    )
}

const styles = StyleSheet.create({
background:{
    backgroundColor:'#bfbdbd',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginTop:15
    // alignItems:'center'

},
inputStyle:{
    // borderColor:'black',
    // borderWidth:1,
    flex:1
},
iconStyle:{
  fontSize:35,
  alignSelf:'center',
  marginHorizontal:10
}
})

export default SearchBar;