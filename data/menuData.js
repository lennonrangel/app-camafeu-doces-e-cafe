let idCounter = 0;
const item = (name, price, desc, imagem) => {
  idCounter += 1;
  const dados = { id: `item-${idCounter}`, name, price, desc };
  if (imagem) dados.imagem = imagem;
  return dados;
};

export const COOKIES_SECOES = [
  {
    id: 'cookies-fruta',
    title: 'Cookies de Fruta',
    items: [
      item('Cookie Banoffee', 'R$ 22,00', 'Massa branca com banana desidratada, gotas de chocolate branco, finalizada com creme branco, doce de leite e banana chips.', require('../assets/Cookie-banoffee.jpeg')),
      item('Cookie de Laranja com Nozes-Pecã', 'R$ 24,00', 'Massa branca com laranja, nozes-pecã e gotas de chocolate branco, finalizada com brigadeiro de laranja e nozes-pecã.', require('../assets/Cookie-laranja.jpg')),
      item('Cookie Lemon Pie', 'R$ 22,00', 'Massa branca com limão, gotas de chocolate branco e amêndoas laminadas, finalizada com brigadeiro de limão e marshmallow maçaricado.', require('../assets/Cookie-lemon-pie.jpg')),
      item('Cookie de Maracujá', 'R$ 22,00', 'Massa branca com maracujá, gotas de chocolate branco, finalizada com brigadeiro e geleia de maracujá.', require('../assets/Cookie-maracuja.jpg')),
      item('Cookie de Morango', 'R$ 22,00', 'Massa branca com morango desidratado, gotas de chocolate branco e chocolate ruby, finalizada com brigadeiro e geleia de morango.', require('../assets/Cookie-morango.jpg')),
    ],
  },
  {
    id: 'cookies-premium',
    title: 'Cookies Premium',
    items: [
      item('Cookie de Ferrero Rocher', 'R$ 24,00', 'Massa de chocolate com gotas de chocolate ao leite e pedaços de avelã, finalizada com Nutella, pedaços de avelã e um bombom Ferrero Rocher.', require('../assets/Cookie-ferrero.jpg')),
      item('Cookie de Kinder Bueno', 'R$ 24,00', 'Massa branca com gotas de chocolate ao leite e chocolate branco, finalizada com ganache de Kinder Bueno e biscoito Kinder Bueno.', require('../assets/Cookie-kinder-bueno.jpg')),
      item('Cookie de Lotus Biscoff', 'R$ 24,00', 'Massa branca com biscoito biscoff e gotas de chocolate branco, finalizada com creme e biscoito biscoff.', require('../assets/Cookie-biscoff.jpg')),
      item('Cookie de Ovomaltine', 'R$ 24,00', 'Massa branca com gotas de chocolate ao leite, finalizada com creme crocante e rocks de Ovomaltine.', require('../assets/Cookie-ovomaltine.jpg')),
      item('Cookie de Pistache', 'R$ 24,00', 'Massa branca com gotas de chocolate branco e pistache, finalizada com brigadeiro de pistache.', require('../assets/Cookie-pistache.jpg')),
    ],
  },
  {
    id: 'cookies-chocolate',
    title: 'Cookies de Chocolate',
    items: [
      item('Cookie Matilda (Chocolate Amargo)', 'R$ 22,00', 'Massa de cacau black com gotas de chocolate meio amargo, finalizada com brigadeiro de chocolate meio amargo.', require('../assets/Cookie-matilda.jpg')),
      item('Cookie de Nutella', 'R$ 20,00', 'Massa branca com gotas de chocolate ao leite, finalizada com Nutella.', require('../assets/Cookie-nutella.jpg')),
      item('Cookie de Nutella com Marshmallow', 'R$ 22,00', 'Massa branca com gotas de chocolate ao leite, finalizada com Nutella e marshmallow.', require('../assets/Cookie-nutella-com-marsh.jpg')),
      item('Cookie de Nutella com M&M', 'R$ 22,00', 'Massa branca com gotas de chocolate ao leite, finalizada com Nutella e M&M.', require('../assets/Cookie-nutella-com-mm.jpg')),
      item('Cookie de Oreo', 'R$ 22,00', 'Massa de cacau black com gotas de chocolate ao leite, chocolate branco e biscoito Oreo, finalizada com Nutella e biscoito Oreo.', require('../assets/Cookie-oreo.jpg')),
    ],
  },
  {
    id: 'cookies-classicos',
    title: 'Cookies Clássicos',
    items: [
      item('Cookie de Brigadeiro', 'R$ 20,00', 'Massa de chocolate com gotas de chocolate ao leite, finalizada com brigadeiro de chocolate ao leite.', require('../assets/Cookie-brigadeiro.jpg')),
      item('Cookie de Caramelo Salgado', 'R$ 22,00', 'Massa branca com gotas de chocolate branco e amendoim, finalizada com caramelo salgado, amendoim triturado e flor de sal.', require('../assets/Cookie-caramelo-salgado.jpg')),
      item('Cookie de Doce de Leite', 'R$ 20,00', 'Massa branca com gotas de chocolate ao leite, finalizada com doce de leite e gotas de chocolate caramelo salgado.', require('../assets/Cookie-doce-de-leite.jpeg')),
      item('Cookie de Leite Ninho', 'R$ 20,00', 'Massa de chocolate com gotas de chocolate ao leite, finalizada com brigadeiro de leite Ninho.', require('../assets/Cookie-leite-ninho.jpeg')),
      item('Cookie de Red Velvet', 'R$ 20,00', 'Massa de red velvet com gotas de chocolate branco, finalizada com brigadeiro branco.', require('../assets/Cookie-red-velvet.jpg')),
    ],
  },
];

export const DOCES_SECOES = [
  {
    id: 'brownie-sorvete',
    title: 'Brownie com Sorvete',
    items: [
      item('Brownie Tradicional', 'R$ 25,00', 'Uma fatia servida com uma bola de sorvete.', require('../assets/Brownie-com-sorvete.jpeg')),
      item('Brownie com Doce de Leite', 'R$ 28,00', 'Fatia finalizada com doce de leite e uma bola de sorvete.'),
      item('Brownie com Leite Ninho', 'R$ 30,00', 'Fatia finalizada com ganache de leite ninho e uma bola de sorvete.'),
      item('Brownie com Nutella', 'R$ 30,00', 'Fatia finalizada com Nutella e uma bola de sorvete.'),
      item('Brownie com Pistache', 'R$ 32,00', 'Fatia finalizada com creme de pistache e uma bola de sorvete.'),
    ],
  },
  {
    id: 'cookie-sorvete',
    title: 'Cookie com Sorvete',
    items: [
      item('Cookie na Panelinha', 'R$ 35,00', 'Cookie servido na panelinha, acompanhado de sorvete, morango e calda de chocolate. Serve 1 pessoa.'),
      item('Cookie na Panela', 'R$ 55,00', 'Cookie servido na panela, acompanhado de sorvete, morangos e calda de chocolate. Serve 2 pessoas.', require('../assets/Cookie-na-panela.jpg')),
    ],
  },
  {
    id: 'croissants-doces',
    title: 'Croissants Doces',
    items: [
      item('Croissant com Geleia', 'R$ 26,00', 'Recheado com geleia de morango ou damasco.'),
      item('Croissant de Leite Ninho e Geleia de Morango', 'R$ 30,00', 'Recheado com ganache de leite ninho e geleia artesanal de morango.'),
      item('Croissant de Nutella', 'R$ 28,00', 'Croissant amanteigado recheado com Nutella.'),
      item('Croissant de Pistache', 'R$ 32,00', 'Recheado com ganache de pistache e finalizado com pedaços de pistache.'),
    ],
  },
];


export const CAFES_SECOES = [
  {
    id: 'cafes-quentes',
    title: 'Cafés Quentes',
    items: [
      item('Espresso', 'R$ 9,00', 'Dose curta e intensa de café.', require('../assets/xicara-50ml.jpg')),
      item('Espresso Duplo', 'R$ 14,00', 'Dose dupla de espresso.', require('../assets/xicara-preta.jpg')),
      item('Espresso Macchiato', 'R$ 10,00', 'Uma dose de espresso com um toque de espuma de leite.', require('../assets/espresso-machiatto.jpg')),
      item('Café Lungo', 'R$ 11,00', 'Espresso com mais água, mais leve e menos intenso.', require('../assets/xicara-preta.jpg')),
      item('Café Filtrado V.60', 'R$ 15,00', 'Café coado na V.60, método lento e aromático.', require('../assets/xicara-verde.jpg')),
    ],
  },
  {
    id: 'cafes-com-leite',
    title: 'Cafés com Leite',
    items: [
      item('Cappuccino Brasileiro', 'R$ 17,00', 'Leite vaporizado com pó de cappuccino.', require('../assets/Capuccino-brasileiro.jpg')),
      item('Cappuccino Italiano', 'R$ 17,00', 'Leite vaporizado com uma dose de espresso.', require('../assets/Capuccino-italiano.jpg')),
      item('Latte', 'R$ 17,00', 'Bastante leite vaporizado com uma dose de espresso.', require('../assets/Latte.jpg')),
      item('Mocha', 'R$ 20,00', 'Leite vaporizado, uma dose de espresso e calda de chocolate ou doce de leite.', require('../assets/Mocha.jpeg')),
      item('After Eight', 'R$ 20,00', 'Leite vaporizado com xarope de menta, uma dose de espresso e calda de chocolate.', require('../assets/After-Eight.jpg')),
    ],
  },
  {
    id: 'cafes-gelados',
    title: 'Cafés Gelados',
    items: [
      item('Affogato', 'R$ 20,00', 'Sorvete de creme com uma dose de espresso.'),
      item('Iced Cappuccino', 'R$ 26,00', 'Espresso batido com leite, gelo e coberto com chantilly.'),
      item('Iced Latte', 'R$ 22,00', 'O clássico Latte com baunilha ou caramelo salgado.', require('../assets/Iced-latte.jpg')),
      item('Iced Mocha', 'R$ 22,00', 'Gelada, suave e muito refrescante para dias quentes.', require('../assets/Iced-mocha.jpg')),
      item('Sex on the Coffee', 'R$ 22,00', 'Releitura não alcoólica do clássico Sex on the Beach, substituindo a vodka por espresso.', require('../assets/Sex-on-the-coffee.jpg')),
    ],
  },
];

export const SALGADOS_SECOES = [
  {
    id: 'salgados-franceses',
    title: 'Salgados Franceses',
    items: [
      item('Croissant com Manteiga', 'R$ 22,00', 'Croissant tradicional com manteiga servida à parte.', require('../assets/Croissant.jpg')),
      item('Croissant de Lombo Canadense', 'R$ 30,00', 'Recheado com lombo canadense, rúcula, queijo muçarela de búfala, tomate cereja, salsa crespa, orégano e azeite.'),
      item('Croissant di Parma', 'R$ 35,00', 'Recheado com presunto de parma, rúcula, queijo muçarela de búfala, tomate cereja, salsa crespa, orégano e azeite.', require('../assets/Croissant-di-parma.jpg')),
      item('Croque-Monsieur', 'R$ 38,00', 'Pão brioche dourado na manteiga, recheado com presunto, queijo muçarela, queijo gruyère e molho mornay.', require('../assets/Croque-monseur.jpg')),
      item('Quiche de Alho Poró', 'R$ 20,00', 'Recheada com creme de ovos, alho-poró, tomate e queijo.'),
      item('Quiche Lorraine', 'R$ 20,00', 'Recheada com creme de ovos, bacon, tomate e queijo.', require('../assets/Quiche-Lorraine.jpg')),
    ],
  },
  {
    id: 'salgados-italianos',
    title: 'Salgados Italianos',
    items: [
      item('Bruschetta Caprese', 'R$ 27,00', 'Pão italiano crocante com burrata, rúcula, tomate, muçarela de búfala, salsa crespa, orégano e azeite.', require('../assets/Bruschetta-caprese.jpg')),
      item('Bruschetta di Parma', 'R$ 29,00', 'Pão italiano crocante com burrata, rúcula, tomate, muçarela de búfala, presunto de parma, salsa crespa, orégano e azeite.', require('../assets/Bruschetta-parma.jpg')),
      item('Calzone Caprese', 'R$ 25,00', 'Recheado com queijo burrata, tomate seco e manjericão.', require('../assets/Calzone-caprese.jpg')),
      item('Calzone de Camarão', 'R$ 28,00', 'Recheado com camarão e catupiry.'),
      item('Calzone de Três Queijos', 'R$ 22,00', 'Recheado com queijo muçarela, provolone e catupiry.'),
    ],
  },
  {
    id: 'pao-de-queijo',
    title: 'Pão de Queijo',
    items: [
      item('Pão de Queijo', 'R$ 12,00', 'Massa artesanal com três tipos de queijo.'),
      item('Pão de Queijo com Catupiry', 'R$ 15,00', 'Recheado com requeijão Catupiry.'),
      item('Pão de Queijo com Lombo Canadense', 'R$ 17,00', 'Recheado com lombo canadense e queijo muçarela.', require('../assets/Pao-de-queijo-lombo.jpeg')),
      item('Pão de Queijo Doce', 'R$ 17,00', 'Recheado com Nutella ou doce de leite.'),
      item('Porção de Pão de Queijo', 'R$ 20,00', 'Porção com 5 unidades. Adicional de recheio: R$ 5,00.'),
    ],
  },
];

// Destaques escolhidos manualmente para a Home.
export const DESTAQUES = [
  { ...COOKIES_SECOES[0].items[2], categoria: COOKIES_SECOES[0].title},
  { ...CAFES_SECOES[1].items[0], categoria: CAFES_SECOES[0].title},
  { ...SALGADOS_SECOES[1].items[1], categoria: SALGADOS_SECOES[1].title},
  { ...COOKIES_SECOES[1].items[0], categoria: COOKIES_SECOES[1].title},
];