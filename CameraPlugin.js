import React, { Component } from 'react';
import { View, StyleSheet,Button, Dimensions, Text } from 'react-native';

import Camera from 'react-native-camera';
import { RNCamera, FaceDetector } from 'react-native-camera';


export default class Profile extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        navigation.title = "Profile"     
    }
   

    takePicture() {
        this.camera
          .capture()
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }
    render(){
        return(
            <View style={styles.container}>
            <Camera
            ref={cam => {this.camera = cam}}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            >
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            [CAPTURE]
            </Text>
            </Camera>
            </View>
        );
    }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
},
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40  
    }
});
