import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, Share } from 'react-native';
import { styles } from '../css/styles.js';
import { useTopoConteudo } from '../components/HeaderFlutuante.js';

const URL_LOCAL =
  'https://www.google.com/maps/place/Camafeu+doces+e+caf%C3%A9/data=!4m2!3m1!1s0x0:0xed9b113cc0842265?sa=X&ved=1t:2428&ictx=111';

const ENDERECO = 'São Mateus, 129, Juiz de Fora - MG';
const URL_INSTAGRAM = 'https://www.instagram.com/camafeudocesmg/';
const TELEFONE_LINK = '5532998679033'; // só números, com 55 + DDD

// `dias`: 0 = domingo ... 6 = sábado.
const HORARIOS = [
  { rotulo: 'Segunda a Sábado', dias: [1, 2, 3, 4, 5, 6], abre: 12, fecha: 20, texto: '12h às 20h' },
  { rotulo: 'Domingo', dias: [0], abre: null, fecha: null, texto: 'Fechado' },
];

const QUANDO = ['no domingo', 'na segunda', 'na terça', 'na quarta', 'na quinta', 'na sexta', 'no sábado'];

function horarioDoDia(dia) {
  return HORARIOS.find((h) => h.dias.includes(dia));
}

// Diz se a loja está aberta agora e quando abre/fecha (usa a hora do celular).
function statusAgora(agora = new Date()) {
  const dia = agora.getDay();
  const hora = agora.getHours() + agora.getMinutes() / 60;
  const hoje = horarioDoDia(dia);

  if (hoje.abre !== null && hora >= hoje.abre && hora < hoje.fecha) {
    return { aberto: true, texto: `Aberto agora · fecha às ${hoje.fecha}h` };
  }
  if (hoje.abre !== null && hora < hoje.abre) {
    return { aberto: false, texto: `Fechado agora · abre hoje às ${hoje.abre}h` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (dia + i) % 7;
    const prox = horarioDoDia(d);
    if (prox.abre !== null) {
      const quando = i === 1 ? 'amanhã' : QUANDO[d];
      return { aberto: false, texto: `Fechado agora · abre ${quando} às ${prox.abre}h` };
    }
  }
  return { aberto: false, texto: 'Fechado agora' };
}

export default function Localizacao() {
  const topo = useTopoConteudo();
  const agora = new Date();
  const status = statusAgora(agora);
  const hoje = horarioDoDia(agora.getDay());

  const compartilhar = () =>
    Share.share({ message: `Camafeu Doces e Café\n${ENDERECO}\n${URL_LOCAL}` }).catch(() => {});

  const pedirWhatsApp = () =>
    Linking.openURL(
      `https://wa.me/${TELEFONE_LINK}?text=${encodeURIComponent(
        'Olá! Vim pelo app da Camafeu e gostaria de fazer um pedido.'
      )}`
    );

  const abrirInstagram = () => Linking.openURL(URL_INSTAGRAM);

  return (
    <ScrollView style={styles.container} contentContainerStyle={[styles.containerConteudo, { paddingTop: topo }]}>

      <TouchableOpacity
        style={styles.localizacaoMapa}
        activeOpacity={0.85}
        onPress={() => Linking.openURL(URL_LOCAL)}
        accessibilityRole="link"
        accessibilityLabel="Abrir a Camafeu Doces e Café no Google Maps"
      >
        <Image
          source={require('../assets/Mapa-localizacao.jpg')}
          style={styles.localizacaoMapaImagem}
          resizeMode="cover"
        />
        <View style={styles.localizacaoMapaDica}>
          <Text style={styles.localizacaoMapaDicaTexto}>Abrir no Google Maps</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.localizacaoTitulo}>Onde estamos</Text>
      <View style={styles.localizacaoCard}>
        <TouchableOpacity style={styles.localizacaoLinha} onPress={() => Linking.openURL(URL_LOCAL)}>
          <Text style={styles.localizacaoEmoji}>📍</Text>
          <Text style={styles.localizacaoTexto}>{ENDERECO}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.localizacaoTitulo}>Horário de funcionamento</Text>
      <View style={styles.localizacaoStatus}>
        <View style={[styles.localizacaoPonto, status.aberto ? styles.localizacaoPontoAberto : styles.localizacaoPontoFechado]} />
        <Text style={styles.localizacaoStatusTexto}>{status.texto}</Text>
      </View>
      <View style={styles.localizacaoHorarioCard}>
        {HORARIOS.map((h) => {
          const ehHoje = h === hoje;
          return (
            <View key={h.rotulo} style={styles.localizacaoHorarioLinha}>
              <Text style={[styles.localizacaoHorarioDia, ehHoje && styles.localizacaoHojeTexto]}>{h.rotulo}</Text>
              <Text style={[styles.localizacaoHorarioValor, ehHoje && styles.localizacaoHojeTexto]}>{h.texto}</Text>
            </View>
          );
        })}
      </View>

      <Text style={styles.localizacaoTitulo}>Fale com a gente</Text>
      <TouchableOpacity style={styles.localizacaoBotao} activeOpacity={0.85} onPress={pedirWhatsApp} accessibilityRole="link">
        <Text style={styles.localizacaoBotaoTexto}>Fazer pedido pelo WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.localizacaoBotaoSecundario} activeOpacity={0.85} onPress={abrirInstagram} accessibilityRole="link">
        <Text style={styles.localizacaoBotaoSecundarioTexto}>Seguir no Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.localizacaoBotaoSecundario} activeOpacity={0.85} onPress={compartilhar} accessibilityRole="button">
        <Text style={styles.localizacaoBotaoSecundarioTexto}>Compartilhar endereço</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}