import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { styles } from '../css/styles.js';

// Cartão de item do cardápio.
// Se o item tiver uma propriedade `imagem` (require de um arquivo local ou
// { uri: '...' }), a foto é exibida. Caso contrário, mostramos um espaço
// reservado (placeholder) para o usuário adicionar a foto depois.
// Tocar no cartão (ou no botão "+") abre um pop-up com a visualização
// ampliada do item.
export default function ItemCard({ item }) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.itemCard} activeOpacity={0.85} onPress={() => setAberto(true)}>
        {item.imagem ? (
          <Image source={item.imagem} style={styles.itemImagemPlaceholder} resizeMethod="resize" fadeDuration={0} />
        ) : (
          <View style={styles.itemImagemPlaceholder}>
            <Text style={styles.itemImagemIcone}>🖼️</Text>
            <Text style={styles.itemImagemTexto}>foto</Text>
          </View>
        )}

        <View style={styles.itemConteudo}>
          <Text style={styles.itemNome}>{item.name}</Text>
          {!!item.desc && (
            <Text style={styles.itemDescricao} numberOfLines={2}>
              {item.desc}
            </Text>
          )}
          <Text style={styles.itemPreco}>{item.price}</Text>
        </View>

        <TouchableOpacity style={styles.botaoAdicionar} activeOpacity={0.7} onPress={() => setAberto(true)}>
          <Text style={styles.botaoAdicionarTexto}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <Modal
        visible={aberto}
        transparent
        animationType="fade"
        onRequestClose={() => setAberto(false)}
      >
        {/* Tocar fora do cartão fecha o pop-up */}
        <Pressable style={styles.modalFundo} onPress={() => setAberto(false)}>
          <Pressable style={styles.modalCartao} onPress={() => {}}>
            {item.imagem ? (
              <Image source={item.imagem} style={styles.modalImagem} resizeMethod="resize" fadeDuration={0} />
            ) : (
              <View style={styles.modalImagemPlaceholder}>
                <Text style={styles.modalImagemIcone}>🖼️</Text>
                <Text style={styles.itemImagemTexto}>foto</Text>
              </View>
            )}

            <TouchableOpacity style={styles.modalFechar} onPress={() => setAberto(false)}>
              <Text style={styles.modalFecharTexto}>✕</Text>
            </TouchableOpacity>

            <View style={styles.modalConteudo}>
              <Text style={styles.modalNome}>{item.name}</Text>
              {!!item.desc && <Text style={styles.modalDescricao}>{item.desc}</Text>}
              <Text style={styles.modalPreco}>{item.price}</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}