import {StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Text} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import {listaProdutosDefault} from "../../constants/ListaProdutos/index"
import ListaCarrinho from "../../components/listas/ListaCarrinho/index.jsx"


export default function Carrinho({navigation}){
  const confirmarPedido = () => {
    navigation.navigate("Confirmando Pedido", )
  }
  return (
    <SafeAreaView >
      <ListaCarrinho />
      <TouchableOpacity style={styles.buttonContainer} onPress={confirmarPedido}>
        <Text style={{fontSize:24, fontWeight:"bold", color:"rgba(112, 40, 111, 1)"}}>Confirmar produtos</Text>
        <Icon name="cart-outline" size={24} color="rgba(112, 40, 111, 1)" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  container:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  buttonContainer:{
    flex:1,
    padding:20,
    width:width,
    borderColor:"rgba(112, 40, 111, 1)",
    borderTopWidth:1,
    gap:20,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    
  }
})