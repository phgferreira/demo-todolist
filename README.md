# demo-todolist

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
<hr>
### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<hr>

### Instalação do FontAwesome
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

### Vuetify
Biblioteca com componentes prontos para serem usados na página.

Documentação: [Vuetify Get Start](https://vuetifyjs.com/en/getting-started/installation/)

#### Dependências
Existem dependências que precisam ser instaladas para o correto funcionamento de alguns componentes:
```
npm i @mdi/font sass
```
Também é necessário inserir os seguintes importes no `main.ts`:
```
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
```
