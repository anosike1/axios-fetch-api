import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import coffee from "@/assets/images/coffee.jpg";
import Axios from "axios";


const app =()=> {
  const [joke, setJoke] = useState ("");
  const [riddle, getRiddle] = useState ("");

  // Using AXIOS
  const getJoke =()=> {
  Axios.get ("https://official-joke-api.appspot.com/random_joke")
  .then (response => {
    setJoke (response.data.setup + "..." + response.data.punchline);
  });
}

// Using FETCH
  const fetchRiddle =()=> {
  fetch ("https://riddles-api.vercel.app/random")
  .then (response => response.json())
  .then (data => {
    setJoke (data.riddle + "..." + data.answer)
  })
};

  return (
    <View style={styles.container}> 
      <ImageBackground
      source = {coffee}
      resizeMode = "cover"
      style={styles.image}      
      > 
      <Text style={{textAlign: 'center'}}>{joke}</Text>
      <Text style={{textAlign: 'center'}}>{riddle}</Text>
      <Button
      onPress={getJoke}
      title="JOKE PRESS"
      />
      <Button
      onPress={fetchRiddle}
      title="RIDDLE PRESS"
      />   
      </ImageBackground>
    </View>
  )
}
export default app

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
  width: '100%',
  height: '100%',
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  },
})
