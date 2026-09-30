import React from 'react';
import { Text, ScrollView } from 'react-native';
import { styles } from '../css/styles.js';
import { CAFES_SECOES } from '../data/menuData.js';
import CategoriaSecao from '../components/CategoriaSecao.js';

export default function Cafes() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerConteudo}>
      <Text style={styles.titulo}>Cafés & Bebidas</Text>
      <Text style={styles.subtitulo}>Quentes, com leite e gelados</Text>

      {CAFES_SECOES.map((secao) => (
        <CategoriaSecao key={secao.id} secao={secao} />
      ))}
    </ScrollView>
  );
}
