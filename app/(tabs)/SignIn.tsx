import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Input from "../../componentse5/input";
import Button from "../../componentse5/button";
const SignIn = () => {
  return (
    <View style={styles.container}>
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Input label="Alamat" placeholder="Masukan alamat anda" />
      <Input label="No Tlp" placeholder="Masukan nomor tlpn anda" />
      <Button label="Sign In" />
      <Button label="Sign in with Google" color="red" />
      <Button label="Sign in with Facebook" color="blue" />
      <Button label="Sign in with Apple" color="black" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 40,
    color: "black",
    fontWeight: "700",
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
