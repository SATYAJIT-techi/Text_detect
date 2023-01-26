import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

import Landing from './Landing';

const TextDisplay=({route, navigation})=> {
  //const route = useRoute();//this is wronf   check now

  const {name}=route.params;
  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <Text style={styles.headerText}>Text  Display</Text>
      </View>
      
      <View style={styles.TextReturn}>
      <ScrollView>
       <Text style={styles.name}> {name} </Text>
       </ScrollView>
      </View>
      

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate('Image')}>
            <Text style={styles.name}> BACK </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.name}> HOME </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TextDisplay;


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        alignItems:'center',
    },
    headerText:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
    },
    TextReturn:{
      
        borderRadius:30,
        backgroundColor:'orange',
        height:500,
        width:400,
       paddingLeft:20,
        
    },
    name:{
      alignItems:'center',
      color:'black'
    },
    buttons:{
      margin:30,
      flexDirection:'row',
      justifyContent:'space-around'
    },
    backButton:{
      borderRadius:20,
      padding:30,
      backgroundColor:'cyan'
    },
    homeButton:{
      borderRadius:20,
      padding:30,
      backgroundColor:'#cyan'
    },
    
})