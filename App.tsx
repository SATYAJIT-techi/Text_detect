import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageComponent from './Pages/ImageComponent';
import callGoogleVisionAsync from "./cloud_vision/helper"
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Pages/Landing';
import TextDisplay from './Pages/TextDisplay';
import { NavigationContainer } from '@react-navigation/native';



const Stack=createStackNavigator();
 const App=()=>{

  return (
  
        <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Landing}  />
          <Stack.Screen name="Image" component={ImageComponent} />
          <Stack.Screen name="TextDisplay" component={TextDisplay} />
        </Stack.Navigator>
        </NavigationContainer>
        
      );
    }
   

// You can also use as a promise without 'callback':
    
    




    // <ScrollView>
    // <View>
    //   {people.map((item)=>{
    //     return(
    //       <View style={styles.container} key={item.key}>
    //         <Text style={styles.text}>{item.name}</Text>
    //       </View>
    //     )
    //   })}
    // </View>
    // </ScrollView>


export default App;

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    
  },
  text:{
    padding:30,
    paddingLeft:'10%',
    marginTop:20,
    backgroundColor:'pink',
    width:'80%',
    borderRadius:19,
    justifyContent:'center'
  }
})