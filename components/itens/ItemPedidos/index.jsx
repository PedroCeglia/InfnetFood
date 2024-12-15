import {StyleSheet, Dimensions, SafeAreaView, Text, Image, FlatList, View, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';


export default function ItemPedido({pedido}){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerRestuarante}>
        <SafeAreaView style={styles.subContainerRestuarante}>
          <Image style={styles.image} source={{uri:"https://i.imgur.com/d9N3Q5S.png"}}/>
          <Text>{pedido.nomeRestaurante}</Text>
        </SafeAreaView>
        <TouchableOpacity>
          <Icon name="chevron-forward" size={22} color="#70286f" />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.containerStatusPedido}>
          <Icon name="checkmark-circle" size={22} color="green" />
        <Text>Pedido concluido - N° 1234</Text>
      </SafeAreaView>
      <FlatList
        style={{alignSelf:"flex-start", marginBottom:10}}
        data={pedido.listaProdutos}
        renderItem={({item})=>(
          <SafeAreaView
            style={styles.containerProdutos}
          >
            <Text style={styles.qntText}>{item.qnt}</Text>
            <Text style={styles.produtoTitle}>{item.title}</Text>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  )
}

const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
  container:{
    width:width * 0.9,
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"rgba(0,0,0,.05)",
    marginVertical:10
  },
  containerRestuarante:{
    width:width * 0.9,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    gap:20,
    padding:10,
    borderBottomWidth:1,
    borderColor:"#70286f"
  },
  subContainerRestuarante:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:20,
  },
  image:{
    width: width * 0.11,
    height: width * 0.11,
    borderRadius:width * 0.11,
  },
  containerStatusPedido:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:15,
    marginVertical:10,
  },
  containerProdutos:{
    marginLeft:20,
    marginVertical:5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:20
  },
  qntText:{
    backgroundColor:"rgba(0,0,0,.05)",
    color:"#70286f",
    paddingVertical:5,
    paddingHorizontal:10,
    borderColor:"#70286f",
    borderWidth:1
  },
  produtoTitle:{
    letterSpacing:1,
  },

})

