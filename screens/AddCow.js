import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const AddCow = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hornSize, setHornSize] = useState("");
  const [description, setDescription] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const handleAddCow = () => {
    // Add cow logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Cow Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter cow name"
        />
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Enter age"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Horn Size</Text>
        <TextInput
          style={styles.input}
          value={hornSize}
          onChangeText={setHornSize}
          placeholder="Enter horn size"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Image</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter Image URL"
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
          multiline
        />
        <Text style={styles.label}>Selling Price</Text>
        <TextInput
          style={styles.input}
          value={sellingPrice}
          onChangeText={setSellingPrice}
          placeholder="Enter selling price"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddCow}>
        <Text style={styles.buttonText}>Add Cow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333333",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#333333",
  },
  multilineInput: {
    height: 80,
    paddingTop: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#00cc7a",
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddCow;
