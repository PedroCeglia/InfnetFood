import {TouchableOpacity, StyleSheet, Dimensions, Image, Text} from "react-native"

export default function ItemRestaurante({restaurante, handleItem}){
  const {nome, imageSrc} = restaurante
  return (
    <TouchableOpacity style={styles.container} onPress={handleItem}>
      <Image style={styles.image} source={{uri:imageSrc}}/>
      <Text style={styles.title}>{nome}</Text>
    </TouchableOpacity>
  )
}

const {width} = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    width:.3 * width,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    backgroundColor:"rgba(0,0,0,.1)",
    marginHorizontal:10,
    paddingVertical:10,
  },
  image:{
    width:0.22 * width,
    height:0.22 * width,
    borderRadius:0.11 * width,

  },
  title:{
    alignSelf:"center",
    textAlign:"center"
  }
})