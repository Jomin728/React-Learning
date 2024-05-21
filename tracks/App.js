import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import {createAppNavigator,
        createSwitchNavigator,
        createBottomNavigator,  
        createAppContainer} from 'react-navigation'
import { setNavigator } from "./src/navigationRef";

import { Provider as LocationProvider } from "./src/context/LocationContext";


      const tracklistFlow =createStackNavigator({
        TrackList:TrackListScreen,
        TrackDetail:TrackDetailScreen
      })
      tracklistFlow.navigationOptions={
        title:'Tracks',
        // tabBarIcon:''
      }

        const switchNavigator = createSwitchNavigator({
          ResolveAuth:ResolveAuthScreen,
          loginFlow: createStackNavigator({
            Signup:SignupScreen,
            Signin:SigninScreen
          }),
          mainFlow: createMaterialBottomTabNavigator({
            tracklistFlow:tracklistFlow,
            CreateTrack:TrackCreateScreen,
            Account:AccountScreen
          })
        })

  const App =  createAppContainer(switchNavigator);

  export default () => {
    return (
      <TrackProvider>
      <LocationProvider>
      <AuthProvider>
        <App ref={(navigator)=>{setNavigator(navigator)}} />
      </AuthProvider>
      </LocationProvider>
      </TrackProvider>
    )
  }