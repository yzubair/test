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

  class BottomNavigation extends Component{
render(){
    return(
    
        <View style={styles.navigationView}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.props.navigation.navigate("Main Page");
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../../assets/images/home.png")}
            ></Image>
            <Text style={styles.touchableText}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.props.navigation.navigate("Your Profile");
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../../assets/images/location.png")}
            ></Image>
            <Text style={styles.touchableText}>MY TRIPS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.props.navigation.navigate("Your Profile");
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../../assets/images/calander.png")}
            ></Image>
            <Text style={styles.touchableText}>BOOKINGS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.props.navigation.navigate("Return Flights");
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../../assets/images/payment.png")}
            ></Image>
            <Text style={styles.touchableText}>PAYMENTS</Text>
          </TouchableOpacity>
        </View>

    );
}
  }

  export default BottomNavigation;

  const styles=StyleSheet.create({

    navigationView: {
        width: "100%",
        height: "11%",
        backgroundColor: "white",
        flexDirection: "row",
        alignSelf: "flex-end",
        // borderWidth:3,
        borderColor:"red"
      },
    
      touch: {
        height: "100%",
        flex: 1,
        // width: 90,
        // borderWidth:2,
        // borderColor:'blue',
        backgroundColor: "#F5F5F5",
        alignSelf: "center",
        // borderWidth:2,
        borderColor: "black",
        alignItems: "center",
        // borderRadius:50,
    
        justifyContent: "center"
      },
      touchableText: {
        color: "#B22023",
        fontSize: 10,
        fontWeight: "bold",
        marginTop: 3
      },
     

  });
