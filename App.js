import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import BuyerProfileScreen from "./screens/BuyerProfileScreen";
import SellerProfileScreen from "./screens/SellerProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/BuyerHomeScreen";  
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import CowDetails from "./screens/CowDetails";
import SellerHomeScreen from './screens/SellerHomeScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import axios from "axios";
import navigation from "@react-navigation/native";
import handleLogout from "./components/Logout";
// const handleLogout = async () => {
//   try {
//     // Make a GET request to your logout API endpoint
//     const response = await axios.get('http://10.10.18.178:5000/apis/users/logout');
//     // Assuming the logout was successful, navigate to the login screen
//     navigation.navigate('Login');
//   } catch (error) {
//     console.error('Error logging out:', error);
//     // Handle errors if logout fails
//   }
// };
function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Redirect to the Login screen after 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.jpg")} style={styles.logo} />
    </View>
  );
}
const AuthStack = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

const BuyerAppStack = () => (
  <Drawer.Navigator initialRouteName="BuyerHomeScreen">
    <Drawer.Screen name="BuyerHomeScreen" component={HomeScreen} />
    <Drawer.Screen name="BuyerProfileScreen" component={BuyerProfileScreen} />
  </Drawer.Navigator>
);
const SellerAppStack = ({logout}) => (
  <Drawer.Navigator initialRouteName="SellerHomeScreen" drawerContent={props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={handleLogout} />
      </DrawerContentScrollView>
    )
  }}>
    <Drawer.Screen name="SellerHomeScreen" component={SellerHomeScreen}/>
    <Drawer.Screen name="SellerProfileScreen" component={SellerProfileScreen} />
  </Drawer.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="BuyerApp" component={BuyerAppStack} />
        <Stack.Screen name="SellerApp" component={SellerAppStack} />
        <Stack.Screen name="CowDetails" component={CowDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
