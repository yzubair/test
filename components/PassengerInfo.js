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
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";

export default class PassengerInfo extends React.Component {
  state={
    modalVisible:false,
    modalVisible2:false,
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
        visible={this.state.modalVisible}
        transparent={true}
        >
          <TouchableOpacity style={{height:"100%", backgroundColor: "#rgba(255,255,255,0.7)" , justifyContent:"center",}}
          onPress={()=>{this.setState({modalVisible:false}) }}
          >

         <TouchableWithoutFeedback>
          <View style={{height:"40%", width:"95%",alignSelf:"center", backgroundColor:"white",borderRadius:25,    shadowColor: "grey",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 6}}>

{/* inside modalVisible */}
<View style={styles.section}>
<Text style={{fontSize:20, color:"#B22023", fontWeight:"600", paddingLeft:20}}>PAYMENT METHOD</Text>
</View>

<TouchableOpacity style={styles.section}>
<Image style={{resizeMode:"contain", width:"80%", height:"80%", alignSelf:"center", marginRight:20}} 
source={require('../assets/images/payment/jazz.png')}>
                 
              </Image>
</TouchableOpacity>

<TouchableOpacity style={styles.section}>
<Image style={{resizeMode:"contain", width:"80%", height:"80%", alignSelf:"center", marginRight:20}} 
source={require('../assets/images/payment/card.png')}>
                 
              </Image>
</TouchableOpacity>

<TouchableOpacity style={styles.section}  onPress={()=>{ this.setState({modalVisible2:true})  }}>
<View  style={styles.touchConfirm}>
<Text style={styles.touchableSelectedConfirm} 

 
>CONFIRM</Text>
</View>

</TouchableOpacity>
        

            
          </View>
          </TouchableWithoutFeedback>
          </TouchableOpacity>
          <Modal
        visible={this.state.modalVisible2}
        transparent={true}
        >
          <TouchableOpacity style={{height:"100%", backgroundColor: "#rgba(255,255,255,0.7)" , justifyContent:"center",}}
          onPress={()=>{this.setState({modalVisible2:false}) }}
          >

         <TouchableWithoutFeedback>
         <View style={{height:"40%", width:"95%",alignSelf:"center", backgroundColor:"transparent",borderRadius:25, justifyContent:"center"}}>
     
         <Image style={{resizeMode:"contain", width:"45%", height:"45%", alignSelf:"center"}} 
source={require('../assets/images/payment/tick.png')}>
                 
              </Image>

      </View>
         </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
        </Modal>
         {/* modal 2 */}
         {/* <Modal
        visible={this.state.modalVisible2}
        transparent={true}
        >
          <TouchableOpacity style={{height:"70%", backgroundColor: "#rgba(0,90,0,0.3)" , justifyContent:"center",}}
          onPress={()=>{this.setState({modalVisible2:false}) }}
          >

         <TouchableWithoutFeedback>
         <View style={{height:"40%", width:"95%",alignSelf:"center", backgroundColor:"white",borderRadius:25,    shadowColor: "grey",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 4}}>
      <Text>HIIIIIIIIIIIIIIIIIIIII</Text>
      </View>
         </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal> */}


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
              <Image style={{width:35, height:35, resizeMode:"contain"}} source={require('../assets/images/RoundTrip/backArrow.png')}>
                 
              </Image>
            </TouchableOpacity>

            <Text style={styles.headertext}> Passenger Information</Text>

            <TouchableOpacity style={styles.done}
            onPress={()=>{ this.setState({modalVisible:true})  }}
            >
                <Text style={styles.donetext}>
                    PROCEED TO PAYMENT
                </Text>
            </TouchableOpacity>
          </View>

          {/* Personal Info */}

          {/* <View style={styles.touchableBox}>
              <TouchableOpacity style={styles.touch1}>
                <Text style={styles.touchableSelected}>Round Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch2}  
               onPress={() => {
                this.props.navigation.navigate("One Way");
               }}
               >
                <Text style={styles.touchableTextTop}>One Way</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch2} onPress={() => {
                this.props.navigation.navigate("MultiCity");
               }}>
                <Text style={styles.touchableTextTop} >Multi City</Text>
              </TouchableOpacity>
            </View> */}

<View style={{width:"100%", height:520,}}>

<View style={styles.touchableBox}>

<View style={styles.touch1} >
    <Text style={styles.touchableSelected}>Personal Information</Text>
</View>


<View style={{flexDirection:"row", justifyContent:"center",alignItems:"center"}}>

<Image style={{width:20, height:20, resizeMode:"contain", marginRight:7,bottom:5}} source={require('../assets/images/profile/clock.png')}>
                 
              </Image>

              <View >
                  <Text style={{color:"grey", fontWeight:"500", }}>00:10:25</Text>
                  <Text style={{fontSize:8}}>Session Expiry</Text>
              </View>

</View>





    </View>

    <ScrollView>
{/* Adult 1 info */}
    <View style={{width:"100%", backgroundColor:"#F5F5F5", marginBottom: 20,}}>

    <View style={styles.nextDestinationView}>
          <Text style={styles.nextText}>ADULT 1 INFORMATION</Text>
        </View>

        <View style={{width:"95%", alignSelf:"center", marginBottom:10}}>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Full Name</Text>
                </View>

                <View style={styles.whiteBox}>
            <TextInput style={styles.input}
          placeholder="Yasir Zubair"
          />
          </View>
        </View>


{/* date of birth/gender */}

        <View style={{width:"95%", alignSelf:"center", flexDirection:"row",justifyContent:"space-between", marginBottom:10}}>
          
        {/* date of birth */}
           <View>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Date Of Birth</Text>
                </View>

                <View style={styles.smallwhiteBox}>
            <TextInput style={styles.smallinput}
          placeholder="01-02-2002"
          />
          </View>
          </View>

          {/* gender */}
          <View>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Gender</Text>
                </View>

                <View style={styles.smallwhiteBoxWithArrow}>
            <TextInput style={styles.smallinputwithArrow}
          placeholder="Male"
          />
          <Icon name="md-arrow-dropdown" size={30} color="#B22023"/>
          {/* <Image  style={{backgroundColor:"red"}}source={require('../assets/images/RoundTrip/dropDownArrow.png')}></Image> */}

{/* add image here and make the width of small input small */}

          </View>
          </View>


        </View>


        {/* Nationality/Passport */}
        <View style={{width:"95%", alignSelf:"center", flexDirection:"row",justifyContent:"space-between", marginBottom:10}}>
          
        {/* date of birth */}
           <View>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Nationality</Text>
                </View>

                <View style={styles.smallwhiteBox}>
            <TextInput style={styles.smallinput}
          placeholder="Pakistan"
          />
          </View>
          </View>

          {/* gender */}
          <View>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Passport</Text>
                </View>

                <View style={styles.smallwhiteBox}>
            <TextInput style={styles.smallinput}
          placeholder="123 456 7890"
          />
          </View>
          </View>


        </View>


{/* document /Expiry */}
        <View style={{width:"95%", alignSelf:"center", flexDirection:"row",justifyContent:"space-between", marginBottom:10}}>
          
          {/* date of birth */}
             <View>
              <View style={styles.abovePlaceholderbox}>
                  <Text style={styles.abovePlaceholderText}>Document</Text>
                  </View>
  
                  <View style={styles.smallwhiteBox}>
              <TextInput style={styles.smallinput}
            placeholder="Document"
            />
            </View>
            </View>
  
            {/* gender */}
            <View style={{marginBottom:20}}>
              <View style={styles.abovePlaceholderbox}>
                  <Text style={styles.abovePlaceholderText}>Expiry</Text>
                  </View>
  
                  <View style={styles.smallwhiteBox}>
              <TextInput style={styles.smallinput}
            placeholder="06-05-2020"
            />
            </View>
            </View>
  
  
          </View>


{/* final view for adult 1 */}
    </View>

{/* Contact info */}
    <View style={{width:"100%", backgroundColor:"#F5F5F5", marginBottom:20,}}>
    <View style={styles.nextDestinationView}>
          <Text style={styles.nextText}>CONTACT INFORMATION</Text>
        </View>

        <View style={{width:"95%", alignSelf:"center", marginBottom:10}}>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Mobile Number</Text>
                </View>

                <View style={styles.whiteBox}>
            <TextInput style={styles.input}
          placeholder="i.e 0300-1234567"
          />
          </View>
        </View>

        <View style={{width:"95%", alignSelf:"center", marginBottom:10}}>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Email Address</Text>
                </View>

                <View style={styles.whiteBox}>
            <TextInput style={styles.input}
          placeholder="example@youremail.com"
          />
          </View>
        </View>


        <View style={{width:"95%", alignSelf:"center", marginBottom:30}}>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Address</Text>
                </View>

                <View style={styles.AddresswhiteBox}>
            <TextInput style={styles.Addressinput}
          placeholder="Address"
          multiline={true}
          />
          </View>
        </View>


</View>


{/* ADULT-2 INFO  */}
 <View style={{width:"100%", backgroundColor:"#F5F5F5", marginBottom: 20,}}>

<View style={styles.nextDestinationView}>
      <Text style={styles.nextText}>ADULT 2 INFORMATION</Text>
    </View>

    <View style={{width:"95%", alignSelf:"center", marginBottom:10}}>
        <View style={styles.abovePlaceholderbox}>
            <Text style={styles.abovePlaceholderText}>Full Name</Text>
            </View>

            <View style={styles.whiteBox}>
        <TextInput style={styles.input}
      placeholder="Saud Khan"
      />
      </View>
    </View>


{/* date of birth/gender */}

    <View style={{width:"95%", alignSelf:"center", flexDirection:"row",justifyContent:"space-between", marginBottom:10}}>
      
    {/* date of birth */}
       <View>
        <View style={styles.abovePlaceholderbox}>
            <Text style={styles.abovePlaceholderText}>Date Of Birth</Text>
            </View>

            <View style={styles.smallwhiteBox}>
        <TextInput style={styles.smallinput}
      placeholder="01-02-2002"
      />
      </View>
      </View>

      {/* gender */}
      <View>
            <View style={styles.abovePlaceholderbox}>
                <Text style={styles.abovePlaceholderText}>Gender</Text>
                </View>

                <View style={styles.smallwhiteBoxWithArrow}>
            <TextInput style={styles.smallinputwithArrow}
          placeholder="Male"
          />
          <Icon name="md-arrow-dropdown" size={30} color="#B22023"/>
          {/* <Image  style={{backgroundColor:"red"}}source={require('../assets/images/RoundTrip/dropDownArrow.png')}></Image> */}

{/* add image here and make the width of small input small */}

          </View>
          </View>

    </View>


    {/* Nationality/Passport */}
    <View style={{width:"95%", alignSelf:"center", flexDirection:"row",justifyContent:"space-between", marginBottom:10}}>
      
    {/* date of birth */}
       <View>
        <View style={styles.abovePlaceholderbox}>
            <Text style={styles.abovePlaceholderText}>Nationality</Text>
            </View>

            <View style={styles.smallwhiteBox}>
        <TextInput style={styles.smallinput}
      placeholder="Pakistan"
      />
      </View>
      </View>

      {/* gender */}
      <View>
        <View style={styles.abovePlaceholderbox}>
            <Text style={styles.abovePlaceholderText}>Passport</Text>
            </View>

            <View style={styles.smallwhiteBox}>
        <TextInput style={styles.smallinput}
      placeholder="123 456 7890"
      />
      </View>
      </View>


    </View>


{/* document /Expiry */}
    <View style={{width:"95%", alignSelf:"center", flexDirection:"row",justifyContent:"space-between", marginBottom:10}}>
      
      {/* date of birth */}
         <View>
          <View style={styles.abovePlaceholderbox}>
              <Text style={styles.abovePlaceholderText}>Document</Text>
              </View>

              <View style={styles.smallwhiteBox}>
          <TextInput style={styles.smallinput}
        placeholder="Document"
        />
        </View>
        </View>

        {/* gender */}
        <View style={{marginBottom:20}}>
          <View style={styles.abovePlaceholderbox}>
              <Text style={styles.abovePlaceholderText}>Expiry</Text>
              </View>

              <View style={styles.smallwhiteBox}>
          <TextInput style={styles.smallinput}
        placeholder="06-05-2020"
        />
        </View>
        </View>


      </View>


{/* final view for adult 1 */}
</View>


</ScrollView>
{/* end of centeral whole View */}

<View style={{height:20, backgroundColor:"white"}}></View>
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
    // justifyContent: "flex-start",
    width: "95%",
    height: "100%",
marginVertical:10,
    // borderWidth:2,
    // borderColor:"blue"
  },
section:{
// borderWidth:2,
height:"25%",
// backgroundColor:"red",
justifyContent:"center",
borderBottomWidth: 1,
borderBottomColor: "grey",
width:"90%",
alignSelf:"center"


},

  header: {
    backgroundColor: "#B22023",
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius:15,
    paddingHorizontal:10
  },
  arrow: {
    justifyContent: "flex-start",
    // paddingRight: 50
  },
  headertext: {
    fontSize: 15,
    color: "white",
    alignSelf:"center",
    paddingLeft:20
  },
done:{
    width:100,
    height:35,
    // backgroundColor:"#FDD835",
    borderRadius:20,
    justifyContent:"center"
},
donetext: {
    fontSize: 8,
    color: "white",
    alignSelf:"center"
  },


  touchableBox: {
    flexDirection:'row',
    width:'100%',
    height:60,
    justifyContent:"flex-end",
    // alignItems:'center',
    alignSelf:'center',
    // marginVertical: 20,
    backgroundColor:"white",
    paddingHorizontal: 5,
    // borderRadius:20
    // borderWidth:3
    
      },
      touch1: {
        height: 40,
        width: 170,
        backgroundColor: "grey",
        // borderWidth: 2,
        // borderColor: "green",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius:20,
        // paddingLeft:10
        // marginHorizontal: 10,
        marginRight:10 
        // #B22023
      },
      touchConfirm: {
        height: 40,
        width: 190,
        backgroundColor: "#B22023",
        // borderWidth: 2,
        // borderColor: "green",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius:20,
        // paddingLeft:10
        // marginHorizontal: 10,
        // marginRight:10 
        // #B22023
      },

      touch2: {
        height: 40,
        width: 115,
        // borderWidth:2,
        // borderColor:'blue',
        // backgroundColor: "white",
        alignSelf: "center",
        borderRadius:50,
        justifyContent: "center",
        // paddingLeft:10
      },

      touchableSelected: {
        fontSize: 11,
        color: "white",
        // paddingLeft: 10,
        alignSelf: "center",
        fontWeight:"bold"
      },

      touchableSelectedConfirm: {
        fontSize: 15,
        color: "white",
        // paddingLeft: 10,
        alignSelf: "center",
        fontWeight:"bold"
      },

      touchableTextTop: {
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 11,
        color: "black",
        // paddingRight: 30
        fontWeight:"bold"
      },


    //   destination wala

    destinationBox:{
        width:"100%",
        height:120,
        flexDirection:"row",
        // borderWidth:2,
        // borderColor:"black",
        alignSelf:"center",
        marginBottom: 10,
        backgroundColor:"#F5F5F5",
        paddingLeft: 20,
    },
    destinationText:{
      fontSize:13,
      color:"grey",
      fontWeight:"bold",

    },

    cityText:{
      fontSize:13,
      color:"white",
      fontWeight:"bold",
      paddingLeft:7

    },
    londonText:{
      fontSize:13,
      color:"white",
      fontWeight:"bold",

    },

    dateText:{
      fontSize:11,
      color:"white",
      fontWeight:"bold",
    },

    peopleText:{
      fontSize:13,
      color:"white",
      fontWeight:"bold",
  
    },
   
    destinationImage:{
    // marginVertical:10,marginLeft:10
    marginBottom: 5,
    alignSelf:"center",
    marginLeft: 10,
    },

    yellowCover:{
      backgroundColor:"#FDD835",
      // borderColor:"blue",
      // borderWidth:2,
      flexDirection:"row",
      width:140,
      height:30,
      alignItems:"center",
      // paddingHorizontal:5,
    //  marginLeft:10,
      justifyContent:"space-around",
      borderRadius:5
    },
    whiteCover:{
      // borderColor:"blue",
      // borderWidth:2,
      alignItems:"center"
      // justifyContent:"center",
      // alignSelf:"center"
    },
// DATE BOX
dateBox:{
  width:"100%",
  height:95,
  backgroundColor:"#F5F5F5",
  flexDirection:"row",
  // borderWidth:2,
  // borderColor:"black",
  alignSelf:"center",
  marginBottom: 10,
  paddingLeft: 20,
},

flyOutwhiteCover:{
  // borderColor:"blue",
  // borderWidth:2,
  alignItems:"flex-start",
  justifyContent:"center",
  width:90,
  height:30,
},

flyOutyellowCover:{
  backgroundColor:"#FDD835",
      // borderColor:"blue",
      // borderWidth:2,
      flexDirection:"row",
      width:90,
      height:30,
      alignItems:"center",
      justifyContent:"space-around",
      borderRadius:5,
    paddingHorizontal: 5,
},

adultWhiteCover:{
  // borderColor:"blue",
  // borderWidth:2,
  alignItems:"flex-start",
  justifyContent:"center",
  width:60,
  height:20,
},

adultYellowCover:{
  backgroundColor:"#FDD835",
      // borderColor:"blue",
      // borderWidth:2,
      flexDirection:"row",
      width:60,
      height:30,
      alignItems:"center",
      justifyContent:"space-around",
      borderRadius:5,
    paddingHorizontal: 5,
},



//   navigation bottom

navigationView:{
  width:"100%",
  height:70,
  backgroundColor:"#B22023",
  flexDirection:"row",
  },
  
  touch:{
      height: "100%",
      flex:1,
      // width: 90,
      // borderWidth:2,
      // borderColor:'blue',
      backgroundColor: "#F5F5F5",
      alignSelf: "center",
      // borderWidth:2,
      // borderColor:"black",
      alignItems:"center",
      // borderRadius:50,
  
      justifyContent: "center"
  
  },
  touchableText:{
      color:"#B22023",
      fontSize:10,
      fontWeight:"bold",
      marginTop: 3
  },
  
  adultText:{      fontSize:11,
    color:"grey",
    fontWeight:"bold",
  

  },

  nextDestinationView: {
    width: "100%",
    // height:50,
    // backgroundColor: "white"
    marginVertical: 15,
    paddingLeft:10,
  },

  nextText: {
    fontWeight: "bold",
    color: "#B22023",
    fontSize: 15
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
    borderWidth:1, borderColor:"grey"

},

Addressinput: {
   
  width: "100%",
  backgroundColor: "white",
  color: "black",
height:120,
  paddingHorizontal: 10,
  justifyContent:'center',
  alignSelf:'center',
  // borderWidth:2,
  borderRadius:5,
  borderWidth:1, borderColor:"grey"

},

whiteBox:{
    height: 35,
    width:"100%",
    // backgroundColor: "red",
    // borderWidth:1, 
    // borderColor:"grey",
    // borderRadius:5,
},

AddresswhiteBox:{
  width:"100%",
  height:120,
},

smallwhiteBox:{
    height: 35,
   width:150,
    // backgroundColor: "red",
    // borderWidth:1, 
    // borderColor:"grey",
    // borderRadius:5,
},

smallwhiteBoxWithArrow:{
  height: 35,
 width:150,
  backgroundColor: "white",
  flexDirection:"row",
  // borderWidth:1, 
  // borderColor:"grey",
  // borderRadius:5,
  justifyContent:"space-around",
  borderRadius:5,
    borderWidth:1, borderColor:"grey"
},
smallinput: {
   
    width: "100%",
    backgroundColor: "white",
    color: "black",
  height:35,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignSelf:'center',
    // borderWidth:2,
    borderRadius:5,
    borderWidth:1, borderColor:"grey"
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


},


});
