import React from 'react';
import { Text, ScrollView } from 'react-native';
import { styles } from '../css/styles.js';
import { COOKIES_SECOES } from '../data/menuData.js';
import CategoriaSecao from '../components/CategoriaSecao.js';

export default function Cookies() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerConteudo}>
      <Text style={styles.titulo}>Cookies</Text>
      <Text style={styles.subtitulo}>22 sabores da nossa cookeria</Text>

      {COOKIES_SECOES.map((secao) => (
        <CategoriaSecao key={secao.id} secao={secao} />
      ))}
    </ScrollView>
  );
}