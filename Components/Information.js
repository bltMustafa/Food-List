import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Information({ title, imageSource, desc }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.img} source={imageSource} />
      <View style={styles.descContainer}>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 10,
    padding: 15,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  descContainer: {
    alignItems: "center",
  },
  desc: {
    fontSize: 20,
    color: "#666",
  },
});
