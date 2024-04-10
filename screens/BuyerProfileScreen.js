import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BuyerProfileScreen = () => {
  // Random user data
  const userData = {
    name: 'Sudeep',
    email: 'sudeep@gmail.com',
    phone: '6372432280',
    address: '123 Main St',
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={[styles.label, styles.bold]}>Email:</Text>
        <Text style={styles.labelValue}>{userData.email}</Text>
        <Text style={[styles.label, styles.bold]}>Phone:</Text>
        <Text style={styles.labelValue}>{userData.phone}</Text>
        <Text style={[styles.label, styles.bold]}>Address:</Text>
        <Text style={styles.labelValue}>{userData.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // To position the card at the top
    paddingHorizontal: 20, // Padding for the sides
    backgroundColor: '#f0f0f0', // Background color for the screen
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%', // Cover the entire screen horizontally
    elevation: 3,
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 1,
  },
  labelValue: {
    fontSize: 15,
    marginBottom: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default BuyerProfileScreen;
