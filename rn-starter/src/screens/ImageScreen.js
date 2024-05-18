import React from "react";
import {Text, StyleSheet,View} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return ( <View>
         <ImageDetail title="forest" score={3} imageSource={require('../../assets/forest.jpg')}/>
         <ImageDetail title="beach" score={4} imageSource={require('../../assets/beach.jpg')}/>
         <ImageDetail title="mountain" score={5} imageSource={require('../../assets/mountain.jpg')}/>

         </View> );
};

const styles = StyleSheet.create({

})

export default ImageScreen;