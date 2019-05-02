import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Entypo } from '@expo/vector-icons';

import { Card } from 'react-native-paper';

export default class CameraScreen extends React.Component {
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

  	Snap = async () => {

		if (this.camera) {

			// Take the picture.
			let PhotoData = await this.camera.takePictureAsync({ quality:0.6, base64:false, exif:true });
      console.log("PhotoData",PhotoData);

			// Call the callback.
			// this.props.takephoto(PhotoData.uri);

		}

	};

  render() {
  
      return (
       	<Camera ref={(cam) => { this.camera = cam; }} style={{ flex:1 }} type={Camera.Constants.Type.back}>

					<View style={{ flex:1, position:'absolute', left:0, bottom:0, right:0, backgroundColor:'transparent', flexDirection:'row', borderColor:'#ff0000', borderWidth:0 }}>

						<TouchableOpacity onPress={this.Snap}>

							<Entypo style={{ margin:30 }} name='mobile' size={60} color='#ffffff' />

						</TouchableOpacity>

					</View>

				</Camera>
      );
    }
}