import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const { width } = Dimensions.get("window");
const cardWidth = width / 2 - 20; // Adjusted card width
import axios from "axios";
const BuyerHomeScreen = ({ navigation }) => {
  const [cows, setCows] = useState([]);

  const cowsData = [
    {
      id: 1,
      name: "10yr Male Long Horn",
      vendor: "Mr. Dorjee",
      phoneNo: "+91 8923493854",
      imageUrl: require("../assets/item_images/gayal1.jpg"),
      price: 100000,
      description: "A lovely dairy cow producing rich milk.",
    },
    {
      id: 2,
      name: "13yr Female Long Horn",
      vendor: "Mr. Lobsang",
      phoneNo: "+91 8369403857",
      imageUrl: require("../assets/item_images/gayal2.jpg"),
      price: 72000,
      description: "A beautiful cow with a gentle disposition.",
    },
    {
      id: 3,
      name: "8yr Male Long Horn",
      vendor: "Mr. Yajum",
      phoneNo: "+91 9823100936",
      imageUrl: require("../assets/item_images/gayal3.jpg"),
      price: 40,
      description: "A spotted cow with a playful attitude.",
    },
    {
      id: 4,
      name: "14yr Male Long Horn",
      vendor: "Mr. Dilip",
      phoneNo: "+91 9857664301",
      imageUrl: require("../assets/item_images/gayal4.jpg"),
      price: 104500,
      description: "A spotted cow with a playful attitude.",
    },
    // Add more cow data as needed
  ];
  const getCows = async()=> {
    try {
      const response = await axios.get("http://10.10.18.76:5000/apis/cows");
      const data = await response.data;
      setCows(data);
    } catch (error) {
      console.error("Error fetching cows:", error);
    }
  }
  useEffect(() => {
    getCows();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("CowDetails", { cow: item })}
    >
      <Image source={require("../assets/item_images/gayal1.jpg")} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Rs {item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cows}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default BuyerHomeScreen;
