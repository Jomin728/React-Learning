import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";
const ResultsView = ({title,results,navigation}) =>{
    if(!results.length)
    return null
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result)=> result.id}
        renderItem={({item})=> {return (
        <TouchableOpacity onPress={()=>{navigation.navigate('ResultsShow',{id:item.id})}}>
            <ResultsDetail result={item}/>
        </TouchableOpacity>
        ) }}
        />
    </View>
}

const styles= StyleSheet.create({
 titleStyle:{
  color:'black',
  fontSize:18,
  fontWeight:'bold',
  marginLeft:15,
  marginBottom:5

 },
 container:{
    marginBottom:10
 }
})

export default withNavigation(ResultsView);