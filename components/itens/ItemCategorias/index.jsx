import {StyleSheet, Dimensions , SafeAreaView, View, Text, Image, TouchableOpacity} from "react-native"
export default function ItemCategorias({categoria, handleItem=()=>{}, itemSelected=null}){
  if (!categoria) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Categoria inválida</Text>
      </SafeAreaView>
    );
  }

  const {imageSrc, title, id} = categoria
  return (
    <TouchableOpacity style={id == itemSelected ? styles.containerSelected : styles.container} onPress={handleItem}>
      <Image style={styles.image} source={{uri:imageSrc}}/>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const {width} = Dimensions.get("window")

const styles = StyleSheet.create({
  containerSelected:{
    padding: "10px 20px",
    width:0.25 * width,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    marginRight:5,
    marginLeft:5,
    backgroundColor:"rgba(112, 40, 111, .7)",
    cursor:"pointer",
  },
  container:{
    paddingHorizontal:20,
    paddingVertical:10,
    width:0.25 * width,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    marginRight:5,
    marginLeft:5,
    backgroundColor:"rgba(112, 40, 111, .1)",
    cursor:"pointer",
  },
  image:{
    width:0.22 * width,
    height:0.22 * width
  }
})