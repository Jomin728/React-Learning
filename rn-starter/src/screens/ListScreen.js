import React from "react";
import {View,Text,StyleSheet, FlatList} from 'react-native'
// const friends = [
//     {name:'Friend #1',key:'1'},
//     {name:'Friend #2',key:'2'},
//     {name:'Friend #3',key:'3'},
//     {name:'Friend #4',key:'4'},
//     {name:'Friend #5',key:'5'},
//     {name:'Friend #6',key:'6'},
//     {name:'Friend #7',key:'7'},
//     {name:'Friend #8',key:'8'}
// ]
const friends = [
    {name:'Friend #1',age:20},
    {name:'Friend #2',age:30},
    {name:'Friend #3',age:40},
    {name:'Friend #4',age:50},
    {name:'Friend #5',age:60},
    {name:'Friend #6',age:70},
    {name:'Friend #7',age:80},
    {name:'Friend #8',age:90}
]
const ListScreen = () =>{
    //horizontal, showsHorizontalScrollIndicator={false}
    return <FlatList keyExtractor={(friend)=> friend.name} data={friends} renderItem={({item})=>{ return <Text style={styles.textStyle}>Name:{item.name} - Age : {item.age}</Text>}} ></FlatList>
}

const styles = StyleSheet.create({
textStyle:{
    marginVertical:40
}
})

export default ListScreen;