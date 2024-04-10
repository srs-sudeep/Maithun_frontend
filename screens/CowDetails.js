import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';

const CowDetails = ({ route }) => {
  const { cow } = route.params;

  const handleWhatsApp = () => {
    const phoneNumber = `${cow.phoneNo}`; // Replace with the phone number you want to message
    const message = `Hello, I'm interested in ${cow.name}.`; // Customize the message as needed
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
        <Image source={{ uri: cow.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{cow.name}</Text>
          <Text style={styles.price}>Price: ${cow.price}</Text>
          <Text style={styles.description}>{cow.description}</Text>
          <Text style={styles.vendor}>Vendor : {cow.vendor}</Text>
          <Text style={styles.contact}>Contact : {cow.phoneNo}</Text>
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
      height: 100,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
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
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  vendor: {
    fontSize: 16,
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row', // Align image and text horizontally
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
