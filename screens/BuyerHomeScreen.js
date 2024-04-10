import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 20; // Adjusted card width
const BuyerHomeScreen = ({ navigation }) => {
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
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CowDetails', { cow: item })}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.age}>{item.age} years</Text>
        <Text style={styles.vendor}>{item.vendor}</Text>
        <View style={styles.price}>
          <Text style={styles.priceAmount}>Rs {item.price}</Text>
        </View>
        
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cows}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
  },
  card: {
    position: 'relative',
    flexDirection: 'column',
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: cardWidth,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: '#111',
  },
  age: {
    fontSize: 12, 
    fontFamily: 'Arial',
    color: '#555',
    marginTop: 3,
    marginBottom: 3,  
  },
  price: {
    marginTop: 3,
    marginBottom: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 12,
    marginTop: 3,
    marginBottom: 3,
    fontFamily: 'Arial',
    color: '#111',
  },
  priceAmount: {
    fontSize: 18,
    fontFamily: 'Arial',
    color: '#111',
    fontWeight: 'bold',
  },
  vendor: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: '#555',
    marginTop: 5,
  },
  flatListContent: {
    alignItems: 'center',
  },
});

export default BuyerHomeScreen;
