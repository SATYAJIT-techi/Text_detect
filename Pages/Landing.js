import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Landing=({navigation})=> {
  return (
    <View style={styles.container}>
         <View style={styles.header}>
         <Text style={styles.lenz}> LENZ </Text>
         </View>

         <View style={styles.photo}>
            <Image 
            style={styles.img}
            source={require('smart/assets/lens.jpg')}
            />
         </View>

         <View style={styles.button}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Image')}
            style={styles.proceed}
            >
                <Text style={{color:"black"}}> PROCEED </Text>
            </TouchableOpacity>
         </View>

        
      
    </View>

   
  )
}

export default Landing;

const styles = StyleSheet.create({
    
    container:{
        flex:1
       
    },
    header:{
        flex:1,
       
    },
    lenz:{
        padding:50,
        fontWeight:'bold',
        fontSize:20,
        color:"black",
        textAlign:'center'
    },

    photo:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        
        height:300,
        width:350,
        borderRadius:100
       
        // alignItems:'center',
        // justifyContent:'center',
    },
    button:{
        flex:2,
        color:"black",
        alignItems:'center'
       
    },
    proceed:{
       width:'80%',
       marginTop:30,
        borderRadius:30,
        padding:20,
        alignItems:'center',
        backgroundColor:"pink"
    },
})