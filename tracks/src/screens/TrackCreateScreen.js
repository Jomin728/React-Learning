import '../_mockLocation'
import React,{useContext, useEffect, useState,useCallback} from "react";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from '../components/Map'
import { SafeAreaView } from "react-navigation";
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({isFocused}) => {

    const {state:{recording},addLocation} = useContext(LocationContext)
    const callback = useCallback((location)=>{addLocation(location,recording)},[recording])

    const [err] = useLocation(isFocused || recording,callback)



    return (
        <SafeAreaView forceInset={{top:'always'}}>
        <Text h3>Create a Track</Text> 
        <Map/>
        {err? <Text>Please enable location Services</Text> : null}
        <TrackForm/>
        </SafeAreaView>
         )
}

TrackCreateScreen.navigationOptions = {
    title:'Add Track'
    // tabBarIcon:
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;