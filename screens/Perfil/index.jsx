import {StyleSheet, Dimensions, SafeAreaView, Image, Text, Switch} from "react-native"
import {useState} from "react"
export default function Perfil(){
  const [isDark, setIsDark] = useState(false)
  const toggleSwitch = () => {
    setIsDark(x => !x)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri:"https://i.imgur.com/d9N3Q5S.png"}}/>
      <SafeAreaView style={styles.subContainer}>
         <Text style={styles.textLabel}>Nome</Text>
         <Text style={styles.textName}>Pedro Silveira Ceglia</Text>   
      </SafeAreaView>
      <SafeAreaView style={styles.subContainer}>
        <Text style={styles.textLabel}>Email</Text>
        <Text style={styles.textEmail}>pedro.ceglia@al.infnet.edu.br</Text>      
      </SafeAreaView>
      <SafeAreaView style={styles.containerSwitch}>
        <Text>Light</Text>
        <Switch 
          trackColor={{true: 'rgba(112, 40, 111, 1)', false: 'rgb(226, 177, 243)'}}
          thumbColor={!isDark ? 'rgba(112, 40, 111, 1)' : 'rgb(226, 177, 243)'}
          onValueChange={toggleSwitch}
          ios_backgroundColor={isDark ? 'rgba(112, 40, 111, 1)' : 'rgba(226, 177, 243, .1)'}
          value={isDark}
        />
        <Text>Dark</Text>
      </SafeAreaView>
    </SafeAreaView>
  )
}

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
  container:{
    width:width,
    minHeight:height,
    backgroundColor:"rgba(255, 179, 255, .3)",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:30
  },
  image:{
    marginTop:40,
    width:0.5 * width,
    height:0.5 * width,
    borderRadius:0.25 * width,
    objectFit:"cover",
  },
  subContainer:{
    width:width * 0.9,
    backgroundColor:"rgba(255, 255, 255, .2)",
    borderColor:"rgba(17, 0, 4, .2)",
    borderWidth:1,
    borderRadius:5
  },
  textLabel:{
    fontSize:16,
    color:"rgba(0,0,0,.5)",
    marginLeft:18,
    marginTop:10
  },
  textName:{
    fontSize:22,
    color:"rgba(0,0,0,.9)",
    marginLeft:20,
    marginBottom:10

  },
  textEmail:{
    fontSize:18,
    color:"rgba(0,0,0,.9)",
    marginLeft:20,
    marginBottom:10
  },
  containerSwitch:{
    marginLeft:20,
    alignSelf:"flex-start",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:20,
  }

})