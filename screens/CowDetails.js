import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons for the back button

const CowDetails = ({ route }) => {
  const { cow } = route.params;

  const handleWhatsApp = () => {
    const phoneNumber = `${cow.phoneNo}`;
    const message = `Hello, I'm interested in ${cow.name}.`;
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened", data);
      })
      .catch(() => {
        Alert.alert("Make sure WhatsApp is installed on your device");
      });
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity> */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{cow.name}</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../assets/item_images/gayal1.jpg")}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{cow.name}</Text>
          <Text style={styles.price}>Rs. {cow.price}</Text>
          <Text style={styles.description}>{cow.description}</Text>
          <Text style={styles.gender}>{cow.gender ? "Female" : "Male"}</Text>
          <Text style={styles.hornSize}>Horn Size: {cow.hornSize}</Text>
          <Text style={styles.vendor}>Vendor: {cow.vendor}</Text>
          <Text style={styles.contact}>Contact: {cow.phoneNo}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
        <Image
          source={require("../assets/whatsapp.jpeg")}
          style={styles.whatsappLogo}
        />
        <Text style={styles.whatsappButtonText}>WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#00cc7a",
    paddingVertical: 8,
    alignItems: "center",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    width: "100%", // Make the card cover the entire width
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  vendor: {
    fontSize: 14,
    marginBottom: 5,
    color: "grey",
  },
  contact: {
    fontSize: 14,
    color: "grey",
  },
  whatsappButton: {
    backgroundColor: "#00cc7a",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  whatsappLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  whatsappButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CowDetails;
