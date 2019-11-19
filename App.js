import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FrontPage from "./components/FrontPage";
import RoundTrip from "./components/RoundTrip";
import LoadingPage from "./components/LoadingPage";
import YourProfile from "./components/YourProfile";
import CompletedTrips from "./components/CompletedTrips";
import CancelledTrips from "./components/CancelledTrips"
import PassengerInfo from "./components/PassengerInfo";
import Flights from "./components/Flights";
import Reservation from "./components/Reservation";
import AboutGilgit from "./components/AboutGilgit";
import WriteReview from "./components/WriteReview";
import GilgitFrontPage from "./components/GilgitFrontPage";
import Yasir from "./components/Yasir";
import BottomNavigation from "./components/Explore/BottomNavigation";


// export function App() {
//   return (
//     <View style={styles.container}>
//       <Copy />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     width: "100%",
//     height: "100%"
//   }
// });


const AppNavigator = createStackNavigator(
  {


    "Flights":Flights,
    "Main Page": FrontPage,
    "Loading Page": LoadingPage,
    "Round Trip": RoundTrip,
   
    "Gilgit Front Page":GilgitFrontPage,
    // "Nested Scroll View":Yasir,
    // "Gilgit Front Page":GilgitFrontPage,
    "About Gilgit": AboutGilgit,
    "Write Review":WriteReview,
    
    // "MultiCity": MultiCity,
    // "Round Trip": RoundTrip,
    // "Flights":Flights,
    // "Main Page": FrontPage,
    // "Round Trip": RoundTrip,
    // "One Way": OneWay,
    // "Round Trip": RoundTrip,
    // "MultiCity": MultiCity,
    // "Loading Page": LoadingPage,
    "Your Profile":YourProfile,
    "Completed Trips":CompletedTrips,
    "Cancelled Trips":CancelledTrips,
    "Passenger Info":PassengerInfo,
    
    "Reservation Completed":Reservation,
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
