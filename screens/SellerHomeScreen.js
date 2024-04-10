import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const SellerHomeScreen = ({ navigation }) => {
  const [cows, setCows] = useState([]);

  //   useEffect(() => {
  //     // Fetch cow data from API
  //     fetch('https://jsonplaceholder.typicode.com/photos?_limit=10') // Example API, replace with your own
  //       .then(response => response.json())e
  //       .then(data => setCows(data))
  //       .catch(error => console.error('Error fetching cows:', error));
  //   }, []);
  // useEffect(()=>{
  //   try{
  //     const cowsData = await axios.get("http://10.10.17.85:5000/apis/")
  //   }
  // })
  const cowsData = [
    {
      id: 1,
      name: "10yr Male Long Horn",
      vendor: "Mr. Dorjee",
      phoneNo: "+91 9693266654",
      imageUrl: "../assets/item_images/gayal1.jpg",
      price: 100000,
      description: "A lovely dairy cow producing rich milk.",
    },
    // {
    //   id: 2,
    //   name: '13yr Female Long Horn',
    //   vendor: 'Mr. Lobsang',
    //   phoneNo: '+91 8369403857',
    //   imageUrl: require('../assets/item_images/gayal2.jpg'),
    //   price: 72000,
    //   description: 'A beautiful cow with a gentle disposition.',
    // },
    // {
    //   id: 3,
    //   name: '8yr Male Long Horn',
    //   vendor: 'Mr. Yajum',
    //   phoneNo: '+91 9823100936',
    //   imageUrl: require('../assets/item_images/gayal3.jpg'),
    //   price: 80000,
    //   description: 'A spotted cow with a playful attitude.',
    // },
    // {
    //   id: 4,
    //   name: '14yr Male Long Horn',
    //   vendor: 'Mr. Dilip',
    //   phoneNo: '+91 9857664301',
    //   imageUrl: require('../assets/item_images/gayal4.jpg'),
    //   price: 104500,
    //   description: 'A spotted cow with a playful attitude.',
    // },
    // Add more cow data as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("CowDetails", { cow: item })}
    >
      <Image
        source={require("../assets/item_images/gayal1.jpg")}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Rs.{item.price}</Text>
        {/* Example price, replace with actual data */}
        <Text style={styles.description}>
        {item.description}
        </Text>
        {/* Example description, replace with actual data */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cowsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
  },
  cardContent: {
    // flex: 1,
    flexDirection:"column",
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    width: 200,
    color: "#666",
  },
});

export default SellerHomeScreen;
