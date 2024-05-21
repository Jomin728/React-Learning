import React,{useContext,useState} from "react";
import { Button,Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
const TrackForm = ()=>{

    const {state:{name,recording,locations},startRecording,stopRecording,changeName} = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

  return <>
  
  <Spacer>
  <Input value={name} onChangeText={changeName} placeholder="Enter Name"/>
  </Spacer>
  <Spacer>
  { !recording ? <Button onPress={startRecording} title="Start Recording" />: <Button onPress={stopRecording} title="Stop" /> }
  </Spacer>
  <Spacer>
  {!recording && locations.length != 0 ? <Button title="Save Recording" onPress={saveTrack} /> : null } 
  </Spacer>
  </>
}

export default TrackForm;