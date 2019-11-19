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
  import Icon from "@expo/vector-icons/Ionicons";
  class PlaceInfo extends Component{
render(){
    return(
    
        <View style={{ marginRight: 25 }}>
        <View style={styles.nextImage}>
          <ImageBackground
            style={styles.bottomImage}
            imageStyle={styles.mainImage}
            source={this.props.imageUri}
          ></ImageBackground>
        </View>

        <View style={styles.nextPrice}>
          <Text style={styles.parkText}>
              {this.props.placeName}
          </Text>
          <Text style={styles.locationText}>
            {this.props.location}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              alignItems:"center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingTop: 13,
                alignItems: "center"
              }}
            >
              <Icon name={"md-star-outline"} size={13}  color="#ffc619"></Icon>
              {/* <Image
                style={{ width: 10, height: 10 }}
                source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcDJ5_d9x1wiqBN--VrWL7_lIr_Hk0BXugwW466-uQ6CSFeoj3"
                  }}
              ></Image> */}
<Text style={styles.ratingText}>{this.props.rating}</Text>
            </View>

            <View style={{ flexDirection: "row", paddingTop: 13 }}>
              <Text style={{ fontSize: 8, paddingRight: 4 }}>
                Starting from
              </Text>

                <Text style={styles.priceText}>{this.props.price}</Text>
            </View>
          </View>
        </View>
      </View>


    );
}
  }

  export default PlaceInfo;

  const styles=StyleSheet.create({


    priceText:{ fontSize: 8, color: "#B22023", fontWeight:"700" },
    ratingText:{ fontSize: 8, marginLeft: 5 },
    locationText:{ marginLeft: 10, opacity: 0.6, fontSize: 9 },
    mainImage:{ borderRadius: 5,borderWidth:1, borderColor:"transparent"},

    nextText: {
        fontWeight: "bold",
        color: "#B22023",
        fontSize: 15
      },
      bottomImage: {
        width: "100%",
        height: "100%",
        // borderRadius:50,
        // borderWidth:2,
        // borderRadius: 50,
        // justifyContent:"center",
        // alignSelf:"center",
        // alignItems:"center"
        marginTop: 20
      },
    
      nextImage: {
        width: 220,
        height: 120,
        // backgroundColor:'green',
        justifyContent: "center"
      },
    
      nextPrice: {
        width: 160,
        height: 80,
        backgroundColor: "white",
        borderWidth:1,
        borderColor:"transparent",
        borderRadius: 7,
        marginLeft: 31,
        bottom: 38,
        justifyContent: "center",
        // marginLeft: 5,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        
      },
    
      parkText:{
        fontWeight: "bold", marginLeft: 10, opacity:0.6
      },


  });
