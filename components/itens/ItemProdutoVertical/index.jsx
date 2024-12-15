import {StyleSheet, Dimensions, SafeAreaView, Image, Text, TouchableOpacity, View} from "react-native"

export default function ItemProdutoVertical({produto}){
  const {imageUrl, title, preco} = produto
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:imageUrl}}/>
      <SafeAreaView style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <SafeAreaView style={styles.bottomContainer}>
          <Text style={styles.preco}>R${preco}</Text>
          <TouchableOpacity style={styles.button}>
            <Text>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  )
}

const {width} = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    width:width,
    paddingVertical:10,
    borderColor:"#70286f",
    borderBottomWidth:1,
  },
  image:{
    width:0.22 * width,
    height:0.22 * width,
    marginRight:10
  },
  subContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  title:{
    fontSize:25
  },
  bottomContainer:{
    marginTop:10,
    width: 0.7 * width,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    fontSize:20
  },
  button:{
    paddingVertical:10,
    paddingHorizontal:20,
    borderColor:"#70286f",
    borderWidth:1,
    marginLeft:20,
    
  },
  preco:{
    fontSize:15
  }
})

