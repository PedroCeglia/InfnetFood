import {StyleSheet, Dimensions, Image, Text, SafeAreaView} from "react-native"

export default function Mapa(){
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.mapaTitle}>Mapa Restaurantes</Text>
        <Image style={styles.mapa} source={{uri:"https://i.imgur.com/Vkrmbys.png"}}/>
    </SafeAreaView>
  )
}


const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  container:{
    backgroundColor:"rgba(255, 179, 255, .3)",
  },
  mapa:{
    width:width,
    height: width * 0.4,
    objectFit:"cover",
    marginBottom:10
  },
  mapaTitle:{
    marginVertical:10,
    marginLeft:20,
    fontSize:20
  }
})