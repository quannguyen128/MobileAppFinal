import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, } from 'react-native';
import { Constants } from 'expo';


//import h from '../assets/h.png' //Importando a imagem de fundo

export default class HomeScreen extends React.Component{
  static navigationOptions = {
    header: null,
  };
  
  render() {
    var {navigate} = this.props.navigation;

    return (
      <ImageBackground  source={require('../assets/h.png')} style={styles.containerBackground}>
        <View>
          <Text style={styles.titulo}>Welcome to Cleveland</Text>
        </View>
        
        </ImageBackground>
    );
  }
}
//<Image source={require('./my-icon.png')} />
const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    alignItems: 'center',
  },

  titulo:{
    fontSize: 35,
    textAlign: 'center',
    color:'#fff',
    marginTop:50,
    marginBottom:120,

  },
  



});