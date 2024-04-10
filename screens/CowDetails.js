import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Cow_DetailStack = () => (
  <Drawer.Navigator initialRouteName="CowDetails">
    <Drawer.Screen name="Buy Cows" component={BuyerHomeScreen} />
    <Drawer.Screen name="Buyer Profile" component={BuyerProfileScreen} />
  </Drawer.Navigator>
);

const CowDetails = ({ route }) => {
  const { cow } = route.params;

  const handleWhatsApp = () => {
    const phoneNumber = `${cow.phoneNo}`;
    const message = `Hello, I'm interested in ${cow.name}.`;
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure WhatsApp is installed on your device');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../assets/item_images/gayal1.jpg")} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{cow.name}</Text>
          <Text style={styles.price}>Rs. {cow.price}</Text>
          <Text style={styles.description}>{cow.description}</Text>
          <Text style={styles.vendor}>Vendor: {cow.vendor}</Text>
          <Text style={styles.contact}>Contact: {cow.phoneNo}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
        <Image source={require('../assets/whatsapp.jpeg')} style={styles.whatsappLogo} />
        <Text style={styles.whatsappButtonText}>WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    width: '100%', // Make the card cover the entire width
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  vendor: {
    fontSize: 14,
    marginBottom: 5,
    color: 'grey',
  },
  contact: {
    fontSize: 14,
    color: 'grey',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  whatsappLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  whatsappButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CowDetails;
