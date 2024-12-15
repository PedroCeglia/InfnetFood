import {
  StyleSheet, 
  Dimensions, 
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Platform
} from "react-native"
import useLocalStorage from "../../hooks/useLocalStorage/index.jsx"
import { CommonActions } from '@react-navigation/native';


import {useState} from "react"

export default function Login({navigation}){

  const [fieldEmail, setFieldEmail] = useState("")
  const [fieldPassword, setFieldPassword] = useState("")
  const [user, setUser] = Platform.OS == "ios" ? useState({isNull:true}) : useLocalStorage("user",{isNull:true})

  const logar = () => {
    if(fieldEmail.indexOf("@") != -1 && fieldPassword.length > 4){
      setUser({email:fieldEmail, password:fieldPassword})
    }
  }

  if(!user.isNull){
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Home' },
          ],
        })
      )
  }

  return <SafeAreaView style={styles.container}>
    <SafeAreaView style={styles.formulario}>
      <Text style={styles.header}>Login</Text>
      <TextInput 
        style={styles.inputField}
        placeholder="Escreva seu email"
        value={fieldEmail}
        onChangeText={setFieldEmail}
      />
      <TextInput 
        style={styles.inputField}
        secureTextEntry={true}
        placeholder="Escreva sua senha"
        value={fieldPassword}
        onChangeText={setFieldPassword}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={logar}>
        <Text>Logar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  </SafeAreaView>
}

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    minHeight:height,
    width:width,
    backgroundColor:"rgba(255, 179, 255, .6)",
  },
  formulario:{
    backgroundColor:"rgba(107, 63, 209,.2)",
    height:0.6 * height,
    marginTop:40,
    width: 0.9 * width,
    borderRadius:20,
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    gap:20
  },
  header:{
    marginTop:20,
    fontSize:30
  },
  inputField:{
    backgroundColor:"rgba(243, 224, 240,.8)",
    paddingVertical:10,
    paddingHorizontal:5,
    width: 0.8 * width,
    borderRadius:5,
    outline:"none",
    borderColor:"#290a1f",
    borderWidth:1,
    borderStyle:"solid"

  },
  buttonContainer:{
    backgroundColor:"#f8f8f8",
    paddingVertical:10,
    paddingHorizontal:40,
    marginBottom:20,
    borderRadius:10,
    outline:"none",
    borderColor:"#290a1f",
    borderWidth:1,
    borderStyle:"solid"
  },

})


