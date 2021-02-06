import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "data:image/jpeg;base64,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" };

const Home = (props) => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Text style={{color:'white', fontWeight: 'bold', fontSize:52, backgroundColor: "#8B0000", textAlign:'center', position: 'relative', bottom:130, borderWidth:5,borderColor:'#800000', }}>BLOOD BANK</Text>
      <Text style={styles.text} onPress={()=>props.navigation.navigate("Login")}>Login</Text>
      <Text style={styles.text}onPress={()=>props.navigation.navigate("SignUp")}>SignUp</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height:'100%',
    width:'100%'
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#8B0000",
    borderWidth:5,
    borderColor:'#800000',
    width:150,
    margin:10,
  }
});

export default Home;