import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React ,{useState}from 'react'
import { launchCamera,launchImageLibrary } from 'react-native-image-picker';
import callGoogleVisionAsync from '../cloud_vision/helper';
import { useNavigation } from '@react-navigation/native';


 const ImageComponent=() =>{


      const[data,setData] = useState("");

      const naviagtion = useNavigation();

      const Extract=()=>{  //for normal function use small letter as first  , for compnents use first letter caps ok showing in the same page that don't passed to the next page that touchopacity fun
        naviagtion.navigate("TextDisplay",{
          name:text,
        });
      }

      const generateText = ()=>{
        NavigationContainer
      }
   
      const [image, setImage] = useState(null);
      const [text, setText] = useState();

      const [error,setError]=useState(false)
   
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          base64: true,
        });
        if (!result.cancelled) {
          setImage(result.uri);
          setText("Loading..");
          const responseData = await callGoogleVisionAsync(result.base64);  //callGoogleVisionAsync(result.base64)
          setText(responseData.text);
        }
      };
    
      const  fetchData=async(id)=>{
        try {
          let result;
          if(id==2)
           result = await launchCamera({mediaType:'photo',saveToPhotos:true, includeBase64:true});
          else
         { result = await launchImageLibrary({
              mediaTypes: 'mixed',
              // base64: true, //return base64 data.
              includeBase64:true,
              //this will allow the Vision API to read this image.
            });}
          // console.log(result.assets[0].base64)
          if (!result.cancelled) {
              setImage(result.assets[0].uri);
              setText("processing......");
              const responseData = await callGoogleVisionAsync(result.assets[0].base64);
              // console.log(responseData)
              setText(responseData.text);
              //this helps to change text
           


              
            }
            setError(false)
        } catch (error) {
          console.log("No Image selected")
          setError("Please select an image")
        }
      }
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
      <Text style={styles.topic}>WELCOME TO LENZ</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.gallery} onPress={()=>fetchData(1)} >
            <Text>Pick image from GALLERY </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cam} onPress={()=>fetchData(2)}>
            <Text>Take photo by CAMERA</Text>
        </TouchableOpacity>

      </View>

      {/* <Button title="Pick an image from camera roll" onPress={()=>fetchData(1)} /> */}
      <ScrollView>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 400, height: 400, resizeMode: "contain" }}
        />
      )}

       
     <View style={styles.gocomp}>
      
 
     <TouchableOpacity onPress={Extract} style={styles.go}>
      <Text >Text </Text>     
      
      {/* want to pass this thing
       */}
      </TouchableOpacity>
    



       {error  && <Text>{error}</Text>}

     </View>
      
      </ScrollView>
      


    </View>
  )
}

export default ImageComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'
       
        },
    header:{
        margin:'5%',
        alignItems:'center',
        
    },
    topic:{
      fontSize:20,
      color:'black'
    },
    gocomp:{
      marginTop:'10%',
      alignItems:'center'
    },
    go:{
      width:'80%',
      borderRadius:20,
      padding:20,
      alignItems:'center',
      backgroundColor:'black'
    },
    buttons:{
        
        
        justifyContent:'space-around',
        justifyContent:'space-between',
        flexDirection:'row',
        
    },
    gallery:{
        borderRadius:15,
        backgroundColor:'black',
        padding:20,
        marginLeft:20
    },
    cam:{
        borderRadius:15,
        backgroundColor:'black',
        padding:20,
        marginRight:20
    },
    display:{
      backgroundColor:'black'
    }
})