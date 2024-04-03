import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProfileScreen = () => {
  // Random user data
  const userData = {
    name: 'Sudeep',
    email: 'sudeep@gmail.com',
    phone: '6372432280',
    address: '123 Main St',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name: {userData.name}</Text>
      <Text style={styles.label}>Email: {userData.email}</Text>
      <Text style={styles.label}>Phone: {userData.phone}</Text>
      <Text style={styles.label}>Address: {userData.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
