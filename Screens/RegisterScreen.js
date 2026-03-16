import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../service/firebaseAuth'
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleRegister = () =>{
    console.log( email , password)
    createUserWithEmailAndPassword(auth, email ,password)
    


 }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register </Text>
      <TextInput placeholder="Email" style={styles.input}  onChangeText={setEmail}/>
      <TextInput placeholder="Password" secureTextEntry style={styles.input}  onChangeText={setPassword}/>
      <Button title="register"  onPress={handleRegister}/>

      <Text style={styles.text}>Already have an account ?<Text style={styles.textBold}> Login here </Text></Text>
    </View>
  );
};

export default RegisterScreen;

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
  text :{
    fontSize :15,


  },
  textBold :{
    fontWeight : "600"
  }
});
