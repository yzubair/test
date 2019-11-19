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
  StatusBar,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { CheckBox } from "react-native-elements";
import BottomNavigation from "./Explore/BottomNavigation";
// import CheckBox from 'react-native-checkbox';
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";

export default class Flights extends React.Component {
  state = {
    // modalVisible: false,
    modalVisible2: false,
    checked: false,
    checked01: false,
    checked02: false,
    checked03: false,
    checked04: false,
    checked05: false,
    checked06: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked10: false,
    checked11: false,
    checked22: false,
    checked31: false,
    checked32: false
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.modalVisible2} transparent={true}>
          <TouchableOpacity
            style={{
              height: "100%",
              backgroundColor: "#rgba(255,255,255,0.7)",
              justifyContent: "center"
            }}
            onPress={() => {
              this.setState({ modalVisible2: false });
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  height: "99%",
                  width: "70%",
                  alignSelf: "flex-end",
                  backgroundColor: "white",
                  marginVertical: 10
                }}
              >
                <View
                  style={{
                    width: "90%",
                    backgroundColor: "white",
                    alignSelf: "center"
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 10
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "600" }}>
                      SORT AND FILTERS
                    </Text>
                    <TouchableOpacity>
                      <Icon name="ios-close" size={40} color="#B22023" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View>
                      <Text style={styles.stops}>STOPS</Text>
                    </View>

                    {/* boxes view */}
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity style={styles.noOfStops}>
                        <Text style={styles.number}>0</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.noOfStopsWhite}>
                        <Text style={styles.number1}>1</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.noOfStopsWhite}>
                        <Text style={styles.number1}>2</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.noOfStopsWhite}>
                        <Text style={styles.number1}>3+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* airline*/}
                  <View style={{ marginTop: 25 }}>
                    <Text style={styles.stops}>AIRLINE</Text>

                    {/* Flight 1 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked}
                          onPress={() =>
                            this.setState({ checked: !this.state.checked })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>PIA</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 31,049</Text>
                    </View>
                    {/* flight 2  */}
                    {/* <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "green",
                        height:40,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems:"center",
                          marginLeft:-20
                        }}
                      >
        
                        <CheckBox
                          // title='Click Here'
                          checked={this.state.checked}
                          onPress={() =>
                            this.setState({ checked: !this.state.checked })
                          }
                          checkedColor="orange"
                          style={{width:4}}
                        />
                        {/* </View> */}
                    {/* <Text style={styles.pia}>PIA</Text>
                      </View>
                      <Text style={{color:"grey"}}>RS 31,049</Text>
                    </View> */}
                    {/* flight 2 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked1}
                          onPress={() =>
                            this.setState({ checked1: !this.state.checked1 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>ETIHAD AIRWAYS</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 35,049</Text>
                    </View>

                    {/* flight 3 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked2}
                          onPress={() =>
                            this.setState({ checked2: !this.state.checked2 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>BRITISH AIRWAYS</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 35,749</Text>
                    </View>

                    {/* FLIGHT 4 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked3}
                          onPress={() =>
                            this.setState({ checked3: !this.state.checked3 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>AIR BLUE</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 29,049</Text>
                    </View>
                    {/* FLIGHTS END */}
                  </View>
                  {/* checkbo end */}
                  {/* FUND */}
                  <View style={{ marginTop: 25 }}>
                    <Text style={styles.stops}>CLASS</Text>

                    {/* Flight 1 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked10}
                          onPress={() =>
                            this.setState({ checked10: !this.state.checked10 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>ECONOMY</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 31,049</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked11}
                          onPress={() =>
                            this.setState({ checked11: !this.state.checked11 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>BUSINESS</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 35,049</Text>
                    </View>

                    {/* flight 3 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked22}
                          onPress={() =>
                            this.setState({ checked22: !this.state.checked22 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>FIRST</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 45,749</Text>
                    </View>

                    {/* FLIGHT 4 */}

                    {/* FLIGHTS END */}
                  </View>

                  {/* class end */}

                  {/* REFUND start */}
                  <View style={{ marginTop: 25 }}>
                    <Text style={styles.stops}>FUND</Text>

                    {/* Flight 1 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked01}
                          onPress={() =>
                            this.setState({ checked01: !this.state.checked01 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>REFUNDABLE</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 21,049</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked02}
                          onPress={() =>
                            this.setState({ checked02: !this.state.checked02 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>NON REFUNDABLE</Text>
                      </View>
                      <Text style={{ color: "grey" }}>RS 15,000</Text>
                    </View>

                    {/* flight 3 */}

                    {/* FLIGHTS END */}
                  </View>

                  {/* REFUND END */}
                  {/* DEPART */}
                  <View style={{ marginTop: 25 }}>
                    <Text style={styles.stops}>DEPARTURE TIME</Text>

                    {/* Flight 1 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked03}
                          onPress={() =>
                            this.setState({ checked03: !this.state.checked03 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>BEFORE 6AM</Text>
                      </View>
                      {/* SECOND */}
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked04}
                          onPress={() =>
                            this.setState({ checked04: !this.state.checked04})
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>12PM - 6PM</Text>
                      </View>
                      {/* SECOND PART END */}
                    </View>
                    {/* bottom line start */}
                    {/* Flight 1 */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "green",
                        height: 30
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -20
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked05}
                          onPress={() =>
                            this.setState({ checked05: !this.state.checked05 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>6AM - 12PM</Text>
                      </View>
                      {/* SECOND paddingRight */}
                      <View
                        style={{
                          flexDirection: "row",
                          // backgroundColor: "red",
                          // justifyContent: "center",
                          alignItems: "center",
                          marginLeft: -14
                          // height:50
                        }}
                      >
                        <CheckBox
                          checkedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/tick.png")}
                            />
                          }
                          uncheckedIcon={
                            <Image
                              style={{
                                alignSelf: "flex-start",
                                width: 20,
                                height: 20,
                                resizeMode: "contain",
                                alignSelf: "center"
                              }}
                              source={require("../assets/images/untick.png")}
                            />
                          }
                          checked={this.state.checked06}
                          onPress={() =>
                            this.setState({ checked06: !this.state.checked06 })
                          }
                        />
                        {/* {/* <View style={{width:20,height:30, backgroundColor:"white"}}> */}

                        <Text style={styles.pia}>AFTER 6PM</Text>
                      </View>
                      {/* SECOND PART END */}
                    </View>
                    {/* bottom line end */}
                  </View>

                  {/* DEPART END END */}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>

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
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/RoundTrip/backArrow.png")}
            ></Image>
          </TouchableOpacity>

          <Text style={styles.headertext}> FLIGHTS</Text>

          <TouchableOpacity
            style={styles.done}
            onPress={() => {
              this.setState({ modalVisible2: true });
            }}
          >
            {/* // onPress={()=>{ this.setState({modalVisible:true})  }} */}

            <Image
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/profile/tools.png")}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={{width:"100%", height:"78%", borderWidth:1}}>
          <View style={styles.touchableBox}>
            <View
              style={{
                flexDirection: "row",
                height: "50%",
                borderBottomWidth: 1,
                borderBottomColor: "grey"
              }}
            >
              <View style={styles.boxFromLine}>
                <Text style={styles.fromTo}>FROM</Text>

                <View style={styles.yellowCoverLine}>
                  <Text style={styles.cityText}>ISLAMABAD </Text>
                  {/* <Image source={require('../assets/images/RoundTrip/dropDownArrow.png')}></Image> */}
                </View>
              </View>
              <View style={styles.boxFrom}>
                <Text style={styles.fromTo}>TO</Text>
                <View style={styles.yellowCoverLine}>
                  <Text style={styles.cityText}>LONDON </Text>
                  {/* <Image source={require('../assets/images/RoundTrip/dropDownArrow.png')}></Image> */}
                </View>
              </View>
            </View>

            {/* dept */}
            <View style={{ flexDirection: "row", height: "50%", }}>
              <View style={styles.boxFromLine}>
                <Text style={styles.fromTo}>DEPT</Text>

                <View style={styles.yellowCoverLine}>
                  <Text style={styles.londonText}>FRI, SEP 23</Text>
                  <Image
                    style={{ width: 10, height: 10 }}
                    source={require("../assets/images/RoundTrip/dropDownArrow.png")}
                  ></Image>
                </View>
              </View>
              <View style={styles.boxFrom}>
                <Text style={styles.fromTo}>TO</Text>
                <View style={styles.yellowCoverLine}>
                  <Text style={styles.londonText}>FRI, OCT 23</Text>
                  <Image
                    style={{ width: 10, height: 10 }}
                    source={require("../assets/images/RoundTrip/dropDownArrow.png")}
                  ></Image>
                </View>
              </View>
            </View>
          </View>

          <ScrollView>
            {/* light background whole view details */}
            <View
              style={{
                width: "100%",
                backgroundColor: "#F5F5F5",
                // marginBottom: 10
              }}
            >
              <View>
                <View style={styles.flightwholeView}>
                  {/* depart/arrival */}
                  <View
                    style={{
                      paddingTop: 20,
                      paddingBottom: 10,
                      width: "33.33%",
                      paddingLeft:8
                    }}
                  >
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
                        <Image
                          style={{
                            height: 50,
                            resizeMode: "contain",
                            marginBottom: 5
                          }}
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

                  <View style={{ width: "33.33%", paddingTop: 5 }}>
                    <View>
                      <Text style={styles.departText}>PKR 170,000</Text>
                    </View>
                    <View style={styles.pkrLine} />
                    <View style={{ alignSelf: "center" }}>
                      <Image
                        style={{ width: 90, height: 50, resizeMode: "contain" }}
                        source={require("../assets/images/emirates.png")}
                      ></Image>
                    </View>
                    <View>
                      <Text style={styles.planeText}>EY-746</Text>
                    </View>
                    <View style={styles.pkrLine} />
                  </View>

                  {/* depart/arrival */}
                  <View
                    style={{
                      paddingTop: 20,
                      paddingBottom: 10,
                      width: "33.33%"
                    }}
                  >
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
                        <Image
                          style={{
                            height: 50,
                            resizeMode: "contain",
                            marginBottom: 5
                          }}
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
                {/* bottom red */}
                <View
                  style={{
                    flexDirection: "row",
                    height: 35,
                    width: "100%",
                    backgroundColor: "#B22023",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={styles.bText}>Fare Rules</Text>
                  <Text style={styles.lText}> | </Text>
                  <Text style={styles.bText}>Non-Refundable</Text>
                  <Text style={styles.lText}> | </Text>
                  <Text style={styles.bText}>Flight Details</Text>
                </View>
              </View>
              {/* lightview bg*/}
            </View>

            {/* second 
second
second one way flightwholeView */}
            <View
              style={{
                width: "100%",
                backgroundColor: "#F5F5F5",
                marginBottom: 20
              }}
            >
              <View>
                <View style={styles.flightwholeView}>
                  {/* depart/arrival */}
                  <View
                    style={{
                      paddingTop: 20,
                      paddingBottom: 10,
                      width: "50%",
                      paddingLeft:8
                    }}
                  >
                    <View style={styles.depIsb}>
                      <View style={styles.departView}>
                        <Text style={styles.departText}>DEPARTURE</Text>
                      </View>

                      <View style={styles.timeView}>
                        <Text style={styles.timeText}>ISL - 3:00 PM</Text>
                      </View>
                    </View>

                    <View style={styles.stopDubai}>
                      <View>
                        <Text style={styles.stopText}>1 Stop</Text>
                        <Text style={styles.stopText}>(Dubai)</Text>
                      </View>

                      <View>
                        <Image
                          style={{
                            height: 50,
                            resizeMode: "contain",
                            marginBottom: 5
                          }}
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

                  <View style={{ width: "50%", paddingTop: 5 }}>
                    <View>
                      <Text style={styles.departText}>PKR 230,000</Text>
                    </View>
                    <View style={styles.pkrLine} />
                    <View style={{ alignSelf: "center" }}>
                      <Image
                        style={{ width: 90, height: 50, resizeMode: "contain" }}
                        source={require("../assets/images/qatar.png")}
                      ></Image>
                    </View>
                    <View>
                      <Text style={styles.planeText}>QR-604</Text>
                    </View>
                    <View style={styles.pkrLine} />
                  </View>

                  {/* depart/arrival */}

                  {/* final view for flightwholeview */}
                </View>
                {/* bottom red */}
                <View
                  style={{
                    flexDirection: "row",
                    height: 35,
                    width: "100%",
                    backgroundColor: "#B22023",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={styles.bText}>Fare Rules</Text>
                  <Text style={styles.lText}> | </Text>
                  <Text style={styles.bText}>Non-Refundable</Text>
                  <Text style={styles.lText}> | </Text>
                  <Text style={styles.bText}>Flight Details</Text>
                </View>
              </View>
              {/* lightview bg*/}
            </View>
            {/* third whole view */}
            <View
              style={{
                width: "100%",
                backgroundColor: "#F5F5F5",
                marginBottom: 20
              }}
            >
              <View>
                <View style={styles.flightwholeView}>
                  {/* depart/arrival */}
                  <View
                    style={{
                      paddingTop: 20,
                      paddingBottom: 10,
                      width: "33.33%",
                      paddingLeft:8
                    }}
                  >
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
                        <Image
                          style={{
                            height: 50,
                            resizeMode: "contain",
                            marginBottom: 5
                          }}
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

                  <View style={{ width: "33.33%", paddingTop: 5 }}>
                    <View>
                      <Text style={styles.departText}>PKR 170,000</Text>
                    </View>
                    <View style={styles.pkrLine} />
                    <View style={{ alignSelf: "center" }}>
                      <Image
                        style={{ width: 90, height: 50, resizeMode: "contain" }}
                        source={require("../assets/images/emirates.png")}
                      ></Image>
                    </View>
                    <View>
                      <Text style={styles.planeText}>EY-746</Text>
                    </View>
                    <View style={styles.pkrLine} />
                  </View>

                  {/* depart/arrival */}
                  <View
                    style={{
                      paddingTop: 20,
                      paddingBottom: 10,
                      width: "33.33%"
                    }}
                  >
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
                        <Image
                          style={{
                            height: 50,
                            resizeMode: "contain",
                            marginBottom: 5
                          }}
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

                  {/* final view for flightwholeview */}
                </View>
                {/* bottom red */}
                <View
                  style={{
                    flexDirection: "row",
                    height: 35,
                    width: "100%",
                    backgroundColor: "#B22023",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={styles.bText}>Fare Rules</Text>
                  <Text style={styles.lText}> | </Text>
                  <Text style={styles.bText}>Non-Refundable</Text>
                  <Text style={styles.lText}> | </Text>
                  <Text style={styles.bText}>Flight Details</Text>
                </View>
              </View>
              {/* lightview bg*/}
            </View>
          </ScrollView>
          {/* end of centeral whole View */}

          <View style={{ height: 20, backgroundColor: "white" }}></View>
        </View>

        {/* Bottom Navigation */}

<BottomNavigation navigation={this.props.navigation}/>

        {/* END VIEW BELOW */}
      </View>
    );
  }
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "space-between",
    width: "95%",
    height: "100%",
  },
  section: {
    // borderWidth:2,
    height: "25%",
    // backgroundColor:"red",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    width: "90%",
    alignSelf: "center"
  },

  header: {
    backgroundColor: "#B22023",
    height: "8.5%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    // borderWidth:3,
    paddingHorizontal: 10,
    marginTop: 10
  },
  stops: {
    fontWeight: "600",
    fontSize: 15,
    color: "#B22023",
    marginBottom: 10
  },

  noOfStops: {
    width: 40,
    height: 40,
    backgroundColor: "#B22023",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10
  },
  number: {
    fontSize: 22,
    color: "white",
    fontWeight: "600"
  },
  noOfStopsWhite: {
    width: 40,
    height: 40,
    // backgroundColor:"#B22023",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "grey"
  },
  number1: {
    fontSize: 22,
    color: "#B22023",
    fontWeight: "600"
  },

  pia: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 13,
    right: 10
  },
  arrow: {
    justifyContent: "flex-start"
    // paddingRight: 50
  },
  headertext: {
    fontSize: 17,
    color: "white",
    alignSelf: "center",
    // paddingLeft:20
    fontWeight: "600"
  },
  done: {
    // width:100,
    height: 35,
    // backgroundColor:"#FDD835",
    borderRadius: 20,
    justifyContent: "center"
  },
  donetext: {
    fontSize: 8,
    color: "white",
    alignSelf: "center"
  },

  touchableBox: {
    // flexDirection:'row',
    width: "100%",
    height: "25%",
    justifyContent: "center",
    // alignItems:'center',
    // alignSelf:'center',
    marginVertical: 10,
    // backgroundColor:"aqua",
    // paddingHorizontal: 5,
    // borderRadius:20
    borderWidth:1
  },

  boxFrom: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    // borderWidth:2,
    // borderColor: "yellow",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center"
  },
  fromTo: {
    color: "grey",
    fontSize: 11
  },
  boxFromLine: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    borderRightWidth: 1,
    borderColor: "grey",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center"
  },

  touchConfirm: {
    height: 40,
    width: 190,
    backgroundColor: "#B22023",
    // borderWidth: 2,
    // borderColor: "green",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20
    // paddingLeft:10
    // marginHorizontal: 10,
    // marginRight:10
    // #B22023
  },

  touchableSelected: {
    fontSize: 11,
    color: "white",
    // paddingLeft: 10,
    alignSelf: "center",
    fontWeight: "bold"
  },

  touchableSelectedConfirm: {
    fontSize: 15,
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

  //   destination wala

  destinationBox: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    // borderWidth:2,
    // borderColor:"black",
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#F5F5F5",
    paddingLeft: 20
  },
  destinationText: {
    fontSize: 13,
    color: "grey",
    fontWeight: "bold"
  },

  cityText: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold"
    // paddingLeft: 7
  },
  londonText: {
    fontSize: 11,
    color: "white",
    fontWeight: "bold"
  },

  dateText: {
    fontSize: 11,
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
    backgroundColor: "grey",
    // borderColor:"blue",
    // borderWidth:2,
    flexDirection: "row",
    width: 90,
    height: 30,
    alignItems: "center"
    // paddingHorizontal:5,
    //  marginLeft:10,
    //   justifyContent:"space-around",
    //   borderRadius:5
  },
  yellowCoverLine: {
    backgroundColor: "grey",
    // borderColor:"blue",
    // borderWidth:1,
    flexDirection: "row",
    width: 90,
    height: 25,
    alignItems: "center",
    // paddingHorizontal:5,
    //  marginLeft:10,
    justifyContent: "space-around"
    // borderRadius:5
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

  flyOutyellowCover: {
    backgroundColor: "#FDD835",
    // borderColor:"blue",
    // borderWidth:2,
    flexDirection: "row",
    width: 90,
    height: 30,
    alignItems: "center",
    justifyContent: "space-around",
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

  flightwholeView: { flexDirection: "row", marginBottom:10 },

  depIsb: {
    width: 150
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
    backgroundColor: "#FDD835",
    height: 40,
    borderRadius: 20,
    justifyContent: "center"
  },

  departText: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "grey",
    fontSize: 13
  },

  planeText: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "grey",
    fontSize: 13
  },
  timeText: {
    color: "grey",
    alignSelf: "center",
    fontSize: 11
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
    marginTop: 5
  },
  bText: {
    color: "white",
    fontSize: 11
  },
  lText: {
    color: "#FDD835",
    fontSize: 11
  }
});
