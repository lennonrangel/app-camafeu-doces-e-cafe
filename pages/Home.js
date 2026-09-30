import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles, cores } from '../css/styles.js';
import { DESTAQUES } from '../data/menuData.js';
import { useTopoConteudo } from '../components/HeaderFlutuante.js';

const ALTURA_DESVANECER_FUNDO = 30;
const ALTURA_DEGRADE = 30;
const ALTURA_TOTAL_TRANSICAO = ALTURA_DESVANECER_FUNDO + ALTURA_DEGRADE;

export default function Home({ navigation }) {
  const topo = useTopoConteudo();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerConteudo}>
      <ImageBackground
        source={require('../assets/Home.jpeg')}
        style={styles.homeHeroFundo}
        resizeMode="cover"
      >
        <View style={[styles.homeHeroEscuro, { bottom: ALTURA_TOTAL_TRANSICAO }]} />

        <View style={[styles.homeHeroConteudo, { paddingTop: topo }]}>
          <Text style={styles.heroTitulo}>Doce como a vida deve ser!</Text>
          <Text style={styles.heroTagline}>
            Preparamos cada doce com carinho e cuidado, pensando em levar mais sabor e alegria para o seu dia.
          </Text>

          <View style={styles.navRow}>
            <TouchableOpacity style={styles.navBotao} onPress={() => navigation.navigate('cardapio', { grupoInicial: 'Cookies' })}>
              <Text style={styles.navBotaoEmoji}>🍪</Text>
              <Text style={styles.navBotaoTexto}>Cookies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBotao} onPress={() => navigation.navigate('cardapio', { grupoInicial: 'Cafés' })}>
              <Text style={styles.navBotaoEmoji}>☕</Text>
              <Text style={styles.navBotaoTexto}>Cafés</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBotao} onPress={() => navigation.navigate('cardapio', { grupoInicial: 'Salgados' })}>
              <Text style={styles.navBotaoEmoji}>🥐</Text>
              <Text style={styles.navBotaoTexto}>Salgados</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 1) a tinta escura se dissolve suavemente (sem corte seco) */}
        <LinearGradient
          colors={['rgba(20, 30, 22, 0.42)', 'rgba(20, 30, 22, 0)']}
          style={{ height: ALTURA_DESVANECER_FUNDO }}
        />
        {/* 2) a foto se dissolve na cor sólida do app */}
        <LinearGradient
          colors={['transparent', cores.fundo]}
          style={{ height: ALTURA_DEGRADE }}
        />
      </ImageBackground>

      <TouchableOpacity style={styles.comboBanner} activeOpacity={0.85} onPress={() => navigation.navigate('combo')}>
        <Text style={styles.comboBannerTag}>Pé de Café · Combo por R$ 45</Text>
        <Text style={styles.comboBannerTitulo}>Três Afetos</Text>
        <Text style={styles.comboBannerTexto}>
          Iced Mocha, Croque Monsieur e Pudim no Palito. Toque para ver o combo.
        </Text>
      </TouchableOpacity>

      <Text style={styles.destaqueTitulo}>Destaques da casa</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DESTAQUES.map((d) => (
          <View key={d.id} style={styles.destaqueCard}>
            {d.imagem ? (
              <Image source={d.imagem} style={styles.destaqueImagemPlaceholder} />
            ) : (
              <View style={styles.destaqueImagemPlaceholder}>
                <Text style={styles.destaqueImagemIcone}>🖼️</Text>
              </View>
            )}
            <View style={styles.destaqueConteudo}>
              <Text style={styles.destaqueCategoria}>{d.categoria}</Text>
              <Text style={styles.destaqueNome}>{d.name}</Text>
              <Text style={styles.destaquePreco}>{d.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}