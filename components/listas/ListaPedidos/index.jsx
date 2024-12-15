import {ScrollView, FlatList, StyleSheet, Dimensions} from "react-native"
import ItemPedidos from "../../itens/ItemPedidos/index.jsx"
import {listaPedidosDefault} from "../../../constants/ListaPedidos/index"


export default function ListaPedidos({listaPedidos=listaPedidosDefault}){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={listaPedidos}
        renderItem={({item}) => <ItemPedidos pedido={item} /> } 
        keyExtractor={item => item.idPedido}
      />
    </ScrollView>
  )
}

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    height:height - 100,
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:20,
  },
})