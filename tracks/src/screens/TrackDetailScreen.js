import React,{useContext} from "react";
import { View,StyleSheet,Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
const TrackDetailScreen = ({navigation}) => {

    const {state} = useContext(TrackContext);

    const id =  navigation.getParam('id');

    const track = state.find((val)=>{return val._id == id })

    const initialCoords = track.locations[0].coords 

    return <>
    <Text style={{fontSize:48}}>{track.name}</Text>
    <MapView style={styles.map}
    initialRegion={
        {
            longitudeDelta:0.01,
            latitudeDelta:0.01,
            ...initialCoords
        }
    }
    >
        <Polyline coordinates={track.locations.map((val)=>{
            return val.coords
        })} />
    </MapView>
    </>
}

const styles = StyleSheet.create({
map:{
    height:300
}
})

export default TrackDetailScreen;