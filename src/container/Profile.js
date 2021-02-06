import { Image, Button, Text, View } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Profile(props) {
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@DONOR');
          console.log(jsonValue)
        //   global.info=(jsonValue)
          global.result = JSON.parse(jsonValue);
          console.log(global.result.name) 
        } catch(e) {
          console.log(e)
        } 
      }
      getData()    

    return (

        <View style={{ backgroundColor: 'red' }}>
            <Image source={require("../images/background.png")} style={{ width: "100%", height: 200, }} />
            <Image source={require("../images/ProfileIcon.png")} style={{ width: "60%", height: 200, marginLeft: 70, }} />
            <View style={{backgroundColor:'red'}}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Name : {JSON.stringify(global.result.name)}</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Blood Group : {JSON.stringify(global.result.blood)}</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Health Condition : {JSON.stringify(global.result.health)}</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Email : {JSON.stringify(global.result.email)}</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Contact : {JSON.stringify(global.result.phone)}</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Gender : {JSON.stringify(global.result.gender)}</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: 3, marginLeft: 15 }}>Address : {JSON.stringify(global.result.address)}</Text>
                <Text></Text>
            </View>
        </View>
    );
}

export default Profile
