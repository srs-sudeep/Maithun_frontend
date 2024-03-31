import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [cows, setCows] = useState([]);

//   useEffect(() => {
//     // Fetch cow data from API
//     fetch('https://jsonplaceholder.typicode.com/photos?_limit=10') // Example API, replace with your own
//       .then(response => response.json())
//       .then(data => setCows(data))
//       .catch(error => console.error('Error fetching cows:', error));
//   }, []);
const cowsData = [
    {
      id: 1,
      name: 'Bessie',
      imageUrl: 'https://example.com/cow1.jpg',
      price: 500,
      description: 'A lovely dairy cow producing rich milk.',
    },
    {
      id: 2,
      name: 'MooMoo',
      imageUrl: 'https://example.com/cow2.jpg',
      price: 700,
      description: 'A beautiful cow with a gentle disposition.',
    },
    {
      id: 3,
      name: 'Spot',
      imageUrl: 'https://example.com/cow3.jpg',
      price: 600,
      description: 'A spotted cow with a playful attitude.',
    },
    {
        id: 4,
        name: 'Spot',
        imageUrl: 'https://example.com/cow3.jpg',
        price: 600,
        description: 'A spotted cow with a playful attitude.',
      },
    // Add more cow data as needed
  ];
  

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CowDetails', { cow: item })}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <Text style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>$20</Text> {/* Example price, replace with actual data */}
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text> {/* Example description, replace with actual data */}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cowsData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
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
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
