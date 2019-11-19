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

export default class CancelledTrips extends React.Component {
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
          <View style={{ flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
            <Text style={styles.headertext}> YOUR PROFILE  </Text>




          </View>
          </View>

          <TouchableOpacity
            style={styles.done}
          >
            <Text style={styles.donetext}>DONE</Text>
          </TouchableOpacity>
        </View>
{/* </View> */}
        {/* center main view */}

        <View style={{width:352, height:520}}>
        
{/* image View */}
<View style={styles.topImage}>
<Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={require("../assets/images/profile/image.png")}>
            
</Image>
<Text style={styles.name}>Yasir Zubair </Text>
<Text style={styles.premium}>Premium Member</Text>
</View>
{/* Hooking History*/}
        <View style={styles.nextDestinationView}>
          <Text style={styles.nextText}> BOOKING HISTORY</Text>
        </View>

 {/* completed ---canceled */}

 <View style={styles.touchableBox}>
              <TouchableOpacity style={styles.touch2}
                             onPress={() => {
                                this.props.navigation.navigate("Completed Trips");
                               }}>
                <Text style={styles.touchableTextTop}>Completed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch1}  

               >
                <Text style={styles.touchableSelected}>Cancelled</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch2} >
              {/* onPress={() => {
                this.props.navigation.navigate("MultiCity");
               }}> */}
                <Text style={styles.touchableTextTop} > </Text>
              </TouchableOpacity>
            </View>

            {/* Last Synchorized */}

            <View style={{width:'100%', height:30, justifyContent:"center"}}>
<Text style={styles.lastSync}>last synced At 12:15am 05 July</Text>
            </View>

            {/* Trip from and to  */}
<View>
<View style={styles.trip}>
<View >
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.tripText}>Karachi</Text>

            {/* <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/loading/flight.jpeg")}
            
            ></Image> */}
<Icon name= {"ios-airplane"} size={25} color="black" style={{marginTop:3,}}></Icon>
            <Text style={styles.tripText}>Dubai</Text>
          </View>

          <View>
              <Text style={styles.passengerText}>Sat 28 Nov</Text>
          </View>
          </View>

          {/* image view people */}

         
          <View style={{justifyContent:"center", alignItems:"center",alignSelf:"center",marginRight:10}}>
<Image style={{resizeMode:"contain",    width:42, height:42}} source={require('../assets/images/RoundTrip/people.png')}>

</Image>
    <Text style={styles.destinationText}>2 PEOPLES
    </Text>
</View>
        
</View>


            {/* Trip from and to  */}
<View style={styles.trip}>
<View >
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.tripText}>Lahore</Text>

            {/* <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/loading/flight.jpeg")}
            
            ></Image> */}
<Icon name= {"ios-airplane"} size={25} color="black" style={{marginTop:3,}}></Icon>
            <Text style={styles.tripText}>New York</Text>
          </View>

          <View>
              <Text style={styles.passengerText}>Fri 01 Oct</Text>
          </View>
          </View>

          {/* image view people */}

         
          <View style={{justifyContent:"center", alignItems:"center",alignSelf:"center",marginRight:10}}>
<Image style={{resizeMode:"contain",    width:42, height:42}} source={require('../assets/images/RoundTrip/people.png')}>

</Image>
    <Text style={styles.destinationText}>1 PEOPLE
    </Text>
</View>
        
</View>

            {/* Trip from and to  */}
        
<View style={styles.trip}>
<View >
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.tripText}>Peshawar</Text>

            {/* <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/loading/flight.jpeg")}
            
            ></Image> */}
<Icon name= {"ios-airplane"} size={25} color="black" style={{marginTop:3,}}></Icon>
            <Text style={styles.tripText}>Doha</Text>
          </View>

          <View>
              <Text style={styles.passengerText}>Sun 07 Nov</Text>
          </View>
          </View>

          {/* image view people */}

         
          <View style={{justifyContent:"center", alignItems:"center",alignSelf:"center",marginRight:10}}>
<Image style={{resizeMode:"contain",    width:42, height:42}} source={require('../assets/images/RoundTrip/people.png')}>

</Image>
    <Text style={styles.destinationText}>4 PEOPLES
    </Text>
</View>
        
</View>


</View>



{/* center main end VIEW Below */}
</View>
        
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
              this.props.navigation.navigate("Return Flights");
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
    // justifyContent: "flex-start",
    width: "95%",
    height: "100%",
    marginVertical: 10,
    // borderWidth: 2,
    // borderColor: "blue"
  },
  header: {
    backgroundColor: "#B22023",
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    paddingHorizontal: 10
  },
  arrow: {
    justifyContent: "flex-start"
    // paddingRight: 50
  },
  headertext: {
    fontSize: 23,
    color: "white",
    alignSelf: "center",
    fontWeight:"400"
  },
tripText: {
    fontSize: 18,
    // color: "white",
    // alignSelf: "center",
    fontWeight:"500",
    paddingHorizontal:10
  },

passengerText:{
    fontSize: 12,
    paddingLeft:10,
    fontWeight:"400"

  
},

  done: {
    width: 30,
    height: 35,
    backgroundColor:  "#B22023",
    borderRadius: 20,
    justifyContent: "center",
    // borderWidth:2
  },
  donetext: {
    fontSize: 13,
    color:  "#B22023",
    alignSelf: "center"
  },

  touchableBox: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "space-between",
    // alignItems:'center',
    alignSelf: "center",
    marginTop: 20,
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

  lastSync:{
fontSize:11,
fontWeight:"500",
opacity:0.7
  },
trip:{
// borderWidth:2,
height:53,
marginBottom: 10,
backgroundColor:"#FCE4EC",
flexDirection:"row",
justifyContent:"space-between"
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
    fontSize: 7,
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
    height: 70,
    backgroundColor: "#B22023",
    flexDirection: "row"
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
  },

  topImage:{
      // backgroundColor:"pink",
      width:"100%",
      height:"40%",
      justifyContent:"center",
      alignItems:"center"

  },

  profile:{
    // backgroundColor:"yellow",
    width:"100%",
    height:"27%",
    // borderColor:"red",
    borderTopWidth:1,
    borderTopColor: "grey",
    justifyContent:"center"


  },

  myProfile:{
// borderWidth:2,
flexDirection:"row",
alignItems:"center",
height:30,
marginBottom:5
  },

  iconImage: { width: 15, height: 15, resizeMode: "contain" ,marginLeft:5},

  myProfileText:{
    fontSize:15,
    fontWeight:"600",
    marginLeft:15,
    opacity:0.7
  },

  name:{
      marginTop:7,
fontSize:15,
fontWeight:"500"

  },

  premium:{
opacity:0.6
  },
  nextDestinationView: {
    width: "100%",
    // height:50,
    backgroundColor: "white"
  },

  nextText: {
    fontWeight: "bold",
    color: "#B22023",
    fontSize: 15
  },

});
