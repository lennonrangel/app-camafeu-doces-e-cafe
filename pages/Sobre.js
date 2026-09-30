import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../css/styles.js';
import { useTopoConteudo } from '../components/HeaderFlutuante.js';

const FOTO_CAPA = require('../assets/Home.jpeg')
const FOTO_ELIANE = require('../assets/Fundadora.jpg')

const HISTORIA = [
  {
    tag: 'Formação',
    titulo: 'Aprendendo o ofício',
    texto: 'Antes de abrir as portas, a Eliane fez cursos de confeitaria e doceria.',
  },
  {
    tag: '01 de outubro de 2024',
    titulo: 'Primeiro Passo',
    texto: 'A Camafeu nasceu como um quiosque no Bras Shopping, no centro de Juiz de Fora.',
  },
  {
    tag: '25 de agosto de 2025',
    titulo: 'Nossa primeira loja',
    texto: 'Depois de um tempo no quiosque, decidimos dar mais esse passo e abrir a nossa loja.',
  },
];

function Foto({ imagem, estiloImagem, estiloPlaceholder }) {
  if (imagem) return <Image source={imagem} style={estiloImagem} resizeMode="cover" />;
  return (
    <View style={estiloPlaceholder}>
      <Text style={styles.sobreFotoIcone}>🖼️</Text>
      <Text style={styles.sobreFotoTexto}>foto</Text>
    </View>
  );
}

export default function Sobre({ navigation }) {
  const topo = useTopoConteudo();

  return (
    <ScrollView style={styles.container} contentContainerStyle={[styles.containerConteudo, { paddingTop: topo }]}>

      <View style={styles.sobrePropostaCard}>
        <Text style={styles.sobrePropostaTitulo}>Nossa proposta</Text>
        <Text style={styles.sobrePropostaTexto}>
          A Camafeu Doces e Café é um espaço dedicado a proporcionar momentos especiais por meio de doces, cafés e outras delícias. Com um ambiente acolhedor e uma proposta que une sabor e qualidade, a marca busca tornar cada visita uma experiência agradável, com um atendimento próximo e cuidadoso.
        </Text>
        <Foto imagem={FOTO_CAPA} estiloImagem={styles.sobreCapa} estiloPlaceholder={styles.sobreCapaPlaceholder} />
      </View>

      <View style={styles.sobreLinhaDoTempo}>
        <Text style={styles.sobreCardTitulo}>Nossa história</Text>
        {HISTORIA.map((passo, i) => (
          <View key={passo.titulo} style={styles.sobrePasso}>
            <View style={styles.sobreMarcador}>
              <View style={styles.sobrePonto} />
              {i < HISTORIA.length - 1 && <View style={styles.sobreLinhaVertical} />}
            </View>
            <View style={styles.sobrePassoConteudo}>
              <Text style={styles.sobrePassoTag}>{passo.tag}</Text>
              <Text style={styles.sobrePassoTitulo}>{passo.titulo}</Text>
              <Text style={styles.sobrePassoTexto}>{passo.texto}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.sobreCard}>
        <View style={styles.sobreFundadora}>
          <Foto
            imagem={FOTO_ELIANE}
            estiloImagem={styles.sobreFundadoraFoto}
            estiloPlaceholder={styles.sobreFundadoraFotoPlaceholder}
          />
          <View style={styles.sobreFundadoraInfo}>
            <Text style={styles.sobreFundadoraCargo}>Idealizadora e dona</Text>
            <Text style={styles.sobreFundadoraNome}>Eliane Porto</Text>
            <Text style={styles.sobreFundadoraTexto}>
              Fez cursos de confeitaria e doceria e criou a Camafeu Doces e Café, do quiosque à loja.
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.sobreBotao} activeOpacity={0.85} onPress={() => navigation.navigate('cardapio')}>
        <Text style={styles.sobreBotaoTexto}>Ver o cardápio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sobreBotaoSecundario} activeOpacity={0.85} onPress={() => navigation.navigate('localizacao')}>
        <Text style={styles.sobreBotaoSecundarioTexto}>Onde estamos e horários</Text>
      </TouchableOpacity>

      <Text style={styles.sobreRodape}>
        Aplicativo desenvolvido como trabalho da disciplina de Desenvolvimento Mobile, com React Native.
      </Text>
    </ScrollView>
  );
}