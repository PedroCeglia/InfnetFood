import {StyleSheet, Dimensions, SafeAreaView, Text, TextInput, Image, TouchableOpacity} from "react-native"
import ButtaoAtivoFormaDePagamento from "../../components/Animacao/index.jsx"
import {useState} from "react"
import { CommonActions } from '@react-navigation/native';
//import {exibirNotificacao} from "../../utils/notificacoes"

export default function ChecandoPedido({navigation}){
  const [endereco, setEndereco] = useState("Rua Custodio Serrão")
  const [formaPagamento, setFormaPagamento] = useState("")
  
  const confirmarPedido = () => {
    if(formaPagamento != "" && endereco != ""){
      navigation.dispatch(
        CommonActions.reset({
          index: 0, // Indica qual tela será a primeira na pilha
          routes: [
            { name: 'Home' }, // Nome da tela que você deseja que seja a primeira
          ],
      })
);
      //exibirNotificacao("Pedido COnfirmado!", "Pedido COnfirmado")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.containerLocalizacao}>
        <Text style={styles.labelLocalizacao}>Localização</Text>
        <TextInput
          style={styles.fieldLocalizacao}
          value={endereco}
          onChange={(e)=>{setEndereco(e.target.value)}}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.containerPagamento}>
        <Text style={styles.labelPagamento}>Metodo de Pagamento</Text>
        <PagamentoItem
          paymentMethod={formaPagamento}
          setPaymentMethod={setFormaPagamento}
          imageSrc={"https://i.imgur.com/yFmEqvF.png"}
          value={"Pix"}
          onde={"Pelo App"}
        />
        <PagamentoItem
          paymentMethod={formaPagamento}
          setPaymentMethod={setFormaPagamento}
          imageSrc={"https://i.imgur.com/8zkusTg.png"}
          value={"Cartão de Debito"}
          onde={"Na Entrega"}
        />
        <PagamentoItem
          paymentMethod={formaPagamento}
          setPaymentMethod={setFormaPagamento}
          imageSrc={"https://i.imgur.com/8zkusTg.png"}
          value={"Cartão de Crédito"}
          onde={"Na Entrega"}
        />
        <PagamentoItem
          paymentMethod={formaPagamento}
          setPaymentMethod={setFormaPagamento}
          imageSrc={"https://i.imgur.com/Q7b1vvQ.png"}
          value={"Dinheiro"}
          onde={"Na Entrega"}
        />
        <PagamentoItem
          paymentMethod={formaPagamento}
          setPaymentMethod={setFormaPagamento}
          imageSrc={"https://i.imgur.com/8zkusTg.png"}
          value={"**** **** **** 7777"}
          onde={"Pelo App"}
        />
      </SafeAreaView>

      <TouchableOpacity style={styles.buttonContainer} onPress={confirmarPedido}>
        <Text style={{fontSize:24, fontWeight:"bold", color:"rgba(112, 40, 111, 1)"}}>Confirmar produtos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const PagamentoItem = ({paymentMethod="", setPaymentMethod=()=>{} ,value="", imageSrc="", onde=""}) => {
  return (
    <TouchableOpacity style={styles.containerPagamentoItem} onPress={()=>{setPaymentMethod(value)}}>
      <Image style={styles.imagePagamentoItem} source={{uri:imageSrc}}/>
      <SafeAreaView style={styles.containerTextPagamentoItem}>
        <Text style={styles.titlePagamentoItem}>{value}</Text>
        <Text style={styles.ondePagamentoItem}>Pagamento {onde}</Text>
      </SafeAreaView>
      {
        paymentMethod == value ? <ButtaoAtivoFormaDePagamento/> : (
          <TouchableOpacity 
            onPress={()=>{setPaymentMethod(value)}} 
            style={styles.pagamentoIsntSelected }
          />
        )
      }

    </TouchableOpacity>
  )
}

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    width:width,
    height:height - 60,
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"rgba(255, 179, 255, .3)",
  },
  containerLocalizacao:{
    width:width * 0.9,
    backgroundColor:"rgba(255, 255, 255, .8)",
    borderColor:"rgba(17, 0, 4, .2)",
    borderWidth:1,
    borderRadius:5,
    marginVertical:15
  },
  labelLocalizacao:{
    fontSize:16,
    color:"rgba(0,0,0,.5)",
    marginLeft:18,
    marginTop:10
  },
  fieldLocalizacao:{
    fontSize:22,
    color:"rgba(0,0,0,.9)",
    marginLeft:20,
    marginBottom:10
  },
  containerPagamento:{
    width:width * 0.9,
    backgroundColor:"rgba(255, 255, 255, .8)",
    borderColor:"rgba(17, 0, 4, .2)",
    borderWidth:1,
    borderRadius:5,
  },
  labelPagamento:{
    fontSize:16,
    color:"rgba(0,0,0,.5)",
    marginLeft:18,
    marginTop:10
  },
  containerPagamentoItem:{
    margin:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    gap:20,
    borderColor:"rgba(17, 0, 4, .2)",
  },
  imagePagamentoItem:{
    width:width * 0.2,
    height:width * 0.12,
    objectFit:"cover"
  },
  pagamentoIsntSelected:{
    width:20,
    height:20,
    borderRadius:10,
    borderWidth:1,
    borderColor:"#70286f"
  },
  pagamentoIsSelected:{
    width:20,
    height:20,
    borderRadius:10,
    backgroundColor:"#70286f",
    borderWidth:2,
    borderColor:"#f8f8f8"
  },
  buttonContainer:{
    padding:"20px",
    width:width,
    borderColor:"rgba(112, 40, 111, 1)",
    borderTopWidth:1,
    gap:20,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(255, 255, 255, .8)",
    
  }
})