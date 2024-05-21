import React,{useContext} from "react";
import { View,Text,StyleSheet,FlatList,Button,TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
const ShowScreen = ({navigation}) =>{
    const {state,addBlogPosts,deleteBlogPosts} = useContext(Context);
    const id = navigation.getParam('id')
    const blogPost =  state.find((blogPost)=>{return blogPost.id == id})
    return (
        <View>
            <Text>
                {blogPost.title}
            </Text>
            <Text>
                {blogPost.content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})
ShowScreen.navigationOptions = ({navigation}) =>{
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:id})}>
              <Feather name="pencil" size={30} />
            </TouchableOpacity>
          ),
    }
}
export default ShowScreen;