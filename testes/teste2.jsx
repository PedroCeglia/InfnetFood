import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'; 
import Categoria from '../screens/Categoria';

const Stack = createStackNavigator();

describe('Navegação entre telas', () => {
  const TesteNavgator = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categoria" component={Categoria} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  it(' navegar da tela inicial para a tela categorias', () => {
    const { getByText } = render(<TesteNavgator />);

    fireEvent.press(getByText('Hamburgues'));

    expect(getByText('Bem-vindo à tela de produtos')).toBeTruthy();

  });
});
