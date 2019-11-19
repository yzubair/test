import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image, ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export class MainPage extends React.Component{
render() {
    return (
    <View style={styles.container}>
       {/* image/searc/plan a trip */}

       <View style={styles.mainTop}>
       <ImageBackground
        style={styles.main}
        source= {require('../assets/images/main.png')}>
          {/* <View>
          <Text>hi</Text></View> */}
          <View>
          <View style={styles.searchBox}>
            {/* <Text style={styles.london}>London |</Text> */}
          <TextInput style={styles.searchText} placeholder="London "/>
          <Icon name={"ios-search"} size={30}  color="#B22023"></Icon>

          </View>

          <TouchableOpacity style={styles.planTrip}>
            <Image style={{marginRight: 7,}} source={require('../assets/images/iconplane.png')}>
            </Image>

            <Text style={styles.planTripText}>Plan a trip</Text>
          </TouchableOpacity>
          </View>

        
        </ImageBackground>
       </View>

        {/* Flights/ Food/ ToDo */}

        {/* <ScrollView horizontal={true} > */}
          <View  style={styles.centerView}>
            <ScrollView horizontal={true} >
          <TouchableOpacity>
            <Image style={styles.centerImage}
        source= {require('../assets/images/plane.png')}></Image>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image style={styles.centerImage}
        source= {require('../assets/images/food.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style={styles.centerImage}
        source= {require('../assets/images/todo.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style={styles.centerImage}
        source= {require('../assets/images/plane.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style={styles.centerImage}
        source= {require('../assets/images/plane.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image style={styles.centerImage}
        source= {require('../assets/images/plane.png')}></Image>
            </TouchableOpacity>
             </ScrollView>
</View>
        {/* </ScrollView> */}

{/* Your Next destination 1*/}


<View style={styles.nextDestinationView}>
  <Text style={styles.nextText}> YOU MAY ALSO LIKE!</Text>
</View>
<View style={styles.nextdestination}>
<ScrollView horizontal={true} >
{/* First box start */}
<View style={{marginRight:25}}>

 <View style={styles.nextImage}>
  <ImageBackground  style={styles.bottomImage}
        source= {require('../assets/images/londonEye.jpeg')}>

  </ImageBackground>

</View>

  <View style={styles.nextPrice}>
<Text style={{fontWeight:'bold',marginLeft: 10,}}>Worimi National Park</Text>
<Text  style={{marginLeft: 10,opacity:0.6, fontSize:9}}>London, England</Text>


<View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10}}>
<View style={{flexDirection:"row",paddingTop:13,alignItems:"center"}}>
{/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
<Image style={{width:10,height:10}}source= {require('../assets/images/star.png')}></Image>
<Text style={{fontSize:8,marginLeft: 5,}}>(4.8)</Text>
</View>

<View style={{flexDirection:"row", paddingTop:13}}>
  <Text style={{fontSize:8,paddingRight:4}}>Starting from

  </Text>

  <Text style={{fontSize:8,color:"#B22023",}}>
$120
  </Text>
</View>

</View>



</View>
</View>
  {/* first box ends here */}


  {/* Second box starts here */}
  <View style={{marginRight:25}}>
 <View style={styles.nextImage}>
  <ImageBackground  style={styles.bottomImage}
        source= {require('../assets/images/rocks.jpeg')}>

  </ImageBackground>

</View>

  <View style={styles.nextPrice}>
<Text style={{fontWeight:'bold',marginLeft: 10,}}>Stonehenge</Text>
<Text  style={{marginLeft: 10,opacity:0.6, fontSize:9}}>Salisbury Plain, England</Text>


<View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10}}>
<View style={{flexDirection:"row",paddingTop:13,alignItems:"center"}}>
{/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
<Image style={{width:10,height:10}}source= {require('../assets/images/star.png')}></Image>
<Text style={{fontSize:8,marginLeft: 5,}}>(4.8)</Text>
</View>

<View style={{flexDirection:"row", paddingTop:13}}>
  <Text style={{fontSize:8,paddingRight:4}}>Starting from

  </Text>

  <Text style={{fontSize:8,color:"#B22023",}}>
$120
  </Text>
</View>

</View>



</View>
</View>
  {/* Second Box Ends Here */}

  {/* third box start */}
<View style={{marginRight:25}}>

<View style={styles.nextImage}>
 <ImageBackground  style={styles.bottomImage}
       source= {require('../assets/images/londonEye.jpeg')}>

 </ImageBackground>

</View>

 <View style={styles.nextPrice}>
<Text style={{fontWeight:'bold',marginLeft: 10,}}>Worimi National Park</Text>
<Text  style={{marginLeft: 10,opacity:0.6, fontSize:9}}>London, England</Text>


<View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10}}>
<View style={{flexDirection:"row",paddingTop:13,alignItems:"center"}}>
{/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
<Image style={{width:10,height:10}}source= {require('../assets/images/star.png')}></Image>
<Text style={{fontSize:8,marginLeft: 5,}}>(4.8)</Text>
</View>

<View style={{flexDirection:"row", paddingTop:13}}>
 <Text style={{fontSize:8,paddingRight:4}}>Starting from

 </Text>

 <Text style={{fontSize:8,color:"#B22023",}}>
$120
 </Text>
</View>

</View>



</View>
</View>
 {/* third box ends here */}


  {/* fourth box starts here */}
  <View style={{marginRight:25}}>
 <View style={styles.nextImage}>
  <ImageBackground  style={styles.bottomImage}
        source= {require('../assets/images/rocks.jpeg')}>

  </ImageBackground>

</View>

  <View style={styles.nextPrice}>
<Text style={{fontWeight:'bold',marginLeft: 10,}}>Stonehenge</Text>
<Text  style={{marginLeft: 10,opacity:0.6, fontSize:9}}>Salisbury Plain, England</Text>


<View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10}}>
<View style={{flexDirection:"row",paddingTop:13,alignItems:"center"}}>
{/* <Icon name={"ios-search"} size={15}  color="#B22023"></Icon> */}
<Image style={{width:10,height:10}}source= {require('../assets/images/star.png')}></Image>
<Text style={{fontSize:8,marginLeft: 5,}}>(4.8)</Text>
</View>

<View style={{flexDirection:"row", paddingTop:13}}>
  <Text style={{fontSize:8,paddingRight:4}}>Starting from

  </Text>

  <Text style={{fontSize:8,color:"#B22023",}}>
$120
  </Text>
</View>

</View>



</View>
</View>
  {/* fourth Box Ends Here */}

  </ScrollView>


{/* Lower view is for closing nextdestination */}
</View>


{/* Your Next destination */}

    </View>




  );
}
}

// Navigation
class MyTrips extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green"
        }}
      >
        <Text>Home!</Text>
      </View>
    );
  }
}

class Bookings extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red"
        }}
      >
        <Text>Settings!</Text>
      </View>
    );
  }
}

class Payments extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "aqua"
        }}
      >
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  HOME: MainPage,
  "MY TRIPS": MyTrips,
  BOOKINGS: Bookings,
  PAYMENTS: Payments,
  // navigationOptions:{
  //   tabBarLabel: "label",
  //   tabBarIcon:({tintColor})=> (
  //     <Icon name={"ios-arrow-round-back"} size={40} color={tintColor}></Icon>
  //   )
  // }
});

export default createAppContainer(TabNavigator);

// StyleSheet
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'yellow',
    // alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'flex-start',
    width:'95%',
    height:'100%',
    marginTop:10
  },

  mainTop:{
    width:'100%',
    height:250,
    borderRadius:50,
    // borderWidth:1,
    backgroundColor:'white'
  },
main:{
  width:'100%',
  height:'100%',
  borderRadius:50,
  justifyContent:"center"

},
searchBox:{
  flexDirection:"row",
  width:200,
  height:40,
  backgroundColor:"white",
  justifyContent:'space-between',
  alignSelf:'center',
  alignItems:'center',
  // top:'20%',
  borderRadius:50,
  paddingHorizontal:10,
  marginTop:40,
  borderWidth:2,
  borderColor:"grey"
},

london:{
fontSize:15,
fontWeight:"bold",
opacity:0.5
},
searchText:{
  justifyContent:'flex-start',
  // backgroundColor:"red",
  width:150,
  height:35,
  fontWeight:"bold",
},
planTrip:{
  width:120,
  height:40,
  backgroundColor:"#B22023",
  borderRadius:50,
  flexDirection:"row",
  alignSelf:"center",
  marginTop:5,
  justifyContent:"center",
  alignItems:"center"

},

planTripText:{
  color:"white",
  fontWeight:"bold"
},
// text:{
//   fontSize:40,
//   color:'red',
//   justifyContent:'center',
//   top:40,
// }

// Center View

centerView:{
  width:"100%",
  height:100,
  backgroundColor:"white",
  marginTop:20,
  marginBottom: 10,
  flexDirection:"row",
  alignItems:"center"

},
centerImage:{
  height:100,
  width:100,
  marginRight: 9,
  // backgroundColor:"green"
},
// scroll:{
//   width:"100%",
//   height:"10%",
//   backgroundColor:"red"
// }

// Next DESTINATION
nextdestination:{
  alignSelf:"center",
  width:"100%",
  height:190,
  backgroundColor:"white",
  // borderWidth: 4,
  // borderColor:"black",
  // bottom:50,
  flexDirection:"row"

},

nextDestinationView:{  width:'100%',
// height:50,
backgroundColor:"white"


},

nextText:{
fontWeight:"bold",
color: "#B22023",
fontSize:15

},
bottomImage:{
  width:'100%',
  height:'100%',
  borderRadius:50,
  // justifyContent:"center",
  // alignSelf:"center",
  // alignItems:"center"
  marginTop:20
},

nextImage:{
  width :220,
  height:120,
  // backgroundColor:'green',
  justifyContent:"center"


},

nextPrice:{
  width:180,
  height:80,
  backgroundColor:'white',
  borderRadius:30,
  marginLeft:25,
  bottom:38,
  justifyContent:"center",
  // marginLeft: 5,
  shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2

}
});
