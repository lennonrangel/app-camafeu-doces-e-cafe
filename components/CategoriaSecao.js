import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../css/styles.js';
import ItemCard from './ItemCard.js';

export default function CategoriaSecao({ secao }) {
  const [aberta, setAberta] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.categoriaHeader}
        activeOpacity={0.7}
        onPress={() => setAberta((v) => !v)}
      >
        <View style={styles.categoriaTituloLinha}>
          <Text style={styles.categoriaEmoji}>{secao.emoji}</Text>
          <Text style={styles.categoriaTitulo}>{secao.title}</Text>
        </View>
        <View style={styles.categoriaHeaderDireita}>
          <Text style={styles.categoriaContador}>{secao.items.length} itens</Text>
          <Text style={styles.categoriaSeta}>{aberta ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>

      {aberta && secao.items.map((it) => <ItemCard key={it.id} item={it} />)}
    </View>
  );
}