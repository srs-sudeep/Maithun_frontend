import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import BuyerProfileScreen from "./screens/BuyerProfileScreen";
import SellerProfileScreen from "./screens/SellerProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import CowDetails from "./screens/CowDetails";
import SellerHomeScreen from "./screens/SellerHomeScreen";
import BuyerHomeScreen from "./screens/BuyerHomeScreen";
import axios from "axios";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BuyerAppStack = () => (
  <Drawer.Navigator
    initialRouteName="BuyerHomeScreen"
    drawerContent={(props) => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={handleLogout} />
        </DrawerContentScrollView>
      );
    }}
  >
    <Drawer.Screen
      name="Buycows"
      options={{
        title: "My home",
        headerStyle: {
          backgroundColor: "#25D366",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      component={BuyerHomeScreen}
    />
    <Drawer.Screen
      name="Buyerprofile"
      options={{
        title: "My Profile",
        headerStyle: {
          backgroundColor: "#25D366",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      component={BuyerProfileScreen}
    />
  </Drawer.Navigator>
);
const SellerAppStack = ({ logout }) => (
  <Drawer.Navigator
    initialRouteName="SellerHomeScreen"
    drawerContent={(props) => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={handleLogout} />
        </DrawerContentScrollView>
      );
    }}
  >
    <Drawer.Screen name="SellerHomeScreen" component={SellerHomeScreen} />
    <Drawer.Screen name="SellerProfileScreen" component={SellerProfileScreen} />
  </Drawer.Navigator>
);

const handleLogout = async () => {
  const navigation = useNavigation();
  console.log("heloo");
  try {
    const response = await axios.get(
      "http://10.10.18.76:5000/apis/users/logout"
    );
    if (response.message === "Logout Successful") {
      console.log("Logout");
      navigation.navigate("Login");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" options={{ headerShown: false }}>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BuyerApp"
          component={BuyerAppStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SellerApp"
          component={SellerAppStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CowDetails"
          component={CowDetails}
          options={{
            title: "Cow Details",
            headerStyle: {
              backgroundColor: "#25D366",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
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
