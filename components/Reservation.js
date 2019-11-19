import React, { Component } from "react";
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
// import Icon from "@expo/vector-icons/Ionicons";
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";

export default class Reservation extends Component {
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
              style={{
                width: 35,
                height: 35,
                resizeMode: "contain",
                marginLeft: 7
              }}
              source={require("../assets/images/RoundTrip/backArrow.png")}
            ></Image>
          </TouchableOpacity>

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={styles.headertext}>Reservation Complete </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.done}>
            <Text style={styles.donetext}>DONE</Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
        {/* center main view */}

        <View style={{ width: "100%", backgroundColor: "#F5F5F5", }}>
          <View style={{flexDirection:"row", justifyContent:"space-around", paddingVertical:20}}>
            <View>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                //   marginLeft: 10
                }}
                source={require("../assets/images/Reservation/done.png")}
              ></Image>
            </View>
            <View style={{justifyContent:"center", }}>
            <View><Text style={styles.confText}>Confirmation</Text>
            <Text style={styles.completedText}>Your reservation Completed</Text>
            <Text style={styles.completedText}>successfuly, your reservation</Text>
            <Text style={styles.completedText}>details are sent to your email</Text>
            <Text style={styles.completedText}>and WhatsApp</Text>
            
            
            </View>
            </View>
          </View>
{/* Booking details */}
<View style={styles.flightwholeView}>
                {/* depart/arrival */}
                <View style={{ paddingTop: 20,paddingBottom: 10,width:"33.33%"  }}>
                  <View style={styles.depIsb}>
                    <View style={styles.departView}>
                      <Text style={styles.departText}>DEPARTURE</Text>
                    </View>

                    <View style={styles.timeView}>
                      <Text style={styles.timeText}>ISB - 3:00 PM</Text>
                    </View>
                  </View>

                  <View style={styles.stopDubai}>
                    <View>
                      <Text style={styles.stopText}>1 Stop</Text>
                      <Text style={styles.stopText}>(Dubai)</Text>
                    </View>

                    <View>
                      <Image style={{ height:50, resizeMode:"contain", marginBottom: 5,}}
                        source={require("../assets/images/line.png")}
                      ></Image>
                    </View>

                    <View>
                      <Text style={styles.stopText}>17 h 15 min</Text>
                    </View>
                  </View>

                  <View style={styles.depIsb}>
                    <View style={styles.departView}>
                      <Text style={styles.departText}>ARRIVAL</Text>
                    </View>

                    <View style={styles.timeView}>
                      <Text style={styles.timeText}>KHI - 5:30 PM</Text>
                    </View>
                  </View>

                  {/* depart/arrival end below */}
                </View>

                {/* pkr 170,000 view emirates */}

                <View style={{width:"33.33%", paddingTop:5 }}>
                  <View>
                    <Text style={styles.departText}>PKR 170,000</Text>
                  </View>
                  <View style={styles.pkrLine} />
                  <View style={{ alignSelf:"center"}}>
                    <Image style={{width:90, height:50, resizeMode:"contain"}}
                      source={require("../assets/images/emirates.png")}
                    ></Image>
                  </View>
                  <View>
                    <Text style={styles.planeText}>EY-746</Text>
                  </View>
                  <View style={styles.pkrLine} />
                </View>

                {/* depart/arrival */}
                <View style={{  paddingTop: 20,paddingBottom: 10, width:"33.33%" }}>
                  <View style={styles.depIsb}>
                    <View style={styles.departView}>
                      <Text style={styles.departText}>DEPARTURE</Text>
                    </View>

                    <View style={styles.timeView}>
                      <Text style={styles.timeText}>KHI - 9:00 PM</Text>
                    </View>
                  </View>

                  <View style={styles.stopDubai}>
                    <View>
                      <Text style={styles.stopText}>1 Stop</Text>
                      <Text style={styles.stopText}>(Dubai)</Text>
                    </View>

                    <View>
                      <Image style={{ height:50,  resizeMode:"contain", marginBottom: 5,}}
                        source={require("../assets/images/line.png")}
                      ></Image>
                    </View>

                    <View>
                      <Text style={styles.stopText}>17 h 15 min</Text>
                    </View>
                  </View>

                  <View style={styles.depIsb}>
                    <View style={styles.departView}>
                      <Text style={styles.departText}>ARRIVAL</Text>
                    </View>

                    <View style={styles.timeView}>
                      <Text style={styles.timeText}>LHR - 5:30 PM</Text>
                    </View>
                  </View>

                  {/* depart/arrival end below */}
                </View>



                {/* final view for flightwholeview */}
              </View>

{/* end of booking details */}
<View style={{ flexDirection:"row"}}>
    <View style={styles.green}>
    <Image style={{ width:35, height:35,  resizeMode:"contain",}}
                        source={require("../assets/images/Reservation/calculater.png")}
                      ></Image>

                      <Text style={{color:"white", fontSize:15, fontWeight:"bold", paddingLeft:8}}>FARES</Text>
    </View>
    <View style={styles.red}>
        <View style={styles.paid}>
      <Text style={styles.baseFare}>Base Fare</Text>
      <Text style={styles.smallRs}>Rs: 50,000</Text>
        </View>
        <View style={styles.paid}>
        <Text style={styles.fee}>Fee & Surcharges</Text>
      <Text style={styles.smallRs2}>Rs: 8050</Text>
        </View>
        <View style={styles.paidTotal}>
        <Text style={styles.youPaid}>You Paid</Text>
      <Text style={styles.totalRs}>Rs: 58,050</Text>
        </View>
    </View>
</View>
<View style={{width:"100%",height:20, backgroundColor:"#F5F5F5"}}></View>
        </View>
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
    marginVertical: 10
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
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  arrow: {
    justifyContent: "flex-start"
    // paddingRight: 50
  },
  headertext: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    fontWeight: "400"
  },
  passengerText: {
    fontSize: 15,
    color: "white",
    alignSelf: "center"
  },

  done: {
    width: 30,
    height: 35,
    backgroundColor: "#B22023",
    borderRadius: 20,
    justifyContent: "center"
    // borderWidth:2
  },
  donetext: {
    fontSize: 13,
    color: "#B22023",
    alignSelf: "center"
  },

  confText:{
      fontSize:25,
      color:"green",
      fontWeight:"bold",
      justifyContent:"center",
      paddingRight: 10
  },
  completedText:{
      fontSize:14,
      color:"grey",
      paddingRight: 10
    //   alignSelf:"center"
  },

  flightwholeView: { flexDirection: "row", paddingTop:15,paddingBottom:30, width:"90%", alignSelf:"center" },

  depIsb: {
    width: 150,
    // backgroundColor: "red"
  },
  stopDubai: {
    flexDirection: "row",
    width: 120,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  stopText: {
    fontSize: 9,
    color: "grey",
    paddingHorizontal: 7
  },

  departView: {
    width: 110,
    backgroundColor:"#FDD835",
    height: 40,
    borderRadius: 20,
    justifyContent: "center"
  },

  departText: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "grey",
    fontSize:13
  },

  planeText: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "grey",
    fontSize:13
  },
  timeText: {
    color: "grey",
    alignSelf: "center",
    fontSize:11
  },

  timeView: {
    width: 110,
    // backgroundColor: "pink",
    height: 20,
    justifyContent: "center"
  },
  pkrLine: {
    width: 1,
    height: 40,
    backgroundColor: "grey",
    alignSelf: "center",
    marginTop:5
  },

  green:{
      backgroundColor:"#66BB6A",
      width:"40%",
      height:130,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
  },

  red:{
      // backgroundColor:"red",
      width:"60%",
      height:130
  },
  paid:{
      // borderWidth:1,
      height:"33.33%",
      flexDirection:"row",
      justifyContent:"space-between",
     
      alignItems:"center"
  },
  paidTotal:{
    // borderWidth:1,
    height:"33.33%",
    flexDirection:"row",
    justifyContent:"space-between",
   backgroundColor: "#B22023",
    alignItems:"center"
},

youPaid:{
  fontSize:15,
  fontWeight:"bold",
  paddingLeft:10,
  color:"white"
},

totalRs:{
  fontSize:15,
  fontWeight:"bold",
  paddingRight:10,
  color:"white"
},

  baseFare:{
fontSize:13,
fontWeight:"bold",
paddingLeft:10
  },

  fee:{
    fontSize:11,
    fontWeight:"bold",
    paddingLeft:10
      },

  smallRs:{
fontSize:12,
paddingRight:10,
color:"grey"
  },

  smallRs2:{
    fontSize:13,
    paddingRight:10,
    color:"grey"
      },
});
