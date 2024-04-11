import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [type,setType] = useState("customer");

  function handleRegister() {
    console.log(name, email, password, phone, address, type);
    return new Promise((resolve, reject) => {
      axios
        .post(`http://10.10.16.140:5000/apis/users/signup`, {
          name: name,
          email: email,
          password: password,
          phone: phone,
          userLocality: address,
          isSeller: type === "vendor",
        })
        .then(function (response) {
          Alert.alert(
            "Registration Successful",
            "You have successfully registered!",
            [{ text: "OK", onPress: () => navigation.navigate("Login") }]
          );
        })
        .catch(function (error) {
          console.error("Registration Error:", error);
          Alert.alert(
            "Registration Failed",
            "An error occurred while registering. Please try again later."
          );
        });
    });
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Mithun App</Text>
      <Text style={styles.subtitle}>Please Register into Mithun App</Text>
      <Picker
        selectedValue={type}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
        <Picker.Item label="Customer" value="customer" />
        <Picker.Item label="Vendor" value="vendor" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.alreadyRegistered}>Already registered? </Text>
        <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
          Login here
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666666',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#333333',
  },
  button: {
    width: '100%',
    backgroundColor: '#00cc7a',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  alreadyRegistered: {
    color: '#000000',
  },
  loginText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
