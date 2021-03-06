import React from "react";
import { Text, View, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import Fontisto from 'react-native-vector-icons/Fontisto'


const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View>
         

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Destination Search')}
        >
            <Fontisto name='search' size={25} color={"#f15454"}/>
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => console.warn("Explore Btn clicked")}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

// https://www.youtube.com/watch?v=ZxkmTsEYfg8&t=969s