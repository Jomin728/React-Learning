import React,{useContext,useState} from "react";
import { View,Text,StyleSheet,FlatList,Button,TouchableOpacity,TextInput } from "react-native";
import { Context } from "../context/BlogContext";
const CreateScreen = ({navigation}) =>{
    const {state,addBlogPosts,deleteBlogPosts} = useContext(Context);
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    return (
        <View>
            <Text style={styles.label}>
                 Enter Title
            </Text>
            <TextInput style={styles.text} value={title} onChangeText={(text)=>{setTitle(text)}} />
            <Text style={styles.label}>
                 Enter Content
            </Text>
            <TextInput style={styles.text} value={content} onChangeText={(text)=>{setContent(text)}} />
            <Button title="Add Blog Post" onPress={()=>{addBlogPosts(title,content,()=>{navigation.navigate('Index')})
            
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
 input:{
    fontSize:18,
    borderWidth:1,
    borderColor:'black',
    marginBottom:15,
    padding:5,
    margin:5
 },
 label:{
    fontSize:20,
    marginBottom:5,
    marginLeft:5
 }
})

export default CreateScreen;