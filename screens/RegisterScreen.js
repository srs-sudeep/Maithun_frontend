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
  const [type, setType] = useState("customer");

  // const handleRegister = async (e) => {
  //   console.log(name,password)
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:5000/apis/users/signup',
  //       {
  //         name: name,
  //         email: email,
  //         password: password,
  //         phone: phone,
  //         address: address,
  //         type: type,
  //       }
  //     );

  //     if (response.data.success) {
  //       Alert.alert('Registration Successful', 'You have successfully registered!', [
  //         { text: 'OK', onPress: () => navigation.navigate('Login') }
  //       ]);
  //     } else {
  //       Alert.alert('Registration Failed', 'An error occurred while registering. Please try again later.');
  //     }
  //   } catch (error) {
  //     console.error('Registration Error:', error);
  //     Alert.alert('Registration Failed', 'An error occurred while registering. Please try again later.');
  //   }
  // };
  const handleRegister = () => {
    console.log(name, email, password, phone, address, type);
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:5000/apis/users/signup", {
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address,
        type: type,
      },{
        withCredentials: true,
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencoded",
        // },
      }).then(function(response){
        Alert.alert('Registration Successful', 'You have successfully registered!', [
                  { text: 'OK', onPress: () => navigation.navigate('Login') }
                ]);
      })
      .catch(function(error){
        console.error('Registration Error:', error);
      Alert.alert('Registration Failed', 'An error occurred while registering. Please try again later.');
      })
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <Text style={styles.title}>Welcome to Mithun App</Text>
      <Text style={styles.title}>Please Register into Mithun APP</Text>
      <Picker
        selectedValue={type}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
      >
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
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already registered? Login here</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default RegisterScreen;
