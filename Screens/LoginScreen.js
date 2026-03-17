import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../service/firebaseAuth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = () => {
    setError("")
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error?.message || "Registration failed");
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login </Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />
      <Button title="register" onPress={handleLogin} />
      {error && <Text style={styles.error}>{error}</Text>}
      <Text style={styles.text}>
        Create an account ?
        <Text style={styles.textBold}> Register here </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: "15px",
    width: 300,
    borderColor: "gray",
    marginVertical: 10,
    backgroundColor: "beige",
  },
  header: {
    fontSize: 25,
    marginBottom: "15px",
  },
  text: {
    fontSize: 15,
  },
  textBold: {
    fontWeight: "600",
  },
  error: {
    color:"red"
  }
});
