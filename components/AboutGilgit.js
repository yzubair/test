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
import MapView from 'react-native-maps';
import { Rating, AirbnbRating } from 'react-native-ratings';

// const WATER_IMAGE = require('../assets/images/gilgit/gilgit.jpg')
 


export default class AboutGilgit extends React.Component {
    state={
      about:true,
      photos:false,
      reviews:false,

    }
    // ratingCompleted(rating) {
    //   console.log("Rating is: " + rating)
    // }

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

        <View style={styles.mainTop}>
          <ImageBackground
            style={{ width: "100%", height: 250 }}
            source={{uri: 'https://1.bp.blogspot.com/-_8fVzdTqx3w/WT1HO5_k7VI/AAAAAAAAAdI/1MpUMutM-GwSxR89Ywxkl0jqIGd1a7SVwCLcB/s1600/40.jpg'}}
        
          >
            <View style={{flexDirection:"row", width:"98%", justifyContent:"space-between", top:9, alignItems:"center"}}>
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
<TouchableOpacity>
<Icon
                name="md-share"
                size={35} color="white"></Icon>

</TouchableOpacity>
</View>
          </ImageBackground>
        </View>

        {/* about/photos/review */}
        <View style={styles.aboutWholeView}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ about: true, photos: false, reviews: false });
            }}
            style={this.state.about==true ? styles.aboutTagSelected : styles.aboutTag}
          >
            <Text 
            style={this.state.about==true?  styles.aboutTextSelected : styles.aboutText}
            
            >About</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({ about: false, photos: true, reviews: false });
            }}
            style={this.state.photos==true ? styles.aboutTagSelected : styles.aboutTag}
          >
            <Text style={this.state.photos==true? styles.aboutTextSelected : styles.aboutText}>Photos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({ about: false, photos: false, reviews: true });
            }}
            style={this.state.reviews==true? styles.aboutTagSelected: styles.aboutTag}
          >
            <Text style={this.state.reviews==true? styles.aboutTextSelected : styles.aboutText}>Reviews</Text>
          </TouchableOpacity>
        </View>
        {/* final view below */}
        {this.AboutView()}
        {this.PhotosView()}
        {this.ReviewsView()}
      </View>
    );
  }

  AboutView() {
        if(this.state.about==true)
        return <View style={{ width:"100%",height:"100%" }}>
<View style={styles.placeAndStarsView}
>
   <View><Text style={styles.gilgitText}>Gilgit Baltistan</Text></View>
   <View style={{flexDirection:"row", marginTop:5}}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       <Image
                      style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                       style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                      style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                      style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>




   </View>
   <View style={{alignItems:"center"}}><Text style={{paddingLeft:10, fontSize:15, fontWeight:"500"}}>(5.0)</Text></View>
   </View>



</View>
<ScrollView style={styles.ScrollView}>
    <Text style={styles.longPara}>
    Gilgit-Baltistan is part of the greater Kashmir region, which is the subject of a long-running conflict between Pakistan and India. The territory shares a border with Azad Kashmir, together with which it is referred to by the United Nations and other international organisations as "Pakistan administered Kashmir".Gilgit-Baltistan is six times the size of Azad Kashmir.
    </Text>
    <MapView style={styles.mapStyle} />
    
    <View style={styles.locationNAmeAndIcon}>

    <Icon
                name="ios-pin"
                size={30} color="#b31f24"></Icon>
      <Text style={styles.locationText}>Skardo, Pak China Border, Gilgit Baltistan Pakistan</Text>
    </View>

</ScrollView>
        </View>;
    }

    PhotosView()
     {
        if(this.state.photos==true)
        return  <View  style={styles.wholeViewBelowAboutPhotosReviews}>
<ScrollView > 
<View style={styles.photoTextView}>
  <Text style={styles.photosText}>Photos</Text>
</View>
{/* images whole view */}
<View style={styles.photosView}>
{/* 3 pictures in row View */}
<View style={styles.threeImagesViewRow}>
<Image
            style={styles.singleImage} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-LrXAH7DIAAe0JvJT5JvrOiL8o5bY89c-xfQZfJjo6jxdvKKx'}}
          ></Image>

<Image
            style={styles.singleImage} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTm6I9AXBTe9uUhFDaYQ_2b6c51rMi8wzBS03aaei2AHgLUfhDP'}}
          ></Image>

<Image
           style={styles.singleImage} 
           source={{uri: 'https://q-xx.bstatic.com/xdata/images/hotel/270x200/183223496.jpg?k=4089131eacf35bd7c88942c300c9384c7d299b5f8a00562353b975db770e0792&o='}}
          ></Image>
</View>
{/* <3 images view end */}


{/* 3 pictures in row View */}
<View style={styles.threeImagesViewRow}>
<Image
            style={styles.singleImage} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5JosCdB7V5awn1VrguwWLLUs3fXtMJagC-hVTFMWun3vQBOkD'}}
          ></Image>

<Image
            style={styles.singleImage} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn1tCTiONswuFQYpHFH4n4ktJp4sl1ZH01MmuhHA7YVDtsm1g1'}}
          ></Image>

<Image
           style={styles.singleImage} 
           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmYPIipAxhJ54K0SrYf-gOuiovkMjfV65ayvOK13xkzdMSshXK'}}
          ></Image>
</View>
{/* <3 images view end */}

{/* 3 pictures in row View */}
<View style={styles.threeImagesViewRow}>
<Image
            style={styles.singleImage} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6bfDExvAWGiA6BvLvQlG-KOVyqssgvCC_nvciaOAsFeWG32K5'}}
          ></Image>

<Image
            style={styles.singleImage} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6yvlNekjID4Vinvmp96rhIITtRI7EpzfyHyL_QSEn9RQ10EPP'}}
          ></Image>

<Image
           style={styles.singleImage} 
           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScH9JXbr2svU_ljMxolTtLahmZe-Lm9uMI1QJYfKqyAgbhGFdi'}}
          ></Image>
</View>
{/* <3 images view end */}

{/* 3 pictures in row View */}
<View style={styles.threeImagesViewRow}>
<Image
            style={styles.singleImage} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4ytdp1mAd-ddKBv7ZQMTWwlORYt3mhLujWkvI_cBLhILDchuS'}}
          ></Image>

<Image
            style={styles.singleImage} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMAT45e77OG1XO2AzU-0QGuotuo1cqLuIDZg0qHvy57BVpWscL'}}
          ></Image>

<Image
           style={styles.singleImage} 
           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhn9uLF6g29UsFmcpNByte_za0LJZcdaIEX67VjU3giEE7VgzD'}}
          ></Image>
</View>
{/* <3 images view end */}

{/* images whole view  end below */}
</View>
 </ScrollView>
        </View>
        ;
    }
    ReviewsView() {
        if(this.state.reviews==true)
        return  <View  style={styles.wholeViewForReviews}>
          <ScrollView >
<View style={styles.reviewsAndStarsView}
>
   <View><Text style={styles.gilgitText}>Reviews</Text></View>
   <View style={{flexDirection:"row"}}> 
   {/* by adding margintop 5 we can make space between the writing  REVIEWS and stars */}
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       <Image
                      style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                       style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                      style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                      style={{ width: 15, height: 15 }}
                      source={require("../assets/images/star.png")}
                    ></Image>




   </View>
   <View style={{alignItems:"center"}}><Text style={{paddingLeft:10, fontSize:15, fontWeight:"500"}}>(5.0)</Text></View>
   </View>
   <View>
{/* Rating start */}
{/* <View style={{}}> */}
{/* <AirbnbRating 
type='custom'
imageSize="10"
starContainerStyle={{ratingColor:"green"}}
reviews= ""
/> */}
{/* </View> */}
 
 {/* <AirbnbRating
   count={11}
   reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
   defaultRating={11}
   size={20}
   starContainerStyle={{ratingBackgroundColor:"green"}}
 /> */}
  
 {/* <Rating
   showRating
   onFinishRating={this.ratingCompleted}
   style={{ paddingVertical: 10 }}
 /> */}
  
 {/* <Rating
   type='heart'
   ratingCount={3}
   imageSize={60}
   showRating
   onFinishRating={this.ratingCompleted}
 /> */}
  
 {/* <Rating
   type='custom'
  //  ratingImage={WATER_IMAGE}
   ratingColor='#3498db'
   ratingBackgroundColor='#c8c7c8'
   ratingCount={10}
   imageSize={30}
   onFinishRating={this.ratingCompleted}
   style={{ paddingVertical: 10 }}
 /> */}

{/* rating end */}
   </View>
</View>

<View style={styles.travellerRating}>
  <Text style={styles.travellerText}>Traveller Rating</Text>
</View>

{/* completion barStyle = 'light-content' */}
<View style={styles.excellentBarStarWholeView}>
  <View style={styles.excellentView}><Text style={styles.excellentText}>Excellent</Text></View>
  <View style={styles.barView}>
  <View style={{width :"100%", height:15, backgroundColor:"#E0E0E0", borderRadius:50}}>
    <View style={{width:"90%", height:15, backgroundColor:"#b31f24", borderRadius:50}}></View>
  </View>
  </View>
{/* stars view and rating  */}
   <View style={styles.starsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                     style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>





   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:11, fontWeight:"500"}}>(4.5)</Text></View>
   </View>


</View>
{/* bar end single  */}
{/* completion barStyle */}
<View style={styles.excellentBarStarWholeView}>
  <View style={styles.excellentView}><Text style={styles.excellentText}>Very Good</Text></View>
  <View style={styles.barView}>
  <View style={{width :"100%", height:15, backgroundColor:"#E0E0E0", borderRadius:50}}>
    <View style={{width:"80%", height:15, backgroundColor:"#b31f24", borderRadius:50}}></View>
  </View>
  </View>
{/* stars view and rating  */}
   <View style={styles.starsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                     style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>





   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:11, fontWeight:"500"}}>(4.0)</Text></View>
   </View>


</View>
{/* bar end single  */}

{/* completion barStyle = 'light-content' */}
<View style={styles.excellentBarStarWholeView}>
<View style={styles.excellentView}><Text style={styles.excellentText}>Good</Text></View>
<View style={styles.barView}>
  <View style={{width :"100%", height:15, backgroundColor:"#E0E0E0", borderRadius:50}}>
    <View style={{width:"70%", height:15, backgroundColor:"#b31f24", borderRadius:50}}></View>
  </View>
  </View>
{/* stars view and rating  */}
   <View style={styles.starsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                     style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>






   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:11, fontWeight:"500"}}>(3.5)</Text></View>
   </View>


</View>
{/* bar end single  */}

{/* completion barStyle = 'light-content' */}
<View style={styles.excellentBarStarWholeView}>
<View style={styles.excellentView}>
  <Text style={styles.excellentText}>Average</Text></View>
  <View style={styles.barView}>
  <View style={{width :"100%", height:15, backgroundColor:"#E0E0E0", borderRadius:50}}>
    <View style={{width:"50%", height:15, backgroundColor:"#b31f24", borderRadius:50}}></View>
  </View>
  </View>
{/* stars view and rating  */}
  <View style={styles.starsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

 

<Image
                     style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>





   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:11, fontWeight:"500"}}>(2.3)</Text></View>
   </View>


</View>
{/* bar end single  */}

{/* completion barStyle = 'light-content' */}
<View style={styles.excellentBarStarWholeView}>
<View style={styles.excellentView}>
  <Text style={styles.excellentText}>Poor</Text></View>
  <View style={styles.barView}>
  <View style={{width :"100%", height:15, backgroundColor:"#E0E0E0", borderRadius:50}}>
    <View style={{width:"30%", height:15, backgroundColor:"#b31f24", borderRadius:50}}></View>
  </View>
  </View>
{/* stars view and rating  */}
   <View style={styles.starsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

      

<Image
                       style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>





   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:11, fontWeight:"500"}}>(1.3)</Text></View>
   </View>


</View>
{/* bar end single  */}

{/* completion barStyle = 'light-content' */}
<View style={styles.excellentBarStarWholeView}>
<View style={styles.excellentView}>
  <Text style={styles.excellentText}>Bad</Text></View>
  <View style={styles.barView}>
  <View style={{width :"100%", height:15, backgroundColor:"#E0E0E0", borderRadius:50}}>
    <View style={{width:"0%", height:15, backgroundColor:"#b31f24", borderRadius:50}}></View>
  </View>
  </View>
{/* stars view and rating  */}
   <View style={styles.starsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       {/* <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                     style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image> */}





   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:11, fontWeight:"500", paddingRight:5}}>(0)</Text></View>
   </View>


</View>
{/* bar end single  */}

<View style={styles.travellerRating}>
  <Text style={styles.travellerText}>Traveller Reviews</Text>
</View>

{/* traveller reviews and comments  */}
<View style={styles.travellerReviewEholeView}>
<View style={styles.travellerIamge}>
<Image
            style={{width:50, height:50,borderRadius:25,  resizeMode:"contain"}} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtLshdHLStDsu_0-5vg-JdOGLJESSkigMsTkJv6C6tnEPA4dh3'}}
          ></Image>
</View>


<View style={{width:"80%"}}>
{/* View for stars and date  */}
   <View style={styles.commentsStarsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                     style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>





   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:8, fontWeight:"bold", paddingLeft:10}}>12 Oct 2019</Text></View>
   </View>

   {/* view for traveller comments  */}
   <View style={styles.commentsView}>
     <Text style={styles.commentsText}>
       I visited the beautiful Fairy Meadows of the Gilgit Baltistan with my family this Summer.
        {/* I coudn,t belive when I first saw the real beauty of nature so close....! */}
     </Text>
   </View>


</View>


</View>

{/* traveller reviews and comments  */}
<View style={styles.travellerReviewEholeView}>
<View style={styles.travellerIamge}>
<Image
            style={{width:50, height:50,borderRadius:25,  resizeMode:"contain"}} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtLshdHLStDsu_0-5vg-JdOGLJESSkigMsTkJv6C6tnEPA4dh3'}}
          ></Image>
</View>


<View style={{width:"80%"}}>
{/* View for stars and date  */}
   <View style={styles.commentsStarsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                     style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>





   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:8, fontWeight:"bold", paddingLeft:10}}>12 Oct 2019</Text></View>
   </View>

   {/* view for traveller comments  */}
   <View style={styles.commentsView}>
     <Text style={styles.commentsText}>
     What a stunning view !!! Beauty at its best…!!!
        I coudn,t belive when I first saw the real beauty of nature so close....!
     </Text>
   </View>


</View>


</View>


{/* traveller 3 reviews and comments  */}
<View style={styles.travellerReviewEholeView}>
<View style={styles.travellerIamge}>
<Image
            style={{width:50, height:50,borderRadius:25,  resizeMode:"contain"}} 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtLshdHLStDsu_0-5vg-JdOGLJESSkigMsTkJv6C6tnEPA4dh3'}}
            
          ></Image>
</View>


<View style={{width:"80%"}}>
{/* View for stars and date  */}
   <View style={styles.commentsStarsView}> 
   <View style={{flexDirection:"row", alignItems:"center"}}>
       {/* <Text>j</Text> */}

       <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
                    <Image
                      style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                     style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>
<Image
                       style={{ width: 10, height: 10 }}
                      source={require("../assets/images/star.png")}
                    ></Image>





   </View>
   <View style={{alignItems:"center"}}><Text style={{ fontSize:8, fontWeight:"bold", paddingLeft:10}}>12 Oct 2019</Text></View>
   </View>

   {/* view for traveller comments  */}
   <View style={styles.commentsView}>
     <Text style={styles.commentsText}>
       I visited the beautiful Fairy Meadows of the Gilgit Baltistan with my family this Summer.
        {/* I coudn,t belive when I first saw the real beauty of nature so close....! */}
     </Text>
   </View>


</View>


</View>

</ScrollView>
<TouchableOpacity style={{width:"100%", height:35, flexDirection:"row", alignItems:"center",}}
            onPress={() => {
              this.props.navigation.navigate("Write Review");
            }}>
<Icon
                name="ios-create"
                size={20} color="#b31f24"></Icon>
  <Text style={{color:"#b31f24",fontSize:13, fontWeight:"600", paddingLeft:10}}>Write a Review</Text>
</TouchableOpacity>

{/* end view below  */}
          </View>
          
    }
}

const styles = StyleSheet.create({






  travellerIamge:{
    width:"20%",
    // height:60,
    // borderRadius:50,
    // borderRadius:90,
    justifyContent:"center"
  }
,
starsView:{flexDirection:"row", width:"25%", justifyContent:"space-between"}
,
commentsStarsView:{flexDirection:"row", width:"100%",marginVertical:5},

commentsView:{ width:"100%",
},

commentsText:{
fontWeight:"bold", fontSize:10, textAlign:"justify", color:"#404040"
},


  barView:{width:"50%", borderWidth:2, borderRadius:50, borderColor:"#ebebeb"}
,
excellentView:{width:"17%",}
  ,
excellentBarStarWholeView: 
{width:"100%",height:30, flexDirection:"row", alignSelf:"center", alignItems:"center", justifyContent:"space-between"}
,
  travellerReviewEholeView:{
    width:"100%",
    // height:60,
    // borderWidth:1,
    flexDirection:"row",
    marginBottom: 10,
  }
,
travellerText:{
  fontSize:13,
  fontWeight:"bold", color:"#b31f24"
}
  ,
travellerRating:{
  width:"100%", height:30, justifyContent:"center", alignSelf:"center"
}
  ,

  excellentText:{
    color:"#ffc619",
    fontSize:10,
    fontWeight:"600",
  }
  ,
  singleImage:{
    width: "31.5%", height: "100%"
  },


  threeImagesViewRow:{
width:"100%",
height:100,
// borderWidth:1,
flexDirection:"row",
justifyContent:"space-between",
marginBottom: 10,
  },

photosView:{
  // backgroundColor:"pink",
  width:"100%",
  // borderWidth:1,
  height:"100%"
  
}
  ,

  photosText:{
    fontSize:17,
    fontWeight:"bold"
  }
  
  ,

photoTextView:{ width:"100%", height:45,
//  borderWidth:1,
// backgroundColor:"grey",
// alignItems:"center",
justifyContent:"center"}
  ,

  wholeViewBelowAboutPhotosReviews:{
    width:"95%",height:375, justifyContent:"center",alignSelf:"center"} ,

    wholeViewForReviews:{
      width:"95%",height:380, alignSelf:"center",} ,
  

  placeAndStarsView:{
    width:"95%", height:70, justifyContent:"center",alignSelf:"center"}
  ,

  reviewsAndStarsView:{
    width:"100%", height:50, justifyContent:"center", alignSelf:"center",
  }
  ,
  locationText:{
    color:"#404040",
    marginLeft:10,
    fontSize:13
  }
  ,
  locationNAmeAndIcon:{
    flexDirection:"row",
    alignItems:"center"
  }
  ,
  mapStyle: {
    width: "100%",
    height: 130,
    marginVertical:10
  },

longPara:{
    textAlign:"justify",
    fontSize:12,
    fontWeight:"400"
}
    ,
    ScrollView:{width:"95%", alignSelf:"center"},
  container: {
    // flex: 1,
    // backgroundColor: 'yellow',
    // alignItems: 'center',
    alignSelf: "center",
    // justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    // marginVertical: 10
  },
  arrow: {
    justifyContent: "flex-start"
    // paddingRight: 50
  },
  mainTop: {
    width: "100%",
    height: 250,
    // borderRadius: 50,
    //   borderWidth:1,
    // backgroundColor: "yellow"
  },
  aboutWholeView: {
    width: "95%",
    height: 40,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignSelf:"center"
  },
  aboutTagSelected: {
    width: "27%",
    height: 40,
    borderBottomWidth: 3,
    borderBottomColor: "#b31f24",
    justifyContent: "center",
    alignItems: "center"
  },
  aboutTag: {
    width: "27%",
    height: 40,
    // borderBottomWidth:2,
    // borderBottomColor: "#b31f24",
    justifyContent: "center",
    alignItems: "center"
  },

  aboutTextSelected: {
    fontSize: 15,
    fontWeight: "700",
    color: "#b31f24",
    alignSelf: "center"
  },
  aboutText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#404040",
    alignSelf: "center"
  },
  gilgitText:{
      fontSize:17,
      fontWeight:"bold",
    //   alignSelf:"center"
  }
});
