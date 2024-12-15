import {
  StyleSheet,
  Dimensions ,
  SafeAreaView, 
  Image, 
  Text, 
  TouchableOpacity , 
  View
} from "react-native"
import {useState} from "react"
import Icon from 'react-native-vector-icons/Ionicons';

export default function ItemCarrinho({produto=null}){
  const {imageUrl, title, preco, qnt} = produto
  const [quantidadeFinal, setQuantidadeFinal] = useState(1)
  const diminuirQuantidade = () => { setQuantidadeFinal(x => x - 1)}
  const aumentarQuantidade = () => { setQuantidadeFinal(x => x + 1)}

  const deletarItem = () => { setQuantidadeFinal(x => x - 1)}

  return (
    <SafeAreaView style={quantidadeFinal > 0 ? styles.container : styles.none }>
      <SafeAreaView style={styles.containerInfos}>
        <Image source={{uri:imageUrl}} style={styles.image}/>
        <SafeAreaView style={styles.textContainer}>
          <Text>{title}</Text>
          <Text>R${preco * quantidadeFinal}</Text>
        </SafeAreaView>
      </SafeAreaView>
      <View style={styles.qntContainer}>
        <TouchableOpacity  onPress={diminuirQuantidade}>
          <Icon name={quantidadeFinal <= 1 ? "trash-outline" : "remove-outline" } size={18} color="rgba(112, 40, 111, 1)" />
        </TouchableOpacity >
        <Text>{quantidadeFinal}</Text>
        <TouchableOpacity  onPress={aumentarQuantidade}>
          <Icon name="add-outline" size={18} color="rgba(112, 40, 111, 1)" />
        </TouchableOpacity >
      </View>
    </SafeAreaView>
  )
} 

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
  none:{
    display:"none"
  },
  container:{
    marginTop:10,
    width:width,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    gap:20,
    borderBottomWidth:1,
    borderColor:"rgba(112, 40, 111, 1)"
  },
  containerInfos:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:20,
    marginBottom:10
  },
  image:{
    width:0.22 * width,
    height:0.22 * width,
    marginRight:10
  },
  textContainer:{
    display:"flex",
    justifyContent:"space-around",
    alignItems:"flex-start"
  },
  qntContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    gap:10,
    marginRight:10

  }
  

})