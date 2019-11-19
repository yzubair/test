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

export default class WriteReview extends React.Component {
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
              style={{ width: 35, height: 35, resizeMode: "contain" }}
              source={require("../assets/images/RoundTrip/backArrow.png")}
            ></Image>
          </TouchableOpacity>

          <Text style={styles.headertext}> Write Review</Text>

          <TouchableOpacity
            style={styles.done}
            onPress={() => {
              this.props.navigation.navigate("Loading Page");
            }}
          >
            <Text style={styles.donetext}>DONE</Text>
          </TouchableOpacity>
        </View>

        {/* tap a star and stars  */}
        <View style={styles.tapStar}>
          <View>
            <Text style={{fontSize:17, fontWeight:"700", alignSelf:"center", marginTop:15,marginBottom:2, color:"#ffc619",}}>Tap a star to rate</Text>
          </View>

          {/* stars  */}
          <View style={{flexDirection:"row", alignSelf:"center"}}>
            <Icon name="md-star-outline" size={50} color="grey"></Icon>
            <Icon name="md-star-outline" size={50} color="grey"></Icon>
            <Icon name="md-star-outline" size={50} color="grey"></Icon>
            <Icon name="md-star-outline" size={50} color="grey"></Icon>
            <Icon name="md-star-outline" size={50} color="grey"></Icon>
          </View>
        </View>

        <View style={{width:"100%", backgroundColor:"#F5F5F5"}}>
{/* month visited  */}
        <View style={{width:"95%",height:70, alignSelf:"center", marginBottom:10, justifyContent:"center"}}>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Title</Text>
                </View>

                <View style={styles.whiteBox}>
            <TextInput style={styles.input}
          placeholder="January 2019"
          />
          </View>
        </View>
{/* type of visit  */}
           <View style={{width:"95%",height:70, alignSelf:"center", marginBottom:10, justifyContent:"center"}}>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Type of visit</Text>
                </View>

                <View style={styles.smallwhiteBoxWithArrow}>
            <TextInput style={styles.smallinputwithArrow}
          placeholder="Summer vacation"
          />
          <View style={{right:10}}>
          <Icon name="md-arrow-dropdown" size={30} color="#B22023"/></View>
          {/* <Image  style={{backgroundColor:"red"}}source={require('../assets/images/RoundTrip/dropDownArrow.png')}></Image> */}

{/* add image here and make the width of small input small */}

          </View>
          </View>
        {/* title  */}
        <View style={{width:"95%",height:70, alignSelf:"center", marginBottom:10, justifyContent:"center"}}>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Your title</Text>
                </View>

                <View style={styles.whiteBox}>
            <TextInput style={styles.input}
          placeholder="January 2019"
          />
          </View>
        </View>

        {/* review  */}
        <View style={{width:"95%",height:170, alignSelf:"center", marginBottom:10,}}>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Write your review</Text>
                </View>

                <View style={styles.whiteBox}>
            <TextInput style={styles.inputLarge}
          placeholder="Review"
          multiline={true}
          />
          </View>
        </View>
        </View>

        {/* submit  */}

        <TouchableOpacity  style={styles.submit}
                    onPress={() => {
                        this.props.navigation.navigate("About Gilgit");
                      }}>
            <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>



        {/* end view  */}
      </View>
    );
  }
}

// StyleSheet
const styles = StyleSheet.create({
submitText:{

    fontSize:25, 
    fontWeight:"bold",
    alignSelf:"center",
    color:"white"
}
    ,
    submit:{
        width:"100%", 
        // borderWidth:1,
        height:45,
        backgroundColor:"#B22023",
        justifyContent:"center"

    },

    inputLarge: {
   
        width: "100%",
        backgroundColor: "white",
        color: "black",
      height:145,
        paddingHorizontal: 10,
        justifyContent:"flex-start",
        alignSelf:"flex-start",
        // borderWidth:2,
        borderRadius:5,
        borderWidth:2, borderColor:"#ebebeb"
    
    },

    input: {
   
        width: "100%",
        backgroundColor: "white",
        color: "black",
      height:35,
        paddingHorizontal: 10,
        justifyContent:'center',
        alignSelf:'center',
        // borderWidth:2,
        borderRadius:5,
        borderWidth:2, borderColor:"#ebebeb"
    
    },

    whiteBox:{
        height: 35,
        width:"100%",
        // backgroundColor: "red",
        // borderWidth:1, 
        // borderColor:"grey",
        // borderRadius:5,
    },
    

    abovePlaceholderbox:{
        height: 20,
        // backgroundColor:"green",
    },
    
    abovePlaceholderText:{
        // alignItems:"center",
    // paddingLeft:10,
    // paddingTop:8
    color: "#B22023",
    paddingLeft: 5,
    fontWeight:"600", 
    fontSize:13
    
    
    },
  tapStar: {
    width: "100%",
    height: 110,
    // borderWidth: 1
  },
  container: {
    // flex: 1,
    // backgroundColor: "yellow",
    // alignItems: 'center',
    alignSelf: "center",
    // justifyContent: "center",
    width: "95%",
    height: "98%",
    marginTop: 10
    // margimargnVertical: 10
    // borderWidth:2,
    // borderColor:"blue"
  },
  header: {
    backgroundColor: "#B22023",
    height: 75,
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
  smallwhiteBoxWithArrow:{
    height: 35,
   width:"100%",
    backgroundColor: "white",
    flexDirection:"row",
 
    // borderColor:"grey",
    // borderRadius:5,
    justifyContent:"space-between",
    borderRadius:5,
      borderWidth:2,borderColor:"#ebebeb"
  },
  smallinputwithArrow: {
   
    width: "80%",
    backgroundColor: "white",
    color: "black",
  height:33,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignSelf:'center',
    // borderWidth:2,
  
  },
});
