import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../css/styles.js';
import { useTopoConteudo } from '../components/HeaderFlutuante.js';
import { COOKIES_SECOES, DOCES_SECOES, CAFES_SECOES, SALGADOS_SECOES } from '../data/menuData.js';
import CategoriaSecao from '../components/CategoriaSecao.js';
import ItemCard from '../components/ItemCard.js';

// Junta todas as seções das antigas telas (Cookies, Doces, Cafés, Salgados)
// em uma lista só, marcando de qual grupo cada uma veio — usado pelos
// chips de filtro logo abaixo da busca.
const TODAS_SECOES = [
  ...COOKIES_SECOES.map((s) => ({ ...s, grupo: 'Cookies' })),
  ...DOCES_SECOES.map((s) => ({ ...s, grupo: 'Doces' })),
  ...CAFES_SECOES.map((s) => ({ ...s, grupo: 'Cafés' })),
  ...SALGADOS_SECOES.map((s) => ({ ...s, grupo: 'Salgados' })),
];

const GRUPOS = [
  { nome: 'Todos'},
  { nome: 'Cookies'},
  { nome: 'Doces',},
  { nome: 'Cafés',},
  { nome: 'Salgados',},
];

export default function Cardapio({ route }) {
  // Espaço reservado no topo para o conteúdo não começar escondido
  // atrás da barra de navegação flutuante (HeaderFlutuante.js).
  const topo = useTopoConteudo();

  // A Home pode navegar direto para um grupo específico
  // (ex: navigation.navigate('cardapio', { grupoInicial: 'Cookies' })).
  const grupoInicial = route?.params?.grupoInicial || 'Todos';
  const [busca, setBusca] = useState('');
  const [grupoAtivo, setGrupoAtivo] = useState(grupoInicial);

  // Como as telas do Drawer ficam montadas, sincroniza o grupo sempre que
  // a Home navegar de novo para cá com um grupo diferente.
  useEffect(() => {
    if (route?.params?.grupoInicial) {
      setGrupoAtivo(route.params.grupoInicial);
      setBusca('');
    }
  }, [route?.params?.grupoInicial]);

  const termo = busca.trim().toLowerCase();

  // Busca: quando há texto digitado, ignora os grupos e mostra os itens
  // de TODO o cardápio cujo nome ou descrição batem com o termo.
  const itensEncontrados = useMemo(() => {
    if (!termo) return [];
    const resultado = [];
    TODAS_SECOES.forEach((secao) => {
      secao.items.forEach((it) => {
        const alvo = `${it.name} ${it.desc || ''}`.toLowerCase();
        if (alvo.includes(termo)) resultado.push(it);
      });
    });
    return resultado;
  }, [termo]);

  // Navegação normal (sem busca): filtra as seções pelo grupo selecionado.
  const secoesVisiveis = useMemo(() => {
    if (grupoAtivo === 'Todos') return TODAS_SECOES;
    return TODAS_SECOES.filter((s) => s.grupo === grupoAtivo);
  }, [grupoAtivo]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.containerConteudo, { paddingTop: topo }]}
    >
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Pesquisar um produto..."
          placeholderTextColor="#9aa0a6"
          value={busca}
          onChangeText={setBusca}
          returnKeyType="search"
        />
        {busca.length > 0 && (
          <TouchableOpacity onPress={() => setBusca('')}>
            <Text style={styles.buscaLimpar}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {termo ? (
        // ---------- Resultado da busca ----------
        <View>
          <Text style={styles.buscaResultadoContador}>
            {itensEncontrados.length} resultado(s) para "{busca}"
          </Text>
          {itensEncontrados.length === 0 ? (
            <Text style={styles.buscaVazia}>Nenhum produto encontrado. Tente outro termo.</Text>
          ) : (
            itensEncontrados.map((it) => <ItemCard key={it.id} item={it} />)
          )}
        </View>
      ) : (
        // ---------- Navegação por categorias ----------
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtroScroll}>
            {GRUPOS.map((g) => {
              const ativo = grupoAtivo === g.nome;
              return (
                <TouchableOpacity
                  key={g.nome}
                  style={[styles.filtroChip, ativo && styles.filtroChipAtivo]}
                  onPress={() => setGrupoAtivo(g.nome)}
                >
                  <Text style={styles.filtroChipEmoji}>{g.emoji}</Text>
                  <Text style={[styles.filtroChipTexto, ativo && styles.filtroChipTextoAtivo]}>
                    {g.nome}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {secoesVisiveis.map((secao) => (
            <CategoriaSecao key={secao.id} secao={secao} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}