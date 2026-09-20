# Pipeline CI/CD com GitHub Actions

Projeto acadêmico que demonstra uma pipeline integrada de CI/CD. A cada alteração na branch `main`, o GitHub Actions valida os arquivos da aplicação e, se os testes forem aprovados, publica automaticamente o site no GitHub Pages.

## Fluxo

1. Checkout do código.
2. Configuração do Node.js.
3. Execução de `npm test` para validar arquivos e estrutura HTML.
4. Preparação do artefato do site.
5. Deploy automático no GitHub Pages.

## Executar localmente

Requisito: Node.js 22 ou versão compatível.

```bash
npm test
```

Para visualizar o site, abra `index.html` no navegador ou use um servidor HTTP local.

## Demonstrar uma falha controlada

1. Remova temporariamente a linha `meta name="description"` de `index.html`.
2. Faça commit e push. O job `Integração contínua` deverá falhar.
3. Registre a evidência da falha no GitHub Actions.
4. Restaure a linha, faça novo commit e push.
5. Registre a nova execução aprovada e o deploy.

## Configurar o GitHub Pages

Em **Settings > Pages > Build and deployment > Source**, selecione **GitHub Actions**. Depois, envie um commit para a branch `main` ou execute o workflow manualmente.

## Arquivos principais

- `.github/workflows/cicd.yml`: pipeline de CI/CD.
- `tests/validate.js`: validação automatizada.
- `index.html`, `styles.css`, `script.js`: aplicação publicada.
- `docs/ROTEIRO_EVIDENCIAS.md`: lista dos prints necessários para o relatório.

## Links da entrega

- Repositório: `https://github.com/USUARIO/NOME-DO-REPOSITORIO`
- Aplicação: `https://USUARIO.github.io/NOME-DO-REPOSITORIO/`
