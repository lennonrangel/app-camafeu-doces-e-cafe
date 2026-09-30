import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../css/styles.js';

const ALTURA = 64;
const MARGEM = 10;

// Espaço que o conteúdo das telas precisa deixar no topo para não
// começar escondido atrás da barra flutuante.
export function useTopoConteudo() {
  const insets = useSafeAreaInsets();
  return insets.top + MARGEM + ALTURA + 14;
}

export default function HeaderFlutuante({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      pointerEvents="box-none"
      style={{ paddingTop: insets.top + MARGEM, paddingHorizontal: 16 }}
    >
      <View style={[styles.headerFlutuante, { height: ALTURA }]}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerMenuBotao}
          onPress={() => navigation.openDrawer()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <View style={styles.headerMenuBarra} />
          <View style={styles.headerMenuBarra} />
          <View style={styles.headerMenuBarra} />
        </TouchableOpacity>
      </View>
    </View>
  );
}