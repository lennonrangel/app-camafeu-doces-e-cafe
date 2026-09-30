import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { Asset } from 'expo-asset';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home     from './pages/Home';
import Cardapio from './pages/Cardapio';
import Combo    from './pages/Combo';
import Localizacao from './pages/Localizacao';
import Sobre    from './pages/Sobre';
import HeaderFlutuante from './components/HeaderFlutuante';
import { COOKIES_SECOES, DOCES_SECOES, CAFES_SECOES, SALGADOS_SECOES, DESTAQUES } from './data/menuData';

const FOTOS = [
  require('./assets/Home.jpeg'),
  require('./assets/Combo.jpg'),
  ...[...COOKIES_SECOES, ...DOCES_SECOES, ...CAFES_SECOES, ...SALGADOS_SECOES]
    .flatMap((secao) => secao.items)
    .concat(DESTAQUES)
    .map((it) => it.imagem)
    .filter(Boolean),
];

const Drawer = createDrawerNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#efeae1',
    card: '#ffffff',
    text: '#2f3436',
    border: '#e7e2d8',
    primary: '#22c55e',
  },
};

const App = () => {
  useEffect(() => {
    Asset.loadAsync(FOTOS).catch(() => {});
  }, []);

  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator
        initialRouteName="home"
        screenOptions={{
          headerTransparent: true,
          header: ({ navigation }) => <HeaderFlutuante navigation={navigation} />,
          drawerPosition: 'right',
          drawerType: 'front',
          drawerActiveTintColor: '#00a808',
          drawerInactiveTintColor: '#6b7280',
          drawerActiveBackgroundColor: 'rgba(34, 197, 94, 0.12)',
          drawerStyle: { backgroundColor: '#ffffff', width: '65%' },
          drawerItemStyle: { marginVertical: 5, borderRadius: 10 },
          drawerLabelStyle: { fontSize: 17, fontWeight: '600' },
        }}
      >
        <Drawer.Screen
          name="home"
          component={Home}
          options={{ title: 'Camafeu Doces & Café', drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="cardapio"
          component={Cardapio}
          options={{ title: 'Cardápio', drawerLabel: 'Cardápio' }}
        />
        <Drawer.Screen
          name="combo"
          component={Combo}
          options={{ title: 'Combo Pé de Café', drawerLabel: 'Combo Pé de Café' }}
        />
        <Drawer.Screen
          name="localizacao"
          component={Localizacao}
          options={{ title: 'Localização', drawerLabel: 'Localização' }}
        />
        <Drawer.Screen
          name="sobre"
          component={Sobre}
          options={{ title: 'Sobre', drawerLabel: 'Sobre' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;