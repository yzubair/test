import React from "react";
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
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";

export default class LoadingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={true}
          //To hide statusBar
          backgroundColor="#00BCD4"
        />
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => {
                this.props.navigation.navigate("Main Page");
              }}
          >
            <Image
              style={{ width: 35, height: 35, resizeMode: "contain", marginLeft:7 }}
              source={require("../assets/images/RoundTrip/backArrow.png")}
            ></Image>
          </TouchableOpacity>

<View >
          <View style={{flexDirection:"row",  justifyContent:"center", alignItems:"center"}}>
            <Text style={styles.headertext}> ISB  </Text>

            {/* <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/loading/flight.jpeg")}
            
            ></Image> */}
<Icon name= {"ios-airplane"} size={25} color="white" style={{marginTop:3}}></Icon>
            <Text style={styles.headertext}>  LHR</Text>
          </View>

          <View style={{flexDirection:"row"}}>
              <Text style={styles.passengerText}>23 Oct</Text>
              <Text style={styles.passengerText}> |  </Text>
              <Text style={styles.passengerText}>1 Passenger</Text>
          </View>
          </View>

          <TouchableOpacity
            style={styles.done}
          >
            <Text style={styles.donetext}>DONE</Text>
          </TouchableOpacity>
        </View>

        {/* center main view */}

        <View style={{width:"100%", height:"78%" }}>
        <ImageBackground
              style={{width:"100%", height:"100%", alignItems:"center",justifyContent:"center"}}
              imageStyle={{ resizeMode:"contain", alignItems:"center"}}
              source={require("../assets/images/loading/loadingBg.png")}
            


              
            >

<Image
              style={{ width: 170, height: 170, resizeMode: "contain", alignSelf:"center",bottom:17 }}
              source={require("../assets/images/loading/loading.png")}
            
            ></Image>

            </ImageBackground>





{/* 
            <View style={styles.star1}>
            <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/loading/star.png")}
            
            ></Image>

             <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/loading/thumb.png")}
            
            ></Image>
            </View> */}

        </View>

        {/* center main end VIEW ABOVE */}

        {/* Bottom Navigation */}

        <View style={styles.navigationView}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.props.navigation.navigate("Main Page");
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../assets/images/home.png")}
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
              source={require("../assets/images/location.png")}
            ></Image>
            <Text style={styles.touchableText}>MY TRIPS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.props.navigation.navigate("Return Flights");
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../assets/images/calander.png")}
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
              source={require("../assets/images/payment.png")}
            ></Image>
            <Text style={styles.touchableText}>PAYMENTS</Text>
          </TouchableOpacity>
        </View>
        {/* END VIEW BELOW */}
      </View>
    );
  }
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "yellow",
    // alignItems: 'center',
    alignSelf: "center",
    justifyContent: "space-between",
    width: "95%",
    height: "100%",
    // marginVertical: 10,
    // borderWidth: 2,
    // borderColor: "blue"
  },
  header: {
    backgroundColor: "#B22023",
    height: "8.5%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 10
  },
  arrow: {
    justifyContent: "flex-start"
    // paddingRight: 50
  },
  headertext: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    fontWeight:"bold"
  },
passengerText:{
    fontSize: 15,
    color: "white",
    alignSelf: "center"
},

  done: {
    width: 30,
    height: 35,
    backgroundColor:  "#B22023",
    borderRadius: 20,
    justifyContent: "center"
  },
  donetext: {
    fontSize: 13,
    color:  "#B22023",
    alignSelf: "center"
  },

  touchableBox: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    justifyContent: "space-between",
    // alignItems:'center',
    alignSelf: "center",
    marginVertical: 20,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 5,
    borderRadius: 20
  },

  addRemoveBox: {
    flexDirection: "row",
    width: "63%",
    height: 45,
    justifyContent: "space-between",
    // alignItems:'center',
    alignSelf: "flex-end",
    marginVertical: 20,
    // backgroundColor: "#F5F5F5",
    // paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 22
  },
  touch1: {
    height: 40,
    width: 115,
    backgroundColor: "#B22023",
    // borderWidth: 2,
    // borderColor: "green",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20
    // paddingLeft:10
    // marginHorizontal: 10,
  },
  touch2: {
    height: 40,
    width: 115,
    // borderWidth:2,
    // borderColor:'blue',
    // backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 50,
    justifyContent: "center"
    // paddingLeft:10
  },

  touchAdd: {
    height: 35,
    width: 90,
    backgroundColor: "#B22023",
    // borderWidth: 2,
    // borderColor: "green",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20
    // paddingLeft:10
    // marginHorizontal: 10,
  },

  touchRemove: {
    height: 35,
    width: 120,
    backgroundColor: "#B22023",
    // borderWidth: 2,
    // borderColor: "green",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 18
    // paddingLeft:10
    // marginHorizontal: 10,
  },

  touchableSelected: {
    fontSize: 11,
    color: "white",
    // paddingLeft: 10,
    alignSelf: "center",
    fontWeight: "bold"
  },

  touchableTextTop: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "black",
    // paddingRight: 30
    fontWeight: "bold"
  },
  addText: {
    fontSize: 12,
    color: "white",
    // paddingLeft: 10,
    alignSelf: "center",
    fontWeight: "bold"
  },

  //   destination wala

  departureView: {
    width: "100%",
    height: 220,
    // flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "black",
    // alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#F5F5F5"
    // paddingLeft: 20,
    // backgroundColor: "pink"
  },
  destinationText: {
    fontSize: 13,
    color: "grey",
    fontWeight: "bold"
  },

  cityText: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 7
  },
  londonText: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold"
  },

  dateText: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold"
  },

  peopleText: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold"
  },

  destinationImage: {
    // marginVertical:10,marginLeft:10
    marginBottom: 5,
    alignSelf: "center",
    marginLeft: 10
  },

  yellowCover: {
    backgroundColor: "#FDD835",
    // borderColor:"blue",
    // borderWidth:2,
    flexDirection: "row",
    width: 105,
    height: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    marginRight: 10,
    justifyContent: "space-around",
    borderRadius: 5
  },
  whiteCover: {
    borderColor: "blue",
    // borderWidth: 2,
    alignItems: "center",
    marginRight: 10,
    marginBottom: 4
    // justifyContent:"center",
    // alignSelf:"center"
  },
  // DATE BOX
  dateBox: {
    width: "100%",
    height: 95,
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    // borderWidth:2,
    // borderColor:"black",
    alignSelf: "center",
    marginBottom: 10,
    paddingLeft: 20
  },

  flyOutwhiteCover: {
    // borderColor:"blue",
    // borderWidth:2,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 200,
    height: 25
  },

  flyOutyellowCover: {
    backgroundColor: "#FDD835",
    // borderColor:"blue",
    // borderWidth:2,
    flexDirection: "row",
    width: 200,
    height: 30,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    paddingHorizontal: 5
  },

  adultWhiteCover: {
    // borderColor:"blue",
    // borderWidth:2,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 60,
    height: 20
  },

  adultYellowCover: {
    backgroundColor: "#FDD835",
    // borderColor:"blue",
    // borderWidth:2,
    flexDirection: "row",
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    paddingHorizontal: 5
  },

  dateYellowCover: {
    backgroundColor: "#FDD835",
    // borderColor:"blue",
    // borderWidth:2,
    // flexDirection: "row",
    width: 55,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 20
    // paddingHorizontal: 5
  },

  dateWhiteCover: {
    // borderColor: "blue",
    // borderWidth: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 60,
    height: 20,
    marginLeft: 20
  },

  addRemove: {
    width: "100%",
    height: 70
    // borderWidth: 2,
    // backgroundColor: "grey"
  },

  star1:{
width:"100%",
flexDirection:"row",
backgroundColor:"white",
justifyContent:"space-between"
  },

  //   navigation bottom

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
    // borderColor:"black",
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

  adultText: { fontSize: 11, color: "grey", fontWeight: "bold" },

  datesText: {
    fontSize: 13,
    color: "grey",
    fontWeight: "bold",
    alignSelf: "center"
  }
});
