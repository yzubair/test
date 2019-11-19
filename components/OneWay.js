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
  StatusBar,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import RadioButton from "react-native-radio-button";
// import { Dropdown } from "react-native-material-dropdown";
import SearchableDropdown from "react-native-searchable-dropdown";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
// import RadioGroup from 'react-native-radio-buttons-group';
// import SingleChoice from "react-native-single-choice";
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
var items = [
  //name key is must.It is to show the text in front
  { id: 1, name: "LONDON" },
  { id: 2, name: "PARIS" },
  { id: 3, name: "NEW YORK" },
  { id: 4, name: "GLASGOW" },
  { id: 5, name: "GATWICK" },
  { id: 6, name: "MANCHESTER" },
  { id: 7, name: "ISLAMABAD" },
  { id: 8, name: "PESHAWAR" },
  { id: 9, name: "DUBAI" },
  { id: 10, name: "DUBLIN" },
  { id: 11, name: "DOHA" }
];

export default class OneWay extends React.Component {


  state = {
    fromCity: "ISLAMABAD",
    modalVisible2: false,
    toCity: "LONDON",
    passenger: "01-ADULT",
    class: "ECONOMY",
    calanderModal: false,
    passengerModal: false,
    classModal: false,
    day: { dateString: "07-01-2014" },
    radioBool: false,
    radioBool2: false,
    radioBool3: false,
    radioBool4: false,
    radioBool5: false,
    radioBool6: false
  };

  render() {

    return (
      <View style={styles.container}>

        {/* MODAL FOR City */}
        <Modal
          animationType="slide"
          transparent={false}
          // visible={true}
          visible={this.state.modalVisible2}
        >
          <View
            style={{
              height: "100%",
              //  backgroundColor: "pink",
              paddingTop: 20
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                height: 60,
                borderColor: "lightgrey",
                // backgroundColor: "green",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 5
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Search City</Text>
              <Icon
                name="ios-close"
                size={30}
                onPress={() => {
                  this.setState({
                    modalVisible2: false
                  });
                }}
              >
                {" "}
              </Icon>
            </View>
            <View
              style={{
                // height: 60,
                justifyContent: "center",
                // borderWidth: 1,
                // padding: 5,
                borderColor: "lightgrey",
                marginTop: 10
              }}
            >
              {/* <TextInput placeholder="Enter City of Airport name" /> */}
              <SearchableDropdown
                autoFocus={true}
                onItemSelect={item => {
                  if (this.state.thisisFromCity == true) {
                    this.setState({
                      modalVisible2: false,
                      fromCity: item.name
                    });
                  }
                  if (this.state.thisIsToCity == true) {
                    this.setState({ modalVisible2: false, toCity: item.name });
                  }
                }}
                containerStyle={{ padding: 5 }}
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: "#ddd",
                  borderColor: "#bbb",
                  borderWidth: 1
                  // borderRadius: 5
                }}
                itemTextStyle={{ color: "#222" }}
                itemsContainerStyle={{ maxHeight: 290 }}
                items={items}
                defaultIndex={0}
                // resetValue={false}
                textInputProps={{
                  placeholder: "Enter Airport Name",
                  underlineColorAndroid: "transparent",
                  style: {
                    padding: 15,
                    borderWidth: 1,
                    borderColor: "#ccc"
                    // borderRadius: 5
                  }
                  // onTextChange: text => alert(text)
                }}
              />
            </View>
          </View>
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

          <Text style={styles.headertext}> BOOK YOUR FLIGHT</Text>

          <TouchableOpacity
            style={styles.done}
            onPress={() => {
              this.props.navigation.navigate("Loading Page");
            }}
          >
            <Text style={styles.donetext}>DONE</Text>
          </TouchableOpacity>
        </View>

        {/* round trip-- one way--- multi city */}

        <View style={styles.touchableBox}>
          <TouchableOpacity style={styles.touch2}
           onPress={() => {
            this.props.navigation.navigate("Round Trip");
          }}>
            <Text style={styles.touchableTextTop}>Round Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch1}
           
          >
            <Text style={styles.touchableSelected}>One Way</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch2}
            onPress={() => {
              this.props.navigation.navigate("MultiCity");
            }}
          >
            <Text style={styles.touchableTextTop}>Multi City</Text>
          </TouchableOpacity>
        </View>

        {/* DESTINATION */}

        <View style={styles.destinationBox}>
          {/* destination & image view then applied flexdirection in below view */}
          <View style={styles.leftbox}>
            <View>
              <Image
                style={styles.imageIcon}
                source={require("../assets/images/RoundTrip/place.png")}
              ></Image>

              <Text style={styles.destinationText}>WHERE</Text>
            </View>
            {/* destination & image view LINE */}

            {/* <View
              style={{
                width: 2,
                height: 80,
                backgroundColor: "#B22023"
                // left:19,
                // alignSelf: "center"
              }}
            ></View> */}
          </View>

          {/* DEPARTURE/ARRIVAL */}

          <View style={styles.rightBox}>
            <View
              style={{
                width: 2,
                height: 80,
                backgroundColor: "#B22023"
                // left:19,
                // alignSelf: "center"
              }}
            ></View>
            {/* DEPARTURE-BLOCK */}
            <View style={styles.rightBoxYellowArea}>
              <View>
                {/* <View style={styles.whiteCover}>
                <Text style={styles.destinationText}>DEPARTURE</Text>
              </View> */}

                <TouchableOpacity
                  style={styles.newYellowCover}
                  onPress={() => {
                    this.setState({
                      modalVisible2: true,
                      thisisFromCity: true,
                      thisIsToCity: false
                    });
                  }}
                >
                  <Text style={styles.cityText}>
                    {this.state.fromCity}
                    {/* ISLAMABAD  */}
                  </Text>
                  <Image
                    style={{ alignItems: "flex-end", width: 12, height: 12 }}
                    source={require("../assets/images/RoundTrip/dropDownArrow.png")}
                  ></Image>
                </TouchableOpacity>
              </View>

              {/* ARRIVAL-BLOCK */}
              <View>
                {/* <View style={styles.whiteCover}>
                <Text style={styles.destinationText}>ARRIVAL</Text>
              </View> */}

                <TouchableOpacity
                  style={styles.newYellowCover}
                  onPress={() => {
                    this.setState({
                      modalVisible2: true,
                      thisIsToCity: true,
                      thisisFromCity: false
                    });
                  }}
                >
                  <Text style={styles.cityText}>
                    {this.state.toCity}
                    {/* London  */}
                  </Text>
                  <Image
                    style={{ alignItems: "flex-end", width: 12, height: 12 }}
                    source={require("../assets/images/RoundTrip/dropDownArrow.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/*  DESTINATION END VIEW */}
        </View>

        {/* DATE VIEW BOX */}

        <View style={styles.dateBox}>
          {/* destination & image view then applied flexdirection in below view */}
          <View style={styles.leftbox}>
            <Image
              style={styles.imageIcon}
              source={require("../assets/images/cal.png")}
            ></Image>

            <Text style={styles.destinationText}>DATE</Text>
          </View>
          {/* right and  view LINE */}

          <View style={styles.rightBox}>
            <View
              style={{
                width: 2,
                height: 60,
                backgroundColor: "#B22023",
                alignSelf: "center"
              }}
            ></View>

            {/* fly out */}
            <TouchableOpacity
              style={styles.rightBoxYellowArea2}
              onPress={() => {
                this.setState({ calanderModal: true });
              }}
            >
              {/* line */}

              {/* line end */}
              <View style={styles.flyOutwhiteCover}>
                <Text style={styles.destinationText}>FLY OUT</Text>
              </View>

              <View style={styles.newYellowCover}>
                <Text style={styles.dateText}>{this.state.day.dateString}</Text>
                <Image
                  style={{ alignItems: "flex-end", width: 12, height: 12 }}
                  source={require("../assets/images/RoundTrip/dropDownArrow.png")}
                ></Image>
              </View>
              <Modal visible={this.state.calanderModal}>
                <TouchableOpacity
                  style={{
                    height: "100%",
                    backgroundColor: "#rgba(255,255,255,0.7)",
                    justifyContent: "flex-start"
                  }}
                  onPress={() => {
                    this.setState({ calanderModal: false });
                  }}
                >
                  <TouchableWithoutFeedback>
                    <View
                      style={{
                        height: "50%",
                        width: "90%",
                        alignSelf: "center",
                        // backgroundColor: "green",
                        marginVertical: 10
                      }}
                    >
                      <Calendar
                        onDayPress={day => {
                          this.setState({ day: day, calanderModal: false });

                          // console.log(day,"this is the day of the calendar : ")
                        }}
                        hideDayNames={false}
                        // Collection of dates that have to be colored in a special way. Default = {}
                        markedDates={{
                          [this.state.day.dateString]: { textColor: "green" },
                          [this.state.day.dateString]: {
                            startingDay: true,
                            color: "green"
                          },
                          [this.state.day.dateString]: {
                            selected: true,
                            endingDay: true,
                            color: "green",
                            textColor: "gray"
                          },
                          [this.state.day.dateString]: {
                            disabled: true,
                            startingDay: true,
                            color: "green",
                            endingDay: true
                          }
                        }}
                        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                        markingType={"period"}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </TouchableOpacity>
              </Modal>
            </TouchableOpacity>
          </View>
        </View>
        {/* DATE end VIEW ABOVE */}

        {/* PEOPLE VIEW BOX */}

        <View style={styles.dateBox}>
          <View style={styles.leftbox}>
            <Image
              style={styles.imageIcon}
              source={require("../assets/images/RoundTrip/people.png")}
            ></Image>

            <Text style={styles.destinationText}> PEOPLE(S)</Text>
          </View>
          {/* destination & image view LINE */}

          <View style={styles.rightBox}>
            <View
              style={{
                width: 2,
                height: 60,
                backgroundColor: "#B22023",

                alignSelf: "center"
              }}
            ></View>
            <TouchableOpacity
              style={styles.rightBoxYellowArea2}
              onPress={() => {
                this.setState({ passengerModal: true });
              }}
            >
              {/* adults*/}
              <View style={styles.flyOutwhiteCover}>
                <Text style={styles.destinationText}>PASSENGER(S)</Text>
              </View>

              <View style={styles.newYellowCover}>
                <Text style={styles.dateText}>{this.state.passenger}</Text>
                <Image
                  style={{ alignItems: "flex-end", width: 12, height: 12 }}
                  source={require("../assets/images/RoundTrip/dropDownArrow.png")}
                ></Image>
              </View>
            </TouchableOpacity>
            {/* modal for passenger selection*/}
            <Modal visible={this.state.passengerModal} transparent={true}>
              <TouchableOpacity
                style={{
                  height: "100%",
                  backgroundColor: "#rgba(255,255,255,0.7)",
                  justifyContent: "flex-end"
                }}
                onPress={() => {
                  this.setState({ passengerModal: false });
                }}
              >
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      height: "45%",
                      width: "100%",
                      alignSelf: "center"
                      // backgroundColor: "grey"
                      // marginVertical: 10
                    }}
                  >
                    <View style={styles.selectClassCover}>
                      <Text style={styles.selectClassText}>
                        Select Passenger
                      </Text>
                    </View>
                    <View style={styles.sixRadioBtnView}>
                      <View style={styles.onePortionWholeView}>
                        <View style={styles.leftPortion}>
                          <Text style={styles.adultText}>Adults</Text>
                          <Text style={styles.over12YearsText}>
                            over 12 years old
                          </Text>
                        </View>
                        {/* view for +- */}
                        <View style={styles.rightPortion}>
                          <TouchableOpacity>
                            <Icon
                              name={"ios-remove-circle"}
                              size={35}
                              color="#b31f24"
                            />
                          </TouchableOpacity>
                          <Text>1</Text>

                          <TouchableOpacity>
                            <Icon
                              name={"ios-add-circle"}
                              size={35}
                              color="#b31f24"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.onePortionWholeView}>
                        <View style={styles.leftPortion}>
                          <Text style={styles.adultText}>Children</Text>
                          <Text style={styles.over12YearsText}>
                            2-12 years old
                          </Text>
                        </View>
                        {/* view for +- */}
                        <View style={styles.rightPortion}>
                          <TouchableOpacity>
                            <Icon
                              name={"ios-remove-circle"}
                              size={35}
                              color="#b31f24"
                            />
                          </TouchableOpacity>
                          <Text>0</Text>

                          <TouchableOpacity>
                            <Icon
                              name={"ios-add-circle"}
                              size={35}
                              color="#b31f24"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.onePortionWholeView}>
                        <View style={styles.leftPortion}>
                          <Text style={styles.adultText}>Infant</Text>
                          <Text style={styles.over12YearsText}>
                            0-2 years old
                          </Text>
                        </View>
                        {/* view for +- */}
                        <View style={styles.rightPortion}>
                          <TouchableOpacity>
                            <Icon
                              name={"ios-remove-circle"}
                              size={35}
                              color="#b31f24"
                            />
                          </TouchableOpacity>
                          <Text>0</Text>

                          <TouchableOpacity>
                            <Icon
                              name={"ios-add-circle"}
                              size={35}
                              color="#b31f24"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={styles.doneView}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ passengerModal: false });
                        }}
                        style={styles.done2}
                      >
                        <Text style={styles.donetext2}>DONE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </TouchableOpacity>
            </Modal>
            {/* end of passenger selection modal  */}
          </View>
        </View>
        {/* PEOPLE end VIEW ABOVE */}

        {/* CLASS VIEW BOX */}

        <View style={styles.dateBox}>
          {/* destination & image view then applied flexdirection in below view */}
          <View style={styles.leftbox}>
            <Image
              style={styles.imageIcon}
              source={require("../assets/images/RoundTrip/class.png")}
            ></Image>

            <Text style={styles.destinationText}> CLASS</Text>
          </View>

          {/* destination & image view LINE */}
          <View style={styles.rightBox}>
            <View
              style={{
                width: 2,
                height: 60,
                backgroundColor: "#B22023",

                alignSelf: "center"
              }}
            ></View>
            <TouchableOpacity
              style={styles.rightBoxYellowArea2}
              onPress={() => {
                this.setState({ classModal: true });
              }}
            >
              {/* adults*/}

              <View style={styles.newYellowCover}>
                <Text style={styles.dateText}>{this.state.class}</Text>
                <Image
                  style={{ alignItems: "flex-end", width: 12, height: 12 }}
                  source={require("../assets/images/RoundTrip/dropDownArrow.png")}
                ></Image>
              </View>
              {/* modal for class selection*/}
              <Modal visible={this.state.classModal} transparent={true}>
                <TouchableOpacity
                  style={{
                    height: "100%",
                    backgroundColor: "#rgba(255,255,255,0.7)",
                    justifyContent: "flex-end"
                  }}
                  onPress={() => {
                    this.setState({ classModal: false });
                  }}
                >
                  <TouchableWithoutFeedback>
                    <View
                      style={{
                        height: "45%",
                        width: "100%",
                        alignSelf: "center"
                        // backgroundColor: "grey"
                        // marginVertical: 10
                      }}
                    >
                      <View style={styles.selectClassCover}>
                        <Text style={styles.selectClassText}>Select Class</Text>
                      </View>
                      {/* #404040 */}
                      <View style={styles.sixRadioBtnView}>
                        <View style={styles.twoRadioBtnsView}>
                          <View style={styles.radioBtnPlusText}>
                            <RadioButton
                              isSelected={this.state.radioBool}
                              onPress={() => {
                                this.setState({
                                  radioBool: true,
                                  radioBool2: false,
                                  radioBool3: false,
                                  radioBool4: false,
                                  radioBool5: false,
                                  radioBool6: false
                                });
                              }}
                              innerColor="#b31f24"
                              outerColor="black"
                            />
                            <Text style={styles.radioBtnText}>Economy</Text>
                          </View>
                          <View style={styles.radioBtnPlusText}>
                            <RadioButton
                              isSelected={this.state.radioBool2}
                              onPress={() => {
                                this.setState({
                                  radioBool: false,
                                  radioBool2: true,
                                  radioBool3: false,
                                  radioBool4: false,
                                  radioBool5: false,
                                  radioBool6: false
                                });
                              }}
                              innerColor="#b31f24"
                              outerColor="black"
                            />
                            <Text style={styles.radioBtnText}>
                              Premium First
                            </Text>
                          </View>
                        </View>

                        <View style={styles.twoRadioBtnsView}>
                          <View style={styles.radioBtnPlusText}>
                            <RadioButton
                              isSelected={this.state.radioBool3}
                              onPress={() => {
                                this.setState({
                                  radioBool: false,
                                  radioBool2: false,
                                  radioBool3: true,
                                  radioBool4: false,
                                  radioBool5: false,
                                  radioBool6: false
                                });
                              }}
                              innerColor="#b31f24"
                              outerColor="black"
                            />
                            <Text style={styles.radioBtnText}>First</Text>
                          </View>
                          <View style={styles.radioBtnPlusText}>
                            <RadioButton
                              isSelected={this.state.radioBool4}
                              onPress={() => {
                                this.setState({
                                  radioBool: false,
                                  radioBool2: false,
                                  radioBool3: false,
                                  radioBool4: true,
                                  radioBool5: false,
                                  radioBool6: false
                                });
                              }}
                              innerColor="#b31f24"
                              outerColor="black"
                            />
                            <Text style={styles.radioBtnText}>
                              Premium Business
                            </Text>
                          </View>
                        </View>

                        <View style={styles.twoRadioBtnsView}>
                          <View style={styles.radioBtnPlusText}>
                            <RadioButton
                              isSelected={this.state.radioBool5}
                              onPress={() => {
                                this.setState({
                                  radioBool: false,
                                  radioBool2: false,
                                  radioBool3: false,
                                  radioBool4: false,
                                  radioBool5: true,
                                  radioBool6: false
                                });
                              }}
                              innerColor="#b31f24"
                              outerColor="black"
                            />
                            <Text style={styles.radioBtnText}>Business</Text>
                          </View>
                          <View style={styles.radioBtnPlusText}>
                            <RadioButton
                              isSelected={this.state.radioBool6}
                              onPress={() => {
                                this.setState({
                                  radioBool: false,
                                  radioBool2: false,
                                  radioBool3: false,
                                  radioBool4: false,
                                  radioBool5: false,
                                  radioBool6: true
                                });
                              }}
                              innerColor="#b31f24"
                              outerColor="black"
                              // label="Yasir"
                            />
                            <Text style={styles.radioBtnText}>
                              Economy First
                            </Text>
                          </View>
                        </View>
                      </View>

                      {/* done view started */}
                      <View style={styles.doneView}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ classModal: false });
                          }}
                          style={styles.done2}
                        >
                          <Text style={styles.donetext2}>DONE</Text>
                        </TouchableOpacity>
                      </View>

                      {/* <View style={styles.radioContainer}>
                {/* <Text style={styles.valueText}> </Text> */}
                      {/* <RadioGroup radioButtons={data} onPress={(data1)=>{console.log(data1,"data1")}}/> */}
                      {/* Value = {selectedButton} */}

                      {/* <RadioGroup radioButtons={this.state.data} onPress={this.onPress} /> */}
                      {/* </View> */}
                    </View>
                  </TouchableWithoutFeedback>
                </TouchableOpacity>
              </Modal>
              {/* end of class selection modal  */}
            </TouchableOpacity>
            {/* fly in*/}
          </View>
        </View>
        {/* cLASS end VIEW ABOVE */}

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
              this.props.navigation.navigate("Your Profile");
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
    marginVertical: 10
    // borderWidth:2,
    // borderColor:"blue"
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
    fontSize: 20,
    color: "white",
    alignSelf: "center"
  },
  done: {
    width: 70,
    height: 35,
    backgroundColor: "#FDD835",
    borderRadius: 20,
    justifyContent: "center"
  },
  donetext: {
    fontSize: 13,
    color: "black",
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

  //   destination wala

  destinationBox: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor:"black",
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#F5F5F5",
    justifyContent: "center"
    // paddingLeft: 10
  },
  leftbox: {
    // flexDirection: "row",
    width: "25%",
    justifyContent: "center",
    // backgroundColor: "pink",
    alignItems: "center"
  },

  rightBox: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "blue",
    width: "75%",
    height: "100%",
    justifyContent: "space-between",
    alignSelf: "center"
    // marginLeft: 40
  },
  rightBoxYellowArea: {
    alignSelf: "center",
    justifyContent: "space-evenly",
    height: "100%",
    width: "93%"
  },

  rightBoxYellowArea2: {
    alignSelf: "center",
    justifyContent: "center",
    height: "100%",
    width: "93%"
  },

  destinationText: {
    fontSize: 13,
    color: "#404040",
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
    marginBottom: 5
    // alignSelf: "center",
    // justifyContent:"center"
    // marginLeft: 10
  },
  imageIcon: {
    resizeMode: "contain",
    // marginRight: 10,
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 5
  },

  newYellowCover: {
    backgroundColor: "#FDD835",
    // borderColor:"blue",
    // borderWidth:2,
    flexDirection: "row",
    width: 230,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    paddingHorizontal: 5
  },

  yellowCover: {
    backgroundColor: "#FDD835",
    // borderColor:"blue",
    // borderWidth:2,
    flexDirection: "row",
    width: 140,
    height: 30,
    alignItems: "center",
    // paddingHorizontal:5,
    //  marginLeft:10,
    justifyContent: "space-around",
    borderRadius: 5
  },
  whiteCover: {
    // borderColor:"blue",
    // borderWidth:2,
    alignItems: "center",
    marginBottom: 5
    // justifyContent:"center",
    // alignSelf:"center"
  },
  // DATE BOX
  dateBox: {
    width: "100%",
    height: 95,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor:"black",
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#F5F5F5",
    justifyContent: "center"
    // paddingLeft: 10
  },

  flyOutwhiteCover: {
    // borderColor:"green",
    // borderWidth:2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: 230,
    height: 20,
    bottom: 5
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
    height: 35,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    paddingHorizontal: 5
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
    backgroundColor: "white",
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
  onePortionWholeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
    alignItems: "center"
  },
  leftPortion: { width: "65%", height: 60, justifyContent: "center" },
  rightPortion: {
    flexDirection: "row",
    width: "35%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center"
  },
  adultText: { fontSize: 16, color: "#404040", fontWeight: "400" },
  over12YearsText: {
    fontSize: 12,
    color: "#404040"
  },
  // radioContainer: {
  //       // flex: 1,
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       // flexDirection:"row"
  //   },
  //   valueText: {
  //       fontSize: 18,
  //       marginBottom: 50,
  //   },
  sixRadioBtnView: {
    height: 170,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    justifyContent: "center"
    // backgroundColor:"yellow"
  },
  twoRadioBtnsView: {
    flexDirection: "row",
    width: "90%",
    height: 50,
    // borderWidth: 2,
    justifyContent: "space-between",
    alignSelf: "center"
  },
  selectClassCover: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  selectClassText: {
    fontSize: 17,
    fontWeight: "500",
    alignSelf: "center"
  },
  radioBtnText: {
    color: "#404040",
    alignSelf: "center",
    paddingLeft: 7,
    fontSize: 14
  },

  radioBtnPlusText: {
    flexDirection: "row",
    width: "50%"
  },
  doneView: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center"
  },
  done2: {
    width: 100,
    height: 35,
    backgroundColor: "#ffc619",
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center"
  },
  donetext2: {
    fontSize: 14,
    color: "black",
    alignSelf: "center"
  }
});
