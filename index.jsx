import {View, Text, Button, StyleSheet, ImageBackground, Pressable} from 'react-native';
import {Link} from 'expo-router';
import coffee from "@/assets/images/coffee.jpg";
import Axios from "axios";

const getJoke =()=> {
  Axios.get ("https://official-joke-api.appspot.com/random_joke")
  .then ((response) => {
    console.log (response)
  });
};

const app =()=> {
  return (
    <View style={styles.container}> 
      <ImageBackground
      source = {coffee}
      resizeMode = "cover"
      style={styles.image}      
      > 
      <Text style={styles.text}>Welcome to Hospital Locator</Text>
      <Text>TESTING TESTING</Text>
      <Button
      onPress={getJoke}
      title="JOKE PRESS"
      />

      <Link href="/map" style={{marginHorizontal: 'auto'}}
      asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>SEE HOSPITALS NEAR YOU</Text>
      </Pressable>
      </Link>     
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
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba (0,0,0,0.75)',
    padding: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  }
})