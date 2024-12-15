import {SafeAreaView, StyleSheet, Dimensions} from "react-native"
import ListaCategorias from "../../components/listas/ListaCategorias/index.jsx"
import ListaProdutosVertical from "../../components/listas/ListaProdutosVertical/index.jsx"
import {listaProdutosDefault} from "../../constants/ListaProdutos/index"
import {useState} from "react"

export default function Categoria({route}){

  const {idCategoria} = route.params || {}
  const [itemSelected, setItemSelected] = useState(idCategoria || null)
  const handleItemFinal = (id) => {
    if(itemSelected != id){
      setItemSelected(id)
    } else {
      setItemSelected(null)
    }
  }
  const listaFinal = itemSelected != null ? listaProdutosDefault.filter((item) => item.categoria == itemSelected) : listaProdutosDefault
  return (
    <SafeAreaView >
      <ListaCategorias handleItem={handleItemFinal} itemSelected={itemSelected}/>
      <ListaProdutosVertical listaProdutos={listaFinal}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  },
})