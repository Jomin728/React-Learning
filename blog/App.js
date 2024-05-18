import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
const navigator = createStackNavigator({
  Index:IndexScreen
},
{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'BusinessSearch'
  }
});


export default createAppContainer(navigator);