import {StyleSheet, Dimensions, SafeAreaView, Text, View, Image, ScrollView} from "react-native"
import {listaRestaurantesDefault} from "../../constants/ListaResturantes/index"
import {listaProdutosDefault} from "../../constants/ListaProdutos/index"
import Icon from 'react-native-vector-icons/Ionicons';
import ListaProdutos from "../../components/listas/ListaProdutosVertical/index.jsx"

export default function Restaurante({route}){
  const { nomeRestaurante } = route.params || {};

  const restauranteFilter = listaRestaurantesDefault.filter(item => item.nome == nomeRestaurante)
  const restaurante = restauranteFilter.length < 1 ? null : restauranteFilter[0]
  const listaProdutos = restaurante.categorias.map(categoria => listaProdutosDefault.filter(item => item.categoria == categoria )).flat()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.containerInfos}>
        <Image style={styles.image} source={{uri:restaurante.imageSrc}}/>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{nomeRestaurante}</Text>
          <Text style={styles.titleSubInfos}>Entrega Rastreavel - 3.0 Km - Min R$ 20,00</Text>
        </View>
        <View style={styles.containerNota}>
          <Icon name="star" size={16} color="#70286f" />
          <Text>4,8</Text> 
          <Text>( 2,4 mil avaliações )</Text> 
          <Icon name="trending-up" size={16} color="#70286f" />
          <Text>Super</Text>
        </View>
        <View style={styles.containerNota}>
          <Text>Localização: Centro da Cidade - RJ </Text>
        </View>
        <View style={styles.containerEntrega}>
          <Text>Entrega</Text>
          <Icon name="chevron-forward" size={16} color="#70286f" />
          <Text>Hoje, 66-76 min - R$15,99</Text>
        </View>
      </SafeAreaView>
      <ListaProdutos listaProdutos={listaProdutos}/>
    </ScrollView>
  )
}

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    height:height - 50
  },
  containerInfos:{
    marginTop: width * 0.18,
    position:"relative",
    marginVertical:10,
    alignSelf:"center",
    width:width * 0.9,
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  image:{
    position:"absolute",
    top: -(width * 0.15),
    zIndex:2,
    borderWidth:1,
    borderColor:"#70286f",
    width:width * 0.22,
    height:width * 0.22,
    borderRadius:width * 0.11,
    objectFit:"cover"

  },
  containerTitle:{
    display:"flex", 
    justifyContent:"flex-start",
    alignItems:"flex-start",
    gap:10,
    padding:10,
    backgroundColor:"rgba(255,255,255,1)",
    width:width * 0.9,
    borderWidth:1,
    borderColor:"#70286f",
    borderTopEndRadius:10,
    borderTopStartRadius:10,

  },
  title:{},
  titleSubInfos:{},
  containerNota:{
    display:"flex", 
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    gap:10,
    padding:10,
    backgroundColor:"rgba(255,255,255,1)",
    width:width * 0.9,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor:"#70286f"
  },
  containerEntrega:{
    display:"flex", 
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    gap:10,
    padding:10,
    backgroundColor:"rgba(255,255,255,1)",
    width:width * 0.9,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:"#70286f",
    borderBottomEndRadius:10,
    borderBottomStartRadius:10
  
  }
})