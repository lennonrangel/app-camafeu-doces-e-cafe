import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../css/styles.js';
import { useTopoConteudo } from '../components/HeaderFlutuante.js';

const IMAGEM_CAPA = require('../assets/Combo.jpg')

const CROQUES = {
  carne: {
    rotulo: 'Filé mignon suíno',
    desc: 'Brioche tostado recheado com filé mignon suíno, molho bechamel e muçarela, finalizado com bechamel, muçarela e queijo gruyère e gratinado.',
    imagem: require('../assets/Combo-croque-monsieur.jpg')
  },
  veg: {
    rotulo: 'Vegetariano',
    desc: 'Brioche tostado recheado com tomate confit, molho bechamel e muçarela, finalizado com bechamel, muçarela e queijo gruyère e gratinado.',
    imagem: require('../assets/Combo-croque-vegetariano.jpg')
  },
};

const ICED_MOCHA = {
  tag: 'Para beber',
  name: 'Iced Mocha',
  desc: 'Espresso com calda de chocolate, leite gelado, xarope de baunilha e gelo.',
  imagem: require('../assets/Combo-iced-mocha.jpg')
};

const PUDIM = {
  tag: 'Para fechar',
  name: 'Pudim no Palito',
  desc: 'Pudim de leite condensado congelado, recheado com calda de caramelo e coberto com chocolate meio amargo, crocante de caramelo salgado e doce de leite.',
  imagem: require('../assets/Combo-pudim-no-palito.jpg')
};

function ItemCombo({ tag, nome, imagem, children }) {
  return (
    <View style={styles.comboItem}>
      {imagem ? (
        <Image source={imagem} style={styles.comboImagem} resizeMode="cover" />
      ) : (
        <View style={styles.comboImagemPlaceholder}>
          <Text style={styles.comboImagemIcone}>🖼️</Text>
          <Text style={styles.comboImagemTexto}>foto</Text>
        </View>
      )}
      <View style={styles.comboItemConteudo}>
        <Text style={styles.comboItemTag}>{tag}</Text>
        <Text style={styles.comboItemNome}>{nome}</Text>
        {children}
      </View>
    </View>
  );
}

export default function Combo() {
  const topo = useTopoConteudo();
  const [croque, setCroque] = useState('carne');
  const croqueAtual = CROQUES[croque];

  return (
    <ScrollView style={styles.container} contentContainerStyle={[styles.containerConteudo, { paddingTop: topo }]}>

      <View style={styles.comboHeader}>
        {IMAGEM_CAPA ? (
          <Image source={IMAGEM_CAPA} style={styles.comboHeaderImagem} resizeMode="cover" />
        ) : (
          <View style={styles.comboHeaderImagemPlaceholder}>
            <Text style={styles.comboImagemIcone}>🖼️</Text>
            <Text style={styles.comboImagemTexto}>foto</Text>
          </View>
        )}
        <View style={styles.comboHeaderConteudo}>
          <Text style={styles.comboTitulo}>Combo Três Afetos</Text>
          <Text style={styles.comboObjetivo}>
            Nosso combo nasceu do que há de mais familiar na cultura mineira: o pão na chapa, o pudim e o café com leite, sabores do dia a dia, do afeto e da cozinha de quem recebe bem. O combo reúne essas três memórias afetivas e as reinterpreta com técnica e ingredientes premium: o misto-quente vira croque monsieur, o café com leite vira iced mocha e o pudim ganha uma nova forma no palito. A proposta é provar que o simples, quando feito com cuidado e qualidade, também pode ser sofisticado, sem perder o sabor e o aconchego de casa.
          </Text>
          <View style={styles.comboPrecoLinha}>
            <Text style={styles.comboPreco}>Tudo isso por R$ 45</Text>
          </View>
        </View>
      </View>

      <Text style={styles.destaqueTitulo}>O que vem no combo</Text>

      <ItemCombo tag={ICED_MOCHA.tag} nome={ICED_MOCHA.name} imagem={ICED_MOCHA.imagem}>
        <Text style={styles.comboItemDescricao}>{ICED_MOCHA.desc}</Text>
      </ItemCombo>

      <ItemCombo tag="Para comer · escolha a versão" nome="Croque Monsieur" imagem={croqueAtual.imagem}>
        <View style={styles.comboOpcoes}>
          {Object.keys(CROQUES).map((k) => {
            const ativo = croque === k;
            return (
              <TouchableOpacity
                key={k}
                style={[styles.filtroChip, styles.comboChip, ativo && styles.filtroChipAtivo]}
                onPress={() => setCroque(k)}
                accessibilityRole="button"
                accessibilityState={{ selected: ativo }}
              >
              <Text style={[styles.filtroChipTexto, styles.comboChipTexto, ativo && styles.filtroChipTextoAtivo]}>
                {CROQUES[k].rotulo}
              </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={styles.comboItemDescricao}>{croqueAtual.desc}</Text>
      </ItemCombo>

      <ItemCombo tag={PUDIM.tag} nome={PUDIM.name} imagem={PUDIM.imagem}>
        <Text style={styles.comboItemDescricao}>{PUDIM.desc}</Text>
      </ItemCombo>

      <View style={styles.comboAviso}>
        <Text style={styles.comboAvisoTitulo}>Vote pelo QR code da mesa</Text>
        <Text style={styles.comboAvisoTexto}>
          Na mesa tem um QR code do concurso. Leia e vote: é ele que conta pro Pé de Café.
        </Text>
      </View>

    </ScrollView>
  );
}