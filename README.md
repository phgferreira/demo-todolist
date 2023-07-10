# demo To Do List

Esse projeto é para o desenvolvimento pessoal de habilidades de front-end usando Vue 3 e algumas bibliotecas.
<hr>

### Dependências
[Vue](https://vuejs.org/guide/introduction.html): Framework de componentização em SFP (*Single File Application*).<br>
[Vuex](https://vuex.vuejs.org/guide/): Gerenciamento de estados compartilhados.<br>
[Vue Router](https://router.vuejs.org/): Gerenciamento de rotas.<br>
[Font Awesome](https://fontawesome.com/docs): Biblioteca de ícones.

#### Dependências do escopo de desenvolvimento
[Typescript](https://www.typescriptlang.org/): Tipagem em Javascript.<br>
[EsLint](https://eslint.org/docs/latest/use/getting-started): Implantação de padrão de código.
[Babel](https://babeljs.io/): Transpilação de código
<hr>

### Estrutura do projeto
```
dist                    -> Diretório de destino dos arquivos gerados pela build
node_modules            -> Dependências do projeto
public                  -> Diretório onde estão os arquivos públicos
src                     -> Diretório do código fonte
|- assets               -> Arquivos estáticos
|- components           -> Componentes reaproveitáveis
|- model                -> Modelos em Typescript
|- router               -> Configuração das rotas configuradas pelo Vue Router
|- store                -> Controle dos estados compartilhados pelo VueX
|- views                -> Páginas que serão chamadas nas rotas
|  App.vue              -> Componente raiz
|  main.ts              -> Configurações básicas e inicialização do projeto
.eslintrc.js            -> Configurações do padrão de código
.gitignore              -> Arquivos e diretórios ignorados pelo Git
babel-config.js         -> Configuração do transpilador
LICENSE                 -> Licença MIT
lint-staged.config.js   -> Configuração de verificação do padrão de código antes do commit
package.json            -> Dependências e scripts de execução do projeto
tsconfig.json           -> Configuração do Typescript
vue.config.js           -> Configuração do Vue
```
<hr>

### Setup
* Instale o NodeJs;
* Clone o repositório;
* Execute o comando `npm install` para download e instalação das dependências;
* Abra o projeto em usa IDE de preferência

### Scripts de execução
```
npm run serve   -> Executa o projeto em modo de desenvolvimento com hot reload
npm run build   -> Combila o código e gera o projeto para ser usado em produção
npm run lint    -> Executa o lint para verificação do código
```
<hr>

### Instalação do FontAwesome
Biblioteca com ícones.

Instalação do core:
```
npm i --save @fortawesome/fontawesome-svg-core
```
Instalação dos ícones e estilos da versão FREE
```
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```
Instalação dos componentes para Vue 3
```
npm i --save @fortawesome/vue-fontawesome@latest-3
```
<hr>

### Dependências do Vuetify
Existem dependências que precisam ser instaladas para o correto funcionamento de alguns componentes:
```
npm i @mdi/font sass
```
Também é necessário inserir os seguintes importes no `main.ts`:
```
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
```
