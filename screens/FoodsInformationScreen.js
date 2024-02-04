import { ScrollView } from "react-native";
import React from "react";
import Information from "../Components/Information";

const FoodsInformationScreen = () => {
  return (
    <ScrollView>
      <Information
        title="Biberli Ekmek"
        imageSource={require("../assets/BiberliEkmek.jpg")}
        desc="Hatay'ın Biberli Ekmeği 😍😍"
      />

      <Information
        title="Kağıt Kebabı"
        imageSource={require("../assets/KağıtKebabı.jpg")}
        desc="Kağıt Kebabı 😍😍"
      />

      <Information
        title="Hatay Döner"
        imageSource={require("../assets/hataydoner.jpg")}
        desc="Bol Soslu Hatay Döneri 😍😍 "
      />

      <Information
        title="Künefe"
        imageSource={require("../assets/kunefe.jpeg")}
        desc="Künefe 😍😍"
      />
    </ScrollView>
  );
};

export default FoodsInformationScreen;
