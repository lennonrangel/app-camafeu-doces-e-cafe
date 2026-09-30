import React from 'react';
import { Text, ScrollView } from 'react-native';
import { styles } from '../css/styles.js';
import { DOCES_SECOES } from '../data/menuData.js';
import CategoriaSecao from '../components/CategoriaSecao.js';

export default function Doces() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerConteudo}>
      <Text style={styles.titulo}>Doces</Text>
      <Text style={styles.subtitulo}>Brownies, cookie na panela e croissants doces</Text>

      {DOCES_SECOES.map((secao) => (
        <CategoriaSecao key={secao.id} secao={secao} />
      ))}
    </ScrollView>
  );
}