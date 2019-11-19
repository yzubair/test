import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    StatusBar
  } from "react-native";

  class IconJazz extends Component{
render(){
    return(
    
<TouchableOpacity>
<Image
              style={styles.iconJazz}
              source={this.props.imageUri}
            ></Image>
</TouchableOpacity>


    );
}
  }

  export default IconJazz;

  const styles=StyleSheet.create({

    iconJazz:{ width: 60, height: 60, resizeMode: "contain", marginHorizontal:10, alignSelf:"center" }


  });
