import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}> Hatay'ın Yöresel Yemekleri</Text>
      <TouchableOpacity
        style={[styles.containerButton, { backgroundColor: "#944E63" }]}
        onPress={() => {
          navigation.navigate("Yemekler");
        }}
      >
        <Text style={{ color: "white" }}>Yemekler</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    fontSize: 20,
    fontStyle: "italic",
    marginVertical: 10,
  },
  containerButton: {
    padding: 10,
    borderRadius: 5,
    fontSize: 12,
  },
});
