import {FlatList, StyleSheet, SafeAreaView, Text} from "react-native"
import ItemCategorias from "../../itens/ItemCategorias/index.jsx"
import {listaCategoriasDefault} from "../../../constants/ListaCategorias"

export default function ListaCategorias({
    listaCategorias=listaCategoriasDefault,
    handleItem=()=>{}, 
    itemSelected=null, 
    hasTitle=false, 
  }) {
  const itensSelecionadosList = listaCategorias.filter((item) => item.id == itemSelected)
  const itensNaoSelecionadosList = listaCategorias.filter((item) => item.id != itemSelected) 
  const listaOrdenada = [...itensSelecionadosList, ...itensNaoSelecionadosList]

  return (
    <SafeAreaView style={styles.container}>
    {hasTitle && <Text style={styles.title}> Categorias </Text>}
      <FlatList  
          style={styles.flatList}
          horizontal 
          data={listaOrdenada}
          renderItem={({item}) =>( 
            <ItemCategorias 
              categoria={item} 
              handleItem={()=>{handleItem(item.id)}}
              itemSelected={itemSelected}
            />
          )}
          keyExtractor={categoria => categoria.id}
      />    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"rgba(255, 179, 255, .3)",
  },
    flatList: {
    paddingVertical: 5,
    cursor:"grab", 
    marginBottom:10
  },
  title:{
    fontSize:25,
    marginVertical:10
  }
})

