import {StyleSheet, SafeAreaView,TouchableOpacity} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from "./screens/Home/index.jsx"
import Login from "./screens/Login/index.jsx"
import Categoria from "./screens/Categoria/index.jsx"
import Perfil from "./screens/Perfil/index.jsx"
import Carrinho from "./screens/Carrinho/index.jsx"
import Pedidos from "./screens/Pedidos/index.jsx"
import Restaurante from "./screens/Restaurante/index.jsx"
import ChecandoPedido from "./screens/ChecandoPedido/index.jsx"



const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({navigation})=>({
        headerStyle:styles.header,
        headerTintColor: "#f8f8f8",
        headerRight: () => (
          <SafeAreaView style={{ marginRight: 15, display:"flex", flexDirection:"row", gap:10 }}>
            <TouchableOpacity
              onPress={() => {navigation.navigate('Pedidos')}}
            >
              <Icon name="file-tray-full-outline" size={24} color="#f8f8f8" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {navigation.navigate('Perfil')}}
            >
                  <Icon name="person-outline" size={24} color="#f8f8f8" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {navigation.navigate('Carrinho')}}
            >
              <Icon name="cart-outline" size={24} color="#f8f8f8" />
            </TouchableOpacity>
          </SafeAreaView>

        )
      })}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Categoria" component={Categoria}/>
        <Stack.Screen name="Carrinho" component={Carrinho}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Pedidos" component={Pedidos}/>
        <Stack.Screen name="Restaurante" component={Restaurante}/>
        <Stack.Screen name="Confirmando Pedido" component={ChecandoPedido}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#70286f",
  }
})
/*
.SUB2 { #70286f };
.SUB1 { #591e54 };
.BG { #411439 };
.Color2 { #290a1f };
.Color1 { #110004 };


.color1 { #742372 };
.color2 { #974796 };
.color3 { #b96bb9 };
.color4 { #dc8fdc };
.color5 { #ffb3ff };

*/