import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MapView } from 'expo';

import { Card } from 'react-native-paper';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
      return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 	41.505493,
          longitude: 	-81.681290,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}


