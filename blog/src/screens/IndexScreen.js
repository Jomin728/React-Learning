import React,{useContext,useEffect} from "react";
import { Feather } from '@expo/vector-icons';
import { View,Text,StyleSheet,FlatList,Button,TouchableOpacity } from "react-native";
import {Context} from "../context/BlogContext";
import { addListener } from "npm";
const IndexScreen = ({navigation}) =>{
    const {state,addBlogPosts,deleteBlogPosts,getBlogpost} = useContext(Context);
    useEffect(()=>{getBlogpost()
    const listener =  navigation.addListener('didFocus',()=>{
        getBlogpost();

        return () =>{
            listener.remove();
        }
    })
    },[])
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('Show',{id:item.id})}}>
        <View>
            <Text>
                Index Screen
            </Text>
            <Button title="Add Post" onPress={addBlogPosts}/>
            <FlatList data={state} keyExtractor={(blogpost)=>blogpost.title}  renderItem={(item)=>{return (
            <View>
                            <Text>{item.title}</Text>
                            <TouchableOpacity onPress={()=>{deleteBlogPosts(item.id)}}>
                            <Feather name="trash" size={24} color="black" />
                            </TouchableOpacity>
            </View>

            
            )
            
        }} />
        </View>
        </TouchableOpacity>
    )
}

IndexScreen.navigationOptions = ({navigation}) =>{
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
    }
}

const styles = StyleSheet.create({

})

export default IndexScreen;