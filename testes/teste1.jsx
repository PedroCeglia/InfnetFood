import { render } from '@testing-library/react-native';
import ListaCategorias from "../components/listas/ListaCategorias/index.jsx"

describe('Listas Categorias', () => {
  it('exibir lista de categorias corretamente', () => {
    
    const { getByText } = render(<ListaCategorias/>);
    
    categories.forEach(category => {
      expect(getByText(category)).toBeTruthy();
    });
  });
});
