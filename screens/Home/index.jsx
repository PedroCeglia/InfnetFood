import {ScrollView, Dimensions, StyleSheet} from "react-native"
import Mapa from "../../components/Mapa/index.jsx"
import ListaCategorias from "../../components/listas/ListaCategorias/index.jsx"
import ListaRestaurante from "../../components/listas/ListaRestaurante/index.jsx"

export default function Home({navigation}){

  const handleItemCategora = (id) => {
      navigation.navigate("Categoria", {idCategoria:id})
  }
  const handleItemRestaurante = (id) => {
      navigation.navigate("Restaurante", {nomeRestaurante:id})
  }
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ListaCategorias hasTitle={true} handleItem={handleItemCategora}/>
      <ListaRestaurante hasTitle={true} handleItem={handleItemRestaurante}/>
      <Mapa/>
    </ScrollView>
  )
}
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  container:{
    height:height - 150
  },
})