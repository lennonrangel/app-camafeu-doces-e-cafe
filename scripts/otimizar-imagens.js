const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const PASTA = path.join(RAIZ, 'assets');
const BACKUP = path.join(RAIZ, 'assets-originais');

const LARGURA_PADRAO = 900;   // cards (90 px) e pop-up (350 px de altura)
const LARGURA_CAPA = 1200;    // fotos de capa em tela cheia
const CAPAS = ['Home.jpeg', 'Combo.jpg'];
const QUALIDADE_JPG = 72;

const IGNORAR = ['icon.png', 'adaptive-icon.png', 'splash-icon.png', 'favicon.png'];

const kb = (n) => `${Math.round(n / 1024)} KB`;
const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`;
const ehImagem = (f) => /\.(jpe?g|png)$/i.test(f) && !IGNORAR.includes(f);

async function main() {
  fs.mkdirSync(BACKUP, { recursive: true });

  // 1) Backup das originais (só copia se ainda não existir).
  for (const nome of fs.readdirSync(PASTA).filter(ehImagem)) {
    const copia = path.join(BACKUP, nome);
    if (!fs.existsSync(copia)) fs.copyFileSync(path.join(PASTA, nome), copia);
  }

  // 2) Processa sempre a partir das originais do backup.
  let antes = 0;
  let depois = 0;

  for (const nome of fs.readdirSync(BACKUP).filter(ehImagem)) {
    const origem = path.join(BACKUP, nome);
    const destino = path.join(PASTA, nome);
    const ehPng = /\.png$/i.test(nome);
    const largura = CAPAS.includes(nome) ? LARGURA_CAPA : LARGURA_PADRAO;

    let img = sharp(origem)
      .rotate()
      .resize({ width: largura, height: largura, fit: 'inside', withoutEnlargement: true });

    img = ehPng
      ? img.png({ compressionLevel: 9, palette: true, quality: 85 })
      : img.jpeg({ quality: QUALIDADE_JPG, mozjpeg: true });

    const buffer = await img.toBuffer();
    const tamOriginal = fs.statSync(origem).size;

    // Só troca se o resultado realmente ficou menor.
    if (buffer.length < tamOriginal) {
      fs.writeFileSync(destino, buffer);
    } else {
      fs.copyFileSync(origem, destino);
    }

    const tamFinal = fs.statSync(destino).size;
    antes += tamOriginal;
    depois += tamFinal;
    console.log(`${nome.padEnd(40)} ${kb(tamOriginal).padStart(10)} -> ${kb(tamFinal).padStart(9)}`);
  }

  console.log(`\nTotal: ${mb(antes)} -> ${mb(depois)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});