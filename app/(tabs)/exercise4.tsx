import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const exercise4 = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas */}
      <View style={styles.topBar}>
        <View style={styles.colorBox}></View>
        <View style={[styles.colorBox, styles.yellow]}></View>
        <View style={styles.colorBox}></View>
      </View>

      {/* Logo dan teks */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logouk.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Universitas Klabat</Text>
        <Text style={styles.subtitle}>Pathway to Excellence</Text>
      </View>

      {/* Bagian bawah */}
      <View style={styles.bottomBar}>
        <View style={styles.colorBox}></View>
        <View style={[styles.colorBox, styles.yellow]}></View>
        <View style={styles.colorBox}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "center",
    padding: 10,
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "blue",
    justifyContent: "center",
    padding: 10,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 180,
  },
  logo: {
    width: 505, // Ukuran logo
    height: 115, // Ukuran logo
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontStyle: "italic",
  },
  colorBox: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    marginHorizontal: 5,
  },
  yellow: {
    backgroundColor: "yellow",
  },
});

export default exercise4;
