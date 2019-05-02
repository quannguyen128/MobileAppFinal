import * as React from 'react';
import NavBar from './components/NavBar'
import { View } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import MapScreen from './components/MapScreen'
import HomeScreen from './components/HomeScreen'
import ProfilesScreen from './components/ProfilesScreen';
import InvoiceScreen from './components/InvoiceScreen'
import CameraScreen from './components/CameraScreen'


// or any pure javascript modules available in npm
import { Ionicons, AntDesign, MaterialIcons, Octicons, Entypo, Feather } from '@expo/vector-icons';
import Firebase from './services/Firebase';



export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppBottomTabs = createBottomTabNavigator({   
  HomeScreen : {
      screen : HomeScreen,
      navigationOptions:{
        tabBarLabel: 'Home',
        tabBarIcon: <MaterialIcons name="home" size={23} color="black" />
      }
    },
    MapScreen : {
      screen : MapScreen,
      navigationOptions:{
        tabBarLabel: 'Map',
        tabBarIcon: <Octicons name="location" size={23} color="black" />
      }
    },
 
     Camera : {
      screen : CameraScreen,
      navigationOptions:{
        tabBarLabel: 'Camera',
        tabBarIcon: <Entypo name="camera" size={23} color="black" />
      }
    },
    ProfilesScreen : {
      screen: Firebase,
      navigationOptions:{
        tabBarLabel: 'Profiles',
        tabBarIcon: <Feather name="user" size={23} color="black" />
      }
    },
    Invoice : {
      screen : InvoiceScreen,
      navigationOptions:{
        tabBarLabel: 'Calender',
        tabBarIcon: <AntDesign name="calendar" size={23} color="black" />
      }
    }
  },
  {
    tabBarOptions :{
  }

  }
  )

const AppContainer = createAppContainer(AppBottomTabs)