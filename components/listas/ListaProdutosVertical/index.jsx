import {ScrollView, FlatList, StyleSheet, Dimensions} from "react-native"
import ItemProdutoVertical from "../../itens/ItemProdutoVertical/index.jsx"
import {listaProdutosDefault} from "../../../constants/ListaProdutos/index"

export default function ListaProdutosVertical({listaProdutos=listaProdutosDefault}){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        style={styles.container}
        data={listaProdutos}
        renderItem={({item}) => <ItemProdutoVertical produto={item} /> } 
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  )
}

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    height:height - 200,
  },
})