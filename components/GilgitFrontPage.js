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
import IconJazz from "./Explore/IconJazz";

export default class GilgitFrontPage extends React.Component {
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
        <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={true}
          //To hide statusBar
          backgroundColor="#00BCD4"
        />
        {/* image/searc/plan a trip */}
        {this.headerSticked()}

        {this.secondAppearingView()}

        <ScrollView
          // onScroll={event=> {console.log(event,"event");
          // onScroll={this.handleScroll}
          scrollEventThrottle={16}
          onScroll={event => {
            this.setState({ yAxis: event.nativeEvent.contentOffset.y });
            // console.log(event.nativeEvent.contentOffset.y);
          }}

          // }}
          // stickyHeaderIndices={[1]}
        >
          <View style={styles.mainTop}>
            <ImageBackground
              style={styles.bannerImage}
              imageStyle={{ borderColor: "transparent" }}
              source={require("../assets/images/gilgit/banner.jpg")}
            >
              {/* <View>
          <Text>hi</Text></View> */}
              <View>
                <TouchableOpacity
                  style={styles.planTrip}
                  onPress={() => {
                    this.props.navigation.navigate("About Gilgit");
                  }}
                >
                  <Text style={styles.planTripText}>Gilgit</Text>
                  <Icon name="ios-arrow-down" color="white" size={20} />
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
                //   style={{ backgroundColor: "pink" }}
                onPress={() => {
                  this.props.navigation.navigate("Flights");
                }}
              >
                <View style={styles.CircleView}>
                  <Image
                    style={styles.centerImage}
                    source={require("../assets/images/1.png")}
                  ></Image>
                  <Text style={styles.circleText}>Flights</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                //   style={{ backgroundColor: "pink" }}
                onPress={() => {
                  this.props.navigation.navigate("Flights");
                }}
              >
                <View style={styles.CircleView}>
                  <Image
                    style={styles.centerImage}
                    source={require("../assets/images/2.png")}
                  ></Image>
                  <Text style={styles.circleText}>Food</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                //   style={{ backgroundColor: "pink" }}
                onPress={() => {
                  this.props.navigation.navigate("Nested Scroll View");
                }}
              >
                <View style={styles.CircleView}>
                  <Image
                    style={styles.centerImage}
                    source={require("../assets/images/3.png")}
                  ></Image>
                  <Text style={styles.circleText}>Things to do</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                //   style={{ backgroundColor: "pink" }}
                onPress={() => {
                  this.props.navigation.navigate("Flights");
                }}
              >
                <View style={styles.CircleView}>
                  <Image
                    style={styles.centerImage}
                    source={require("../assets/images/1.png")}
                  ></Image>
                  <Text style={styles.circleText}>Flights</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                //   style={{ backgroundColor: "pink" }}
                onPress={() => {
                  this.props.navigation.navigate("Flights");
                }}
              >
                <View style={styles.CircleView}>
                  <Image
                    style={styles.centerImage}
                    source={require("../assets/images/2.png")}
                  ></Image>
                  <Text style={styles.circleText}>Food</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                //   style={{ backgroundColor: "pink" }}
                onPress={() => {
                  this.props.navigation.navigate("Flights");
                }}
              >
                <View style={styles.CircleView}>
                  <Image
                    style={styles.centerImage}
                    source={require("../assets/images/3.png")}
                  ></Image>
                  <Text style={styles.circleText}>Things to do</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* </ScrollView> */}

          {/* Discover The Best Of Gilgit  */}
          <View style={styles.blackTextView}>
            <Text style={styles.blackText}>Discover The Best Of Gilgit</Text>
          </View>

          {/* Your Next destination 1*/}

          <View style={styles.nextDestinationView}>
            <Text style={styles.nextText}>SIGHTS & PICNIC SPOTS IN GILGIT</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextdestination}>
            <ScrollView horizontal={true}>
              {/* First box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={require("../assets/images/gilgit/g1.jpg")}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Attabad Lake</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* first box ends here */}

              {/* Second box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnRIZtbRW0oEdnxrvjyIua4DB90LvBvko3XG5uFpTRTwoO-juJ"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Altit Fort</Text>
                  <Text style={styles.smText}>
                    Hunza Gilgit Baltistan, Pakistan
                  </Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Second Box Ends Here */}

              {/* third box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfHEkRj3y22nydmodi1rYdXUHlz-YL5F9jt9zNW9j6mXbjk5hs"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Rakaposhi Mountain</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* third box ends here */}

              {/* fourth box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQi4xPBKQvac_IHM_7GtmzP5hhumEg2BsJoymMebccMR_jfn-rw"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Khunjrab Pass</Text>
                  <Text style={styles.smText}>
                    Hunza Gilgit Baltistan, Pakistan
                  </Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* fourth Box Ends Here */}
            </ScrollView>

            {/* Lower view is for closing nextdestination */}
          </View>

          {/* TOP HOTELS IN GILGIT  */}

          <View style={styles.nextDestinationView}>
            <Text style={styles.nextText}>TOP HOTELS IN GILGIT</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextdestination}>
            <ScrollView horizontal={true}>
              {/* First box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={require("../assets/images/gilgit/g2.jpg")}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Serena Shigar Fort</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* first box ends here */}

              {/* Second box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTclmONWvmbL2BktBL2TGgRAZlfn0lzYuPryWH3q5WEzLIpG32l"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Serena Hotel</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Second Box Ends Here */}

              {/* third box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb8TGP11NfjGIaTyIBfzYW0SHuxENuS9xeLqQ_TWdeXpaZbunz"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Park Hotel</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* third box ends here */}

              {/* fourth box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkii4ZEnoanNDnQAJU_r0FtbkzPaO8MfFeLeTePdNc6gd-Dapk"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Gilgit Gateway Hotel</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* fourth Box Ends Here */}
            </ScrollView>

            {/* Lower view is for closing TOP HOTELS */}
          </View>

          {/* RESTAURANTS FAMOUS FOR TRADITIONAL FOOD  */}

          {/* Your Next destination 1*/}

          <View style={styles.nextDestinationView}>
            <Text style={styles.nextText}>
              RESTAURANTS FAMOUS FOR TRADITIONAL FOOD
            </Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextdestination}>
            <ScrollView horizontal={true}>
              {/* First box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={require("../assets/images/gilgit/g4.jpg")}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Gyal Hunza Breakfast</Text>
                  <Text style={styles.smText}>
                    Hunza Gilgit Baltistan, Pakistan
                  </Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* first box ends here */}

              {/* Second box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={require("../assets/images/gilgit/g5.jpg")}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Berekutz</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Second Box Ends Here */}

              {/* third box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6tnpD7FzlLzc-NhL1eeBL-qC792EWWkqmURlwW6IYoM2utFg4"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Paradise Grill</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* third box ends here */}

              {/* fourth box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://media-cdn.tripadvisor.com/media/photo-s/0d/ce/18/44/the-restaurant.jpg"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Chap Shuru</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* fourth Box Ends Here */}
            </ScrollView>

            {/* Lower view is for closing traditional foods */}
          </View>

          {/* CURRENCY EXCHANGE*/}

          <View style={styles.nextDestinationView}>
            <Text style={styles.nextText}>CURRENCY EXCHANGE</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextdestination}>
            <ScrollView horizontal={true}>
              {/* First box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={require("../assets/images/gilgit/g6.jpg")}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Main Bazar Hunza</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* first box ends here */}

              {/* Second box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={require("../assets/images/gilgit/g7.jpg")}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Site Plaza Gilgit</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Second Box Ends Here */}

              {/* third box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpFlGfvG6icVI03uk4KphvU5BYdQQLw6Xg6W6myQs_IBCq326b"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>King Exchange</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* third box ends here */}

              {/* fourth box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://c.tribune.com.pk/2019/01/1895398-circularxx-1548304415.jpg"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Skardu Travel</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* fourth Box Ends Here */}
            </ScrollView>

            {/* Lower view is for closing CURRENCY EXCHANGE */}
          </View>

          {/* RENT A CAR*/}

          <View style={styles.nextDestinationView}>
            <Text style={styles.nextText}>RENT A CAR</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextdestination}>
            <ScrollView horizontal={true}>
              {/* First box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={require("../assets/images/gilgit/g9.jpg")}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>King Rent A Car</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* first box ends here */}

              {/* Second box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={require("../assets/images/gilgit/g8.jpg")}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Eagle Rent A Car</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Second Box Ends Here */}

              {/* third box start */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcDJ5_d9x1wiqBN--VrWL7_lIr_Hk0BXugwW466-uQ6CSFeoj3"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Gilgit Cars</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* third box ends here */}

              {/* fourth box starts here */}
              <View style={styles.SpaceBetween2Places}>
                <View style={styles.nextImage}>
                  <ImageBackground
                    style={styles.bottomImage}
                    imageStyle={styles.bgImage}
                    source={{
                      uri:
                        "https://techsprouts.com/wp-content/uploads/2018/04/2018-toyota-c-hr-review.jpg"
                    }}
                  ></ImageBackground>
                </View>

                <View style={styles.nextPrice}>
                  <Text style={styles.parkText}>Skardu Travel</Text>
                  <Text style={styles.smText}>Gilgit Baltistan, Pakistan</Text>

                  <View style={styles.ratingAndPrice}>
                    <View style={styles.rating}>
                      {/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
                      <Image
                        style={{ width: 10, height: 10 }}
                        source={require("../assets/images/star.png")}
                      ></Image>
                      <Text style={styles.ratingText}>(4.8)</Text>
                    </View>

                    <View style={styles.startingFromWholeView}>
                      <Text style={styles.startingFromText}>Starting from</Text>

                      <Text style={styles.priceText}>$120</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* fourth Box Ends Here */}
            </ScrollView>

            {/* * Lower view is for closing RENT A CAR/} */}
          </View>
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
              this.props.navigation.navigate("About Gilgit");
            }}
          >
            <Text style={styles.planTripText}>Gilgit</Text>
            <Icon name="ios-arrow-down" color="white" size={20} />
          </TouchableOpacity>
        </View>
      );
    }
  }
}

// StyleSheet
const styles = StyleSheet.create({
  iconJazz: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginHorizontal: 10,
    alignSelf: "center"
  },
  container: {
    // flex: 1,
    // backgroundColor: "yellow",
    // alignItems: 'center',
    alignSelf: "center",
    // justifyContent: "flex-start",
    width: "100%",
    height: "100%"
    // marginVertical:10
  },

  mainTop: {
    width: "100%",
    height: 250,
    // borderRadius: 50,
    // borderWidth:1,
    backgroundColor: "white"
  },
  bannerImage: {
    resizeMode: "contain",
    width: "100%",
    height: 240,
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
    fontWeight: "bold",
    paddingRight: 10
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
    marginTop: 10,
    // marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  CircleView: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#b31f24",
    marginLeft: 10
  },
  circleText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#404040"
  },

  centerImage: {
    height: 60,
    width: 60
    // marginRight: 9
    // backgroundColor:"green"
  },

  blackTextView: {
    width: "100%",
    height: 45,
    // borderWidth: 1,
    justifyContent: "center"
  },
  blackText: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 4
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
    height: 165,
    // backgroundColor: "red",
    // borderWidth: 4,
    // borderColor:"black",
    // bottom:50,
    flexDirection: "row"
  },

  nextDestinationView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    height: 25,
    backgroundColor: "white",
    alignItems: "flex-end"
  },

  nextText: {
    fontWeight: "bold",
    color: "#B22023",
    fontSize: 12
  },
  seeAllText: {
    fontWeight: "bold",
    color: "#ffc619",
    fontSize: 11
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
  bgImage: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent"
  },

  nextImage: {
    width: 220,
    height: 120,
    // backgroundColor:'green',
    justifyContent: "center"
  },

  SpaceBetween2Places: { marginLeft: 5, marginRight: 17 },

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
    color: "#404040"
  },
  smText: { marginLeft: 10, opacity: 0.6, fontSize: 9 },

  ratingAndPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },

  rating: {
    flexDirection: "row",
    paddingTop: 13,
    alignItems: "center"
  },

  ratingText: { fontSize: 8, marginLeft: 5 },

  startingFromWholeView: { flexDirection: "row", paddingTop: 13 },

  startingFromText: { fontSize: 8, paddingRight: 4 },

  priceText: { fontSize: 8, color: "#B22023" },

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
  }
});
