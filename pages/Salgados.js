import React from 'react';
import { Text, ScrollView } from 'react-native';
import { styles } from '../css/styles.js';
import { SALGADOS_SECOES } from '../data/menuData.js';
import CategoriaSecao from '../components/CategoriaSecao.js';

export default function Salgados() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerConteudo}>
      <Text style={styles.titulo}>Salgados</Text>
      <Text style={styles.subtitulo}>Franceses, italianos e pão de queijo</Text>

      {SALGADOS_SECOES.map((secao) => (
        <CategoriaSecao key={secao.id} secao={secao} />
      ))}
    </ScrollView>
  );
}
