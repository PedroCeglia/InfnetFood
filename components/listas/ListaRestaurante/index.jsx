import {StyleSheet, Dimensions, SafeAreaView, FlatList, Text} from "react-native"
import {listaRestaurantesDefault} from "../../../constants/ListaResturantes/index"
import ItemRestaurante from "../../itens/ItemRestaurante/index.jsx"

export default function ListaRestaurante({
    listaRestaurantes=listaRestaurantesDefault, 
    hasTitle=false, 
    handleItem=()=>{}
  }){
  return (
    <SafeAreaView style={styles.container}>
      {hasTitle && <Text style={styles.title}>Restaurantes</Text>}
      <FlatList
        style={styles.flatList}
        horizontal 
        data={listaRestaurantes}
        renderItem={({item}) => <ItemRestaurante restaurante={item} handleItem={()=>handleItem(item.nome)}/>}
        keyExtractor={(item) => item.nome}
      />
    </SafeAreaView>
  )
}
const {height, width} = Dimensions.get("window")
const styles =  StyleSheet.create({
  container:{
    backgroundColor:"rgba(255, 179, 255, .3)",
  },
  title:{
    fontSize:25,
    marginLeft:10,
    marginVertical:10
  },
  flatList: {
    paddingVertical: 5,
    cursor:"grab", 
    marginBottom:10
  },
})