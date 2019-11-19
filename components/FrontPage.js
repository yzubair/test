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
import PlaceInfo from "./Explore/PlaceInfo";
import IconJazz from "./Explore/IconJazz";

export default class FrontPage extends React.Component {

  state = {
    yAxis: 0
  };
  handleScroll(event) {
    // console.log(event.nativeEvent.contentOffset.y);
    this.setState({ yAxis: event.nativeEvent.contentOffset.y });
  }
  render() {
    return (
      <View style={styles.container}>
                  {this.headerSticked()}
{this.secondAppearingView()}
        <ScrollView 
        showsVerticalScrollIndicator={false}


        scrollEventThrottle={16}
          onScroll={event => {
            this.setState({ yAxis: event.nativeEvent.contentOffset.y });
            // console.log(event.nativeEvent.contentOffset.y);
          }}
        // style={{ backgroundColor: "pink" }}
        >
          <StatusBar
            barStyle="dark-content"
            // dark-content, light-content and default
            hidden={true}
            //To hide statusBar
            backgroundColor="#00BCD4"
          />


          {/* image/searc/plan a trip */}

          <View style={styles.mainTop}>
            <ImageBackground
              style={styles.bannerImage}
              imageStyle={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "transparent"
              }}
              source={require("../assets/images/banner_i.png")}
            >
              {/* <View>
          <Text>hi</Text></View> */}
              <View>
                <View style={styles.searchBox}>
                  {/* <Text style={styles.london}>London |</Text> */}
                  <TextInput style={styles.searchText} placeholder="London " />
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Gilgit Front Page");
                    }}
                  >
                    <Icon name={"ios-search"} size={30} color="#B22023"></Icon>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.planTrip}
                  onPress={() => {
                    this.props.navigation.navigate("Round Trip");
                  }}
                >
                  <Image
                    style={{ marginRight: 7 }}
                    source={require("../assets/images/iconplane.png")}
                  ></Image>

                  <Text style={styles.planTripText}>Plan a trip</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* Flights/ Food/ ToDo */}

          {/* <ScrollView horizontal={true} > */}
          <View style={styles.centerView}>
            <ScrollView horizontal={true}
             showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Flights");
                }}
              >
                <Image
                  style={styles.centerImage}
                  source={require("../assets/images/plane.png")}
                ></Image>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Gilgit Front Page");
                }}
              >
                <Image
                  style={styles.centerImage}
                  source={require("../assets/images/food.png")}
                ></Image>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.centerImage}
                  source={require("../assets/images/todo.png")}
                ></Image>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.centerImage}
                  source={require("../assets/images/plane.png")}
                ></Image>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.centerImage}
                  source={require("../assets/images/plane.png")}
                ></Image>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.centerImage}
                  source={require("../assets/images/plane.png")}
                ></Image>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* </ScrollView> */}

          {/* Your Next destination 1*/}

          <View style={styles.nextDestinationView}>
            <Text style={styles.nextText}> YOU MAY ALSO LIKE!</Text>
          </View>
          {/* places price and all below 1 */}
          <View style={styles.nextdestination}>
            <ScrollView horizontal={true}
             showsHorizontalScrollIndicator={false}
             >
              {/* First box start */}
              <PlaceInfo
                imageUri={require("../assets/images/london.png")}
                placeName="Worimi National Park"
                location="London, England"
                rating="(4.9)"
                price="$120"
              />

              {/* second Box  */}
              <PlaceInfo
                imageUri={{
                  uri:
                    "https://www.cruiseeurope.com/site/assets/files/32110/cruise_europe_1_0.600x0.jpg"
                }}
                placeName="Southampton Docks"
                location="Southampton, England"
                rating="(4.9)"
                price="$130"
              />
              {/* third box  */}
              <PlaceInfo
                imageUri={require("../assets/images/rocks.png")}
                placeName="Stonehedge"
                location="Salisbury Plain, England"
                rating="(4.7)"
                price="$105"
              />
              {/* fourth box start */}
              <PlaceInfo
                imageUri={{
                  uri:
                    "https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/dulnuce-castle.jpg"
                }}
                placeName="Ruchika Anand"
                location="Andover, England"
                rating="(4.5)"
                price="$115"
              />
            </ScrollView>

            {/* Lower view is for closing nextdestination */}
          </View>

          {/* places price and all below 2 */}
          <View style={styles.nextdestination}>
            <ScrollView horizontal={true}
             showsHorizontalScrollIndicator={false}
             >
              {/* First box start */}
              <PlaceInfo
                imageUri={require("../assets/images/london.png")}
                placeName="Worimi National Park"
                location="London, England"
                rating="(4.9)"
                price="$120"
              />

              {/* second Box  */}
              <PlaceInfo
                imageUri={{
                  uri:
                    "https://www.cruiseeurope.com/site/assets/files/32110/cruise_europe_1_0.600x0.jpg"
                }}
                placeName="Southampton Docks"
                location="Southampton, England"
                rating="(4.9)"
                price="$130"
              />
              {/* third box  */}
              <PlaceInfo
                imageUri={require("../assets/images/rocks.png")}
                placeName="Stonehedge"
                location="Salisbury Plain, England"
                rating="(4.7)"
                price="$105"
              />
              {/* fourth box start */}
              <PlaceInfo
                imageUri={{
                  uri:
                    "https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/dulnuce-castle.jpg"
                }}
                placeName="Ruchika Anand"
                location="Andover, England"
                rating="(4.5)"
                price="$115"
              />
            </ScrollView>

            {/* Lower view is for closing nextdestination */}
          </View>


                    {/* places price and all below 1 */}
                    <View style={styles.nextdestination}>
            <ScrollView horizontal={true}
             showsHorizontalScrollIndicator={false}
             >
              {/* First box start */}
              <PlaceInfo
                imageUri={require("../assets/images/london.png")}
                placeName="Worimi National Park"
                location="London, England"
                rating="(4.9)"
                price="$120"
              />

              {/* second Box  */}
              <PlaceInfo
                imageUri={{
                  uri:
                    "https://www.cruiseeurope.com/site/assets/files/32110/cruise_europe_1_0.600x0.jpg"
                }}
                placeName="Southampton Docks"
                location="Southampton, England"
                rating="(4.9)"
                price="$130"
              />
              {/* third box  */}
              <PlaceInfo
                imageUri={require("../assets/images/rocks.png")}
                placeName="Stonehedge"
                location="Salisbury Plain, England"
                rating="(4.7)"
                price="$105"
              />
              {/* fourth box start */}
              <PlaceInfo
                imageUri={{
                  uri:
                    "https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/dulnuce-castle.jpg"
                }}
                placeName="Ruchika Anand"
                location="Andover, England"
                rating="(4.5)"
                price="$115"
              />
            </ScrollView>

            {/* Lower view is for closing nextdestination */}
          </View>

                    {/* places price and all below 1 */}
                    <View style={styles.nextdestination}>
            <ScrollView horizontal={true}
             showsHorizontalScrollIndicator={false}
             >
              {/* First box start */}
              <PlaceInfo
                imageUri={require("../assets/images/london.png")}
                placeName="Worimi National Park"
                location="London, England"
                rating="(4.9)"
                price="$120"
              />

              {/* second Box  */}
              <PlaceInfo
                imageUri={{
                  uri:
                    "https://www.cruiseeurope.com/site/assets/files/32110/cruise_europe_1_0.600x0.jpg"
                }}
                placeName="Southampton Docks"
                location="Southampton, England"
                rating="(4.9)"
                price="$130"
              />
              {/* third box  */}
              <PlaceInfo
                imageUri={require("../assets/images/rocks.png")}
                placeName="Stonehedge"
                location="Salisbury Plain, England"
                rating="(4.7)"
                price="$105"
              />
              {/* fourth box start */}
              <PlaceInfo
                imageUri={{
                  uri:
                    "https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/dulnuce-castle.jpg"
                }}
                placeName="Ruchika Anand"
                location="Andover, England"
                rating="(4.5)"
                price="$115"
              />
            </ScrollView>

            {/* Lower view is for closing nextdestination */}
          </View>


          {/* whole scrollview  below closes  */}
        </ScrollView>
        {/* Bottom Navigation */}

        <View style={styles.navigationView}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.props.navigation.navigate("Search Flight");
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
              this.props.navigation.navigate("Passenger Info");
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
              this.props.navigation.navigate("Reservation Completed");
            }}
          >
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../assets/images/payment.png")}
            ></Image>
            <Text style={styles.touchableText}>PAYMENTS</Text>
          </TouchableOpacity>
        </View>

        {/* End View*/}
      </View>
    );
  }


secondAppearingView() {
  if (this.state.yAxis > 270) {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          position: "absolute",
          zIndex: 10,
          width: "100%",
          height: 70,
          top: 50,
          backgroundColor: "white",
          borderBottomWidth: 3,
          borderBottomColor: "#ebebeb",
          shadowColor: "#000",
          shadowOffset: { width: 4, height: 6 },
          shadowOpacity: 0.6,
          shadowRadius: 2
        }}
      >
        <IconJazz imageUri={require("../assets/images/1.png")} />
        <IconJazz imageUri={require("../assets/images/2.png")} />
        <IconJazz imageUri={require("../assets/images/3.png")} />
        <IconJazz imageUri={require("../assets/images/4.png")} />
        <IconJazz imageUri={require("../assets/images/5.png")} />
        <IconJazz imageUri={require("../assets/images/6.png")} />
      </ScrollView>
    );
  }
}
headerSticked() {
  if (this.state.yAxis > 120) {
    return (
      <View
        style={{
          top: 0,
          position: "absolute",
          // bottom:20,
          zIndex: 5,
          height: 50,
          width: "100%",
          backgroundColor: "white",
          borderBottomWidth: 2,
          borderBottomColor: "#ebebeb"
        }}
      >
                <TouchableOpacity
                  style={styles.planTrip}
                  onPress={() => {
                    this.props.navigation.navigate("Round Trip");
                  }}
                >
                  <Image
                    style={{ marginRight: 7 }}
                    source={require("../assets/images/iconplane.png")}
                  ></Image>

                  <Text style={styles.planTripText}>Plan a trip</Text>
                </TouchableOpacity>
      </View>
    );
  }
}
}
// StyleSheet
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'yellow',
    // alignItems: 'center',
    alignSelf: "center",
    justifyContent: "space-between",
    width: "95%",
    height: "100%"
    // marginTop:10,
    // borderWidth:1
  },

  mainTop: {
    width: "100%",
    height: 250,
    // borderRadius: 50,
    // borderWidth:1,
    backgroundColor: "white",
    marginTop: 10
  },
  bannerImage: {
    resizeMode: "contain",
    width: "100%",
    height: 250,
    // borderRadius: 50,
    justifyContent: "center"
    // backgroundColor:"red"
  },
  searchBox: {
    flexDirection: "row",
    width: 200,
    height: 40,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    // top:'20%',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginTop: 40,
    borderWidth: 2,
    borderColor: "grey"
  },

  london: {
    fontSize: 15,
    fontWeight: "bold",
    opacity: 0.5
  },
  searchText: {
    justifyContent: "flex-start",
    // backgroundColor:"red",
    width: 150,
    height: 35,
    fontWeight: "bold"
  },
  planTrip: {
    width: 120,
    height: 40,
    backgroundColor: "#B22023",
    borderRadius: 50,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  planTripText: {
    color: "white",
    fontWeight: "bold"
  },
  // text:{
  //   fontSize:40,
  //   color:'red',
  //   justifyContent:'center',
  //   top:40,
  // }

  // Center View

  centerView: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  centerImage: {
    height: 100,
    width: 100,
    marginRight: 9
    // backgroundColor:"green"
  },
  // scroll:{
  //   width:"100%",
  //   height:"10%",
  //   backgroundColor:"red"
  // }

  // Next DESTINATION
  nextdestination: {
    alignSelf: "center",
    width: "100%",
    height: 180,
    // backgroundColor: "red",
    // borderWidth: 4,
    // borderColor:"black",
    // bottom:50,
    flexDirection: "row"
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
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 7,
    marginLeft: 31,
    bottom: 38,
    justifyContent: "center",
    // marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },

  parkText: {
    fontWeight: "bold",
    marginLeft: 10,
    opacity: 0.6
  },

  //   navigation bottom

  navigationView: {
    width: "100%",
    height: 70,
    // backgroundColor: "#B22023",
    flexDirection: "row",
    alignSelf: "flex-end"
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
  }
});
