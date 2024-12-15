import {ScrollView, FlatList, StyleSheet, Dimensions} from "react-native"
import ItemCarrinho from "../../itens/ItemCarrinho/index.jsx"
import {listaProdutosDefault} from "../../../constants/ListaProdutos/index"


export default function ListaCarrinho({listaCarrinho=listaProdutosDefault.slice(1,4)}){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={listaCarrinho}
        renderItem={({item}) => <ItemCarrinho produto={item} /> } 
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  )
}

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    height:height - 140,
  }
})