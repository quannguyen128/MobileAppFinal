import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    paddingTop:15,
    height:60,
    backgroundColor:'red'
  }
});
