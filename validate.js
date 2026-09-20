const fs = require('fs');

const requiredFiles = ['index.html', 'styles.css', 'script.js'];
const errors = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) errors.push(`Arquivo obrigatório ausente: ${file}`);
}

if (fs.existsSync('index.html')) {
  const html = fs.readFileSync('index.html', 'utf8');
  const checks = [
    ['doctype HTML', /<!doctype html>/i],
    ['idioma pt-BR', /<html[^>]+lang="pt-BR"/i],
    ['meta viewport', /<meta[^>]+name="viewport"/i],
    ['meta description', /<meta[^>]+name="description"/i],
    ['título', /<title>[^<]+<\/title>/i],
    ['folha de estilos', /href="styles\.css"/i],
    ['JavaScript', /src="script\.js"/i]
  ];
  for (const [name, pattern] of checks) {
    if (!pattern.test(html)) errors.push(`Validação não atendida: ${name}`);
  }
}

if (errors.length) {
  console.error('VALIDAÇÃO REPROVADA');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log('VALIDAÇÃO APROVADA');
console.log('Todos os arquivos e requisitos HTML foram verificados com sucesso.');
