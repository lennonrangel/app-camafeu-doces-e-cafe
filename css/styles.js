import { StyleSheet } from 'react-native';

export const cores = {
  fundo: '#efeae1',
  superficie: '#ffffff',
  superficieAlt: '#f6f2ea',
  verde: '#00a808',
  texto: '#2f3436',
  textoMuted: '#6b7280',
  textoFraco: '#9aa0a6',
  borda: '#e7e2d8',
  placeholderBg: '#eef1ee',
  placeholderBorda: '#c9d6cd',
  verdeHeader: '#244726',
  dourado: '#c89a37',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  containerConteudo: {
    padding: 16,
    paddingBottom: 40,
  },
  
  // ------------------------------------ // 
  // --------------- Home --------------- //
  // ------------------------------------ // 
  homeHeroFundo: {
    marginHorizontal: -16,
    marginTop: -16,
    marginBottom: 22,
    overflow: 'hidden',
  },
  homeHeroEscuro: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(22, 30, 22, 0.42)',
  },
  homeHeroConteudo: {
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 4,
    paddingHorizontal: 22,
  },
  heroEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  heroTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: cores.dourado,
    textAlign: 'center',    
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    marginTop: 25,
    marginBottom: 25,
  },
  heroTagline: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 19,
    paddingHorizontal: 10,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    marginBottom: 18,
  },
  navRow: {
    flexDirection: 'row',
    marginTop: 22,
    marginBottom: 6,
  },
  navBotao: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: cores.superficie,
    borderRadius: 16,
    paddingVertical: 14,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: cores.borda,
  },
  navBotaoEmoji: {
    fontSize: 25,
    marginBottom: 6,
  },
  navBotaoTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: cores.texto,
  },
  destaqueTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 12,
  },
  destaqueCard: {
    width: 150,
    backgroundColor: cores.superficie,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    overflow: 'hidden',
  },
  destaqueImagemPlaceholder: {
    width: '100%',
    height: 120,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  destaqueImagemIcone: {
    fontSize: 22,
    opacity: 0.5,
  },
  destaqueConteudo: {
    padding: 12,
  },
  destaqueCategoria: {
    fontSize: 12,
    fontWeight: 'bold',
    color: cores.dourado,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  destaqueNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 6,
    minHeight: 32,
  },
  destaquePreco: {
    fontSize: 13,
    fontWeight: 'bold',
    color: cores.verde,
  },

  // -------------------------------------------------------------------- // 
  // ---------- Páginas de cardápio (Cookies, Cafés, Salgados) ---------- //
  // -------------------------------------------------------------------- // 
  categoriaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: cores.superficie,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    elevation: 3,
  },
  categoriaTituloLinha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoriaEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  categoriaTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  categoriaContador: {
    fontSize: 13,
    color: cores.textoFraco,
    marginRight: 8,
  },
  categoriaHeaderDireita: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoriaSeta: {
    fontSize: 13,
    color: cores.textoFraco,
  },

  // -------------------------------------------------------------- //
  // ---------- Tela Cardápio (busca + filtros de grupo) ---------- //
  // -------------------------------------------------------------- //
  buscaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.superficie,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: cores.borda,
    marginBottom: 14,
    elevation: 3,
  },
  buscaInput: {
    flex: 1,
    fontSize: 15,
    color: cores.texto,
    paddingVertical: 0,
  },
  buscaLimpar: {
    fontSize: 14,
    color: cores.textoFraco,
    paddingHorizontal: 4,
  },
  buscaVazia: {
    textAlign: 'center',
    color: cores.textoFraco,
    fontSize: 13,
    marginTop: 30,
  },
  buscaResultadoContador: {
    fontSize: 12,
    color: cores.textoMuted,
    marginBottom: 12,
  },
  filtroChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.superficie,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: cores.borda,
    marginRight: 8,
    marginBottom: 15,
  },
  filtroChipAtivo: {
    backgroundColor: cores.verdeHeader,
  },
  filtroChipTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: cores.texto,
  },
  filtroChipTextoAtivo: {
    color: cores.dourado,
  },

  // Cartão de item: imagem (placeholder) à esquerda + conteúdo à direita +
  // botão verde "+" no canto inferior direito, como na referência.
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.superficie,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 10,
    elevation: 3,
  },
  itemImagemPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: cores.placeholderBg,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: cores.placeholderBorda,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemImagemIcone: {
    fontSize: 24,
    opacity: 0.45,
  },
  itemImagemTexto: {
    fontSize: 8,
    color: cores.textoFraco,
    marginTop: 2,
  },
  itemConteudo: {
    flex: 1,
    paddingRight: 34,
    justifyContent: 'center',
  },
  itemNome: {
    fontSize: 14,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 3,
  },
  itemDescricao: {
    fontSize: 12,
    color: cores.textoMuted,
    lineHeight: 17,
    marginBottom: 6,
  },
  itemPreco: {
    fontSize: 14,
    fontWeight: 'bold',
    color: cores.verde,
  },
  botaoAdicionar: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: cores.verdeHeader,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  botaoAdicionarTexto: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },

  // ---------------------------------------------------- //
  // ---------- Pop-up de visualização do item ---------- //
  // ---------------------------------------------------- //
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(20, 22, 18, 0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  modalCartao: {
    width: '100%',
    height: 550,
    maxWidth: 380,
    backgroundColor: cores.superficie,
    borderRadius: 22,
    overflow: 'hidden',
  },
  modalImagem: {
    width: '100%',
    height: 350,
  },
  modalImagemPlaceholder: {
    width: '100%',
    height: 220,
    backgroundColor: cores.placeholderBg,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: cores.placeholderBorda,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImagemIcone: {
    fontSize: 40,
    opacity: 0.45,
  },
  modalFechar: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(20, 22, 18, 0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalFecharTexto: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  modalConteudo: {
    padding: 20,
  },
  modalNome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 8,
  },
  modalDescricao: {
    fontSize: 14,
    color: cores.textoMuted,
    lineHeight: 21,
    marginBottom: 14,
  },
  modalPreco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.verde,
  },

  // -------------------------------------------------- //
  // ---------------- Combo Pé de Café ---------------- //
  // -------------------------------------------------- //
  comboHeader: {
    backgroundColor: cores.verdeHeader,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  comboHeaderImagem: {
    width: '100%',
    height: 200,
  },
  comboHeaderImagemPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: cores.placeholderBg,
    borderBottomWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: cores.placeholderBorda,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comboHeaderConteudo: {
    padding: 18,
  },
  comboTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: cores.dourado,
    marginBottom: 8,
  },
  comboObjetivo: {
    fontSize: 16,
    color: cores.fundo,
    lineHeight: 21,
    paddingBottom: 8,
  },
  comboPrecoLinha: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  comboPreco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.dourado,
    paddingTop: 5,
  },
  comboItem: {
    backgroundColor: cores.superficie,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: cores.borda,
    overflow: 'hidden',
    elevation: 3,
  },
  comboImagem: {
    width: '100%',
    height: 380,
  },
  comboImagemPlaceholder: {
    width: '100%',
    height: 500,
    backgroundColor: cores.placeholderBg,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: cores.placeholderBorda,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comboItemConteudo: {
    padding: 14,
  },
  comboItemTag: {
    fontSize: 15,
    fontWeight: 'bold',
    color: cores.dourado,
    marginBottom: 4,
  },
  comboItemNome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: cores.texto,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  comboItemDescricao: {
    fontSize: 16,
    color: cores.textoMuted,
    lineHeight: 19,
  },
  comboOpcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  comboChip: {
    paddingVertical: 13,
    marginBottom: 12,
  },
  comboChipTexto: {
    fontSize: 16,
  },
  comboAviso: {
    backgroundColor: cores.verdeHeader,
    borderRadius: 16,
    padding: 16,
    marginTop: 6,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: cores.dourado,
    elevation: 3,
  },
  comboAvisoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.dourado,
    marginBottom: 6,
  },
  comboAvisoTexto: {
    fontSize: 16,
    color: cores.fundo,
    lineHeight: 19,
  },
  comboBotao: {
    backgroundColor: cores.verdeHeader,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 3,
  },
  comboBotaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.dourado,
  },
  comboBotaoSecundario: {
    backgroundColor: cores.superficie,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: cores.borda,
    elevation: 3,
  },
  comboBotaoSecundarioTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
  },
  comboBanner: {
    backgroundColor: cores.verdeHeader,
    borderRadius: 16,
    padding: 18,
    marginBottom: 22,
    elevation: 3,
  },
  comboBannerTag: {
    fontSize: 13,
    fontWeight: 'bold',
    color: cores.dourado,
    textTransform: 'uppercase',
    marginBottom: 7,
  },
  comboBannerTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  comboBannerTexto: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 19,
  },

  // --------------------------------------------- //
  // ---------------- Localização ---------------- //
  // --------------------------------------------- //
  localizacaoMapa: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: cores.borda,
    marginBottom: 16,
    elevation: 3,
  },
  localizacaoMapaImagem: {
    width: '100%',
    height: '100%',
  },
  localizacaoMapaDica: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: cores.verdeHeader,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 3,
  },
  localizacaoMapaDicaTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.dourado,
  },

  localizacaoTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 12,
  },

  // Cartão do endereço
  localizacaoCard: {
    backgroundColor: cores.superficie,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
  },
  localizacaoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  localizacaoEmoji: {
    fontSize: 16,
    marginRight: 12,
  },
  localizacaoTexto: {
    fontSize: 16,
    color: cores.texto,
  },

  // Selo "Aberto agora / Fechado agora"
  localizacaoStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    elevation: 3,
  },
  localizacaoPonto: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  localizacaoPontoAberto: {
    backgroundColor: '#1f9d55',
  },
  localizacaoPontoFechado: {
    backgroundColor: '#c0392b',
  },
  localizacaoStatusTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
  },

  // Horário de funcionamento
  localizacaoHorarioCard: {
    backgroundColor: cores.superficie,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: cores.borda,
    elevation: 3,
  },
  localizacaoHorarioLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  localizacaoHorarioDia: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
  },
  localizacaoHorarioValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
  },
  // Linha do dia de hoje
  localizacaoHojeTexto: {
    color: cores.texto,
  },

  // Botões
  localizacaoBotao: {
    backgroundColor: cores.verdeHeader,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 4,
    elevation: 3,
  },
  localizacaoBotaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.dourado,
  },
  localizacaoBotaoSecundario: {
    backgroundColor: cores.superficie,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    elevation: 3,
  },
  localizacaoBotaoSecundarioTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: cores.texto,
  },
  
  // --------------------------------------- //
  // ---------------- Sobre ---------------- //
  // --------------------------------------- //
  
  // Título que fica dentro dos cartões 
  sobreCardTitulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 14,
  },
  // Cartão verde "Nossa proposta"
  sobrePropostaCard: {
    backgroundColor: cores.verdeHeader,
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    elevation: 3,
  },
  sobrePropostaTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: cores.dourado,
    marginBottom: 12,
  },
  sobrePropostaTexto: {
    fontSize: 17,
    color: '#ffffff',
  },
  sobreCapa: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 15,
  },

  // Linha do tempo
  sobreTempoTitulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 16,
  },

  sobreLinhaDoTempo: {
    backgroundColor: cores.superficie,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 16,
    paddingBottom: 0,
    marginBottom: 20,
    elevation: 3,
  },
  sobrePasso: {
    flexDirection: 'row',
  },
  sobreMarcador: {
    width: 20,
    alignItems: 'center',
  },
  sobrePonto: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: cores.dourado,
    marginTop: 3,
  },
  sobreLinhaVertical: {
    flex: 1,
    width: 2,
    backgroundColor: cores.borda,
    marginTop: 4,
  },
  sobrePassoConteudo: {
    flex: 1,
    paddingLeft: 12,
    paddingBottom: 20,
  },
  sobrePassoTag: {
    fontSize: 14,
    fontWeight: 'bold',
    color: cores.dourado,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  sobrePassoTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 4,
  },
  sobrePassoTexto: {
    fontSize: 16,
    color: cores.textoMuted,
    lineHeight: 20,
  },

  // Cartão da fundadora
  sobreFundadora: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.superficie,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    padding: 14,
    marginBottom: 20,
    elevation: 3,
  },
  sobreFundadoraFoto: {
    width: 100,
    height: 100,
    borderRadius: 42,
    marginRight: 14,
  },
  sobreFundadoraFotoPlaceholder: {
    width: 84,
    height: 84,
    borderRadius: 42,
    marginRight: 14,
    backgroundColor: cores.placeholderBg,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: cores.placeholderBorda,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sobreFundadoraInfo: {
    flex: 1,
  },
  sobreFundadoraCargo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: cores.dourado,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  sobreFundadoraNome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 4,
  },
  sobreFundadoraTexto: {
    fontSize: 16,
    color: cores.textoMuted,
    lineHeight: 20,
  },

  // Botões
  sobreBotao: {
    backgroundColor: cores.verdeHeader,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 3,
  },
  sobreBotaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.dourado,
  },
  sobreBotaoSecundario: {
    backgroundColor: cores.superficie,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    elevation: 3,
  },
  sobreBotaoSecundarioTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
  },

  // Nota de rodapé
  sobreRodape: {
    fontSize: 13,
    color: cores.textoMuted,
    lineHeight: 18,
    marginTop: 20,
  },

  // -------------------------------------------------- //
  // ---------- Barra de navegação flutuante ---------- //
  // -------------------------------------------------- //
  headerFlutuante: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: cores.verdeHeader,
    borderRadius: 16,
    paddingHorizontal: 18,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  headerLogo: {
    width: 100,
    height: 50,
  },
  headerMenuBotao: {
    width: 34,
    height: 28,
    justifyContent: 'space-between',
  },
  headerMenuBarra: {
    height: 5,
    borderRadius: 2,
    backgroundColor: cores.dourado,
  },
});