import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Icon from "@expo/vector-icons/Ionicons";

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Yasir extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 15 });
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) => (
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 1],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -97],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        {
          this.kinHeader()
        }
{/* <View style={{width:"100%", height:160, backgroundColor:"pink"} }></View> */}

        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, , 0, 0.251)"
          hidden={true}
        />
        <Animated.ScrollView
        // stickyHeaderIndices={[1]}
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] 
          
          },
          ]
        }
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require("../assets/images/gilgit/banner.jpg")}
          />
        



        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
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
        </Animated.View>


        






      </View>
    );
  }

  kinHeader() {
    return <View style={{ height: 60, width: "100%", backgroundColor: "green" }}></View>;
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    overflow: 'hidden',
    // height: HEADER_MAX_HEIGHT,
    width:"100%",
    height:240
  },
  backgroundImage: {
      width:"100%",
      height:240,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // width: null,
    // height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    // marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  bar2: {
    backgroundColor: 'transparent',
    // marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
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
});